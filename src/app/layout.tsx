import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Afacad } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const afacad = Afacad({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-afacad',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "MICHAEL GYIMADU",
  description: "My Digital Resume",
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
    <html lang="en" className={`${poppins.variable}`}>
      <body className={`${poppins.className} antialiased font-extralight`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
