import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/layout/navbar/navbar";
import Footer from "./ui/layout/footer/footer";
import '@fontsource/fira-sans';

export const metadata: Metadata = {
  title: "Player Stats",
  description: "Player Stats of all players on the NBA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
