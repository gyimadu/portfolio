import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";

const afacad = Afacad({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-afacad',
});

export const metadata: Metadata = {
  title: "Gyimadu",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${afacad.variable}`}>
      <body className={`${afacad.className} antialiased font-normal`}>{children}</body>
    </html>
  );
}
