import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.infiniteagencycrm.com'),
  title: "Ananta IA - Soluciones CRM Personalizadas",
  description: "Soluciones CRM completamente personalizadas. Tu marca, tu experiencia, sin que tus clientes sepan que existe otra tecnología detrás.",
  keywords: ["CRM", "CRM Personalizado", "Ananta IA", "Software de gestión de clientes", "Marca blanca", "Ananta IA"],
  authors: [{ name: "Ananta IA" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    title: "Ananta IA - Soluciones CRM Personalizadas",
    description: "Soluciones CRM completamente personalizadas. Tu marca, tu experiencia, sin que tus clientes sepan que existe otra tecnología detrás.",
    siteName: "Ananta IA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananta IA - Soluciones CRM Personalizadas",
    description: "Soluciones CRM completamente personalizadas. Tu marca, tu experiencia, sin que tus clientes sepan que existe otra tecnología detrás.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png" }
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <head>
        {/* Google Tag Manager */}
      </head>
      <body className={inter.className}>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N5SL5CXS');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N5SL5CXS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
