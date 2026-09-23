import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingWhatsappButton } from "@/components/ui/floating-whatsapp-button";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aquino Tour | Passeios e Turismo Receptivo em Paraty",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Passeios e turismo receptivo em Paraty para turistas, famÃ­lias, grupos, excursÃµes e agÃªncias. ConheÃ§a opÃ§Ãµes de jipe, escuna e lancha com atendimento local.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Aquino Tour | Passeios e Turismo Receptivo em Paraty",
    description:
      "Passeios de jipe, escuna e lancha em Paraty com atendimento local para turistas, famÃ­lias, grupos e agÃªncias.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/seo/aquino-tour-og.png",
        width: 1200,
        height: 630,
        alt: "Aquino Tour — Turismo em Paraty",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aquino Tour | Passeios em Paraty",
    description:
      "Passeios e turismo receptivo em Paraty com atendimento local.",
    images: ["/images/seo/aquino-tour-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <FloatingWhatsappButton />
      </body>
    </html>
  );
}



