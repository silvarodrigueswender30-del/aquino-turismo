import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { FloatingWhatsappButton } from "@/components/ui/floating-whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aquinotour.vercel.app"),
  title: "Aquino Tour — Passeios e Experiências Náuticas em Paraty",
  description: "Descubra Paraty por outro ângulo. Passeios, experiências e atendimento local para descobrir o melhor de Paraty, praias e ilhas.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aquinotour.vercel.app",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Aquino Tour — Passeios em Paraty",
    description: "Passeios, experiências e atendimento local para descobrir o melhor de Paraty.",
    url: "https://aquinotour.vercel.app",
    siteName: "Aquino Tour",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aquino Tour — Passeio em Paraty",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aquino Tour — Passeios em Paraty",
    description: "Descubra Paraty por outro ângulo. Passeios e experiências náuticas.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <FloatingWhatsappButton />
      </body>
    </html>
  );
}
