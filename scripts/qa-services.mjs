import { spawn } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const port = 9333;
const profile = path.join(tmpdir(), `aquinotour-qa-${Date.now()}`);
const screenshotPath = path.resolve("screenshots/services-correction-1440x900.png");

await mkdir(path.dirname(screenshotPath), { recursive: true });

const chrome = spawn(chromePath, [
  "--headless=new",
  `--remote-debugging-port=${port}`,
  "--remote-allow-origins=*",
  `--user-data-dir=${profile}`,
  "--disk-cache-size=1",
  "--disable-application-cache",
  "--disable-gpu",
  "--no-first-run",
  "--no-default-browser-check",
  "--window-size=1440,900",
  "about:blank",
], { stdio: "ignore" });

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchJson(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.json();
}

for (let i = 0; i < 50; i += 1) {
  try {
    await fetchJson(`http://127.0.0.1:${port}/json/version`);
    break;
  } catch {
    await wait(100);
  }
}

const targets = await fetchJson(`http://127.0.0.1:${port}/json/list`);
const target = targets.find((item) => item.type === "page");

let seq = 0;
const pending = new Map();
const ws = new WebSocket(target.webSocketDebuggerUrl);

function send(method, params = {}) {
  const id = ++seq;
  ws.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`Timeout: ${method}`));
    }, 20000);
    pending.set(id, { resolve, reject, timeout });
  });
}

await new Promise((resolve, reject) => {
  ws.addEventListener("open", resolve, { once: true });
  ws.addEventListener("error", reject, { once: true });
});

ws.onmessage = async (event) => {
  const data =
    typeof event.data === "string"
      ? event.data
      : event.data instanceof Blob
        ? await event.data.text()
        : Buffer.from(event.data).toString("utf8");
  const message = JSON.parse(data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject, timeout } = pending.get(message.id);
    pending.delete(message.id);
    clearTimeout(timeout);
    if (message.error) reject(new Error(JSON.stringify(message.error)));
    else resolve(message.result);
  }
};

await send("Page.enable");
await send("Runtime.enable");
await send("Network.enable");
await send("Network.setCacheDisabled", { cacheDisabled: true });
await send("Page.navigate", { url: `http://localhost:3000/?qa=${Date.now()}` });

await new Promise((resolve) => {
  const done = () => {
    ws.removeEventListener("message", listener);
    resolve();
  };
  const listener = async (event) => {
    const data =
      typeof event.data === "string"
        ? event.data
        : event.data instanceof Blob
          ? await event.data.text()
          : Buffer.from(event.data).toString("utf8");
    const message = JSON.parse(data);
    if (message.method === "Page.loadEventFired") done();
  };
  ws.addEventListener("message", listener);
  setTimeout(done, 8000);
});

await wait(1000);

const expression = `(() => {
  const section = document.querySelector("#passeios");
  section.scrollIntoView({ block: "start" });
  const headerLayer = section.children[0];
  const cardsLayer = section.children[1];
  const cardGrid = cardsLayer.querySelector(".md\\\\:grid");
  const firstCard = cardsLayer.querySelector("[class*=rounded-2xl]");
  const barcodeWrapper = firstCard.querySelector("div.w-8, div.lg\\\\:w-9")?.firstElementChild;
  const barcodeBars = [...firstCard.querySelectorAll("span[style*=width]")].filter((node) => node.parentElement === barcodeWrapper);
  const sectionRect = section.getBoundingClientRect();
  const headerRect = headerLayer.getBoundingClientRect();
  const cardsRect = cardsLayer.getBoundingClientRect();
  const gridRect = cardGrid.getBoundingClientRect();
  const barcodeRect = barcodeWrapper.getBoundingClientRect();
  const firstBarStyle = getComputedStyle(barcodeBars[0]);
  const bars = barcodeBars.map((bar) => {
    const rect = bar.getBoundingClientRect();
    const style = getComputedStyle(bar);
    return {
      width: rect.width,
      height: rect.height,
      backgroundColor: style.backgroundColor,
      color: style.color,
    };
  });
  return {
    sectionClass: section.className,
    headerLayerClass: headerLayer.className,
    cardsLayerClass: cardsLayer.className,
    cardGridDisplay: getComputedStyle(cardGrid).display,
    headerBottom: Math.round(headerRect.bottom - sectionRect.top),
    cardsTop: Math.round(cardsRect.top - sectionRect.top),
    gridTop: Math.round(gridRect.top - sectionRect.top),
    imageEndsBeforeCards: headerRect.bottom <= cardsRect.top,
    cardsBackground: getComputedStyle(cardsLayer).backgroundColor,
    barcodeWrapperClass: barcodeWrapper.className,
    barcodeWrapperHeight: barcodeRect.height,
    barcodeWrapperMinHeight: getComputedStyle(barcodeWrapper).minHeight,
    barcodeBarsCount: barcodeBars.length,
    firstBarBackground: firstBarStyle.backgroundColor,
    firstBarHeight: barcodeBars[0].getBoundingClientRect().height,
    zeroHeightBars: bars.filter((bar) => bar.height <= 0).length,
  };
})()`;

const evaluation = await send("Runtime.evaluate", {
  expression,
  awaitPromise: true,
  returnByValue: true,
});

await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: true }).then(async (result) => {
  await writeFile(screenshotPath, Buffer.from(result.data, "base64"));
});

console.log(JSON.stringify({ screenshotPath, ...evaluation.result.value }, null, 2));

ws.close();
chrome.kill();
await rm(profile, { recursive: true, force: true });
