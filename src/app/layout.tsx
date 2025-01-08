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
  title: "MICHAEL GYIMADU",
  description: "Machine Learning Engineer & Software Developer",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  },
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
