import type { Metadata } from "next";
import { inter, jetbrainsMono } from "../lib/fonts";
import "./globals.css";
import "../lib/icons";

export const metadata: Metadata = {
  title: "Codenetra - تطوير تطبيقات مبتكرة وحلول برمجية ذكية",
  description: "شركة Codenetra الرائدة في تطوير التطبيقات المبتكرة والحلول البرمجية الذكية. نحول فكرتك إلى واقع رقمي عصري وفائق الأداء",
  keywords: "تطوير تطبيقات, برمجة, تطبيقات موبايل, تطبيقات ويب, Codenetra",
  authors: [{ name: "Codenetra Team" }],
  openGraph: {
    title: "Codenetra - تطوير تطبيقات مبتكرة",
    description: "شركة Codenetra الرائدة في تطوير التطبيقات المبتكرة والحلول البرمجية الذكية",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codenetra - تطوير تطبيقات مبتكرة",
    description: "شركة Codenetra الرائدة في تطوير التطبيقات المبتكرة والحلول البرمجية الذكية",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Codenetra",
              "description": "شركة Codenetra الرائدة في تطوير التطبيقات المبتكرة والحلول البرمجية الذكية",
              "url": "https://codenetra.com",
              "foundingDate": "2024",
              "sameAs": [
                "https://github.com/codenetra",
                "https://linkedin.com/company/codenetra",
                "https://twitter.com/codenetra"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white dark:bg-dark-background text-gray-900 dark:text-dark-text transition-colors duration-200`}
      >
        {children}
      </body>
    </html>
  );
}
