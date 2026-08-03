import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gustavo-motta.vercel.app";
const googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-MF7LFVMT";

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
      <body>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${googleTagManagerId}');
            `,
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
