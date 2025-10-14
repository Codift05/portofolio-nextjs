import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import ScrollProgress from "@/components/scroll-progress";
import Image from "next/image";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mif — Personal Portfolio",
  description: "Portofolio Miftahuddin S. Arsyad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className={`${display.variable} ${mono.variable} antialiased bg-background text-foreground`}>
        <div className="min-h-screen flex flex-col relative">
          <ScrollProgress />
          <SiteHeader />
          
          <main className="flex-1">{children}</main>
          <footer className="border-t border-border">
            <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Miftahuddin S. Arsyad
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
