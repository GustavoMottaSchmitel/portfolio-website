import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gustavo-motta-portfolio.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gustavo Motta — Software que move negócios",
  description:
    "Gustavo Motta, fundador da NuvionTech. Estratégia, design e engenharia para criar landing pages, produtos digitais e sistemas sob medida.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gustavo Motta — Software que move negócios",
    description:
      "Da estratégia e do design ao software em produção. Conheça projetos digitais construídos para mover negócios.",
    url: "/",
    siteName: "Gustavo Motta",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gustavo Motta — Software que move negócios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Motta — Software que move negócios",
    description:
      "Estratégia, design e engenharia para produtos digitais que movem negócios.",
    images: ["/opengraph-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f2ed",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
