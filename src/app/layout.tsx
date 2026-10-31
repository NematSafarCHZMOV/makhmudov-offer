import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  // latin-ext: Azərbaycan hərfləri (ə, ş, ğ, ı) üçün
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Makhmudov Design Studio × Chizzgy | Video təklifi",
  description: "Chizzgy və Nemət Səfərovun Makhmudov Design Studio üçün hazırladığı video təklifi.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-canvas text-label antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
