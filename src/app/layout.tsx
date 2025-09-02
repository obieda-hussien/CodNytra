import type { Metadata } from "next";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Initialize FontAwesome icons
import "@/lib/icons";

export const metadata: Metadata = {
  title: "Codenetra - شركة تطوير التطبيقات المبتكرة",
  description: "Codenetra هي شركة تقنية مبتكرة متخصصة في تطوير التطبيقات والحلول البرمجية الذكية. نحول أفكارك إلى واقع رقمي.",
  keywords: "تطوير تطبيقات, برمجة, تطبيقات موبايل, تطبيقات ويب, Codenetra",
  authors: [{ name: "Codenetra Team" }],
  openGraph: {
    title: "Codenetra - شركة تطوير التطبيقات المبتكرة",
    description: "نحول أفكارك إلى واقع رقمي مع أحدث التقنيات",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codenetra - شركة تطوير التطبيقات المبتكرة",
    description: "نحول أفكارك إلى واقع رقمي مع أحدث التقنيات",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
