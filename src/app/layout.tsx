import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Afacad } from "next/font/google";
import "./globals.css";

const afacad = Afacad({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-afacad',
});

export const metadata: Metadata = {
  title: "Home",
  description: "Michael&apos;s digital resume and random thoughts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${afacad.variable}`}>
      <body className={`${afacad.className} antialiased font-normal`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
