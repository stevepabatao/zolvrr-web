import type { Metadata, Viewport } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Zolvrr: Find, Buy, or Sell: Your Ideal Property Awaits",
  description: "Your Full Service Real Estate Brokerage for Buying, Selling, Renting and Investing Properties in Philippines ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
