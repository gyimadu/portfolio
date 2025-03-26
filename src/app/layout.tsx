import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Oxygen } from "next/font/google";
import "./globals.css";
import localfont from 'next/font/local';

{/*const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})*/}

const f1Atomic = localfont({
  src: './fonts/f1_atomic.woff2',
  variable: '--font-f1-atomic',
})

const oxygen = Oxygen({
  weight: ['300', '400','700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "MICHAEL GYIMADU",
  description: "My Digital Resume",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/apple-touch-icon.png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000'
      }
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "MICHAEL GYIMADU",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${f1Atomic.variable} ${oxygen.variable}`}>
      <body className="antialiased font-light">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
