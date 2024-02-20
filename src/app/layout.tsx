import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/layout/navbar/navbar";
import Footer from "./ui/layout/footer/footer";

const inter = Nunito({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
