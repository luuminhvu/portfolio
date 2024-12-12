import Header from "@/components/Header";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetBrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "About me and my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
