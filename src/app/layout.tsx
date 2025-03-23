import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "./components/navbar/navbar";
import "./globals.css";
import { Footer } from "./components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VDM Motorsports",
  description:
    "VDM Motorsports specializes in high-performance BMW E30 transmission rebuilds. From precision-engineered restorations to custom upgrades, we deliver top-tier craftsmanship for enthusiasts who demand the best. Based in Phoenix, we bring expert-level service to keep your classic BMW shifting flawlessly. Contact us today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="overflow-x-hidden" lang="en">
      <body
        className={`bg-neutral-200 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
