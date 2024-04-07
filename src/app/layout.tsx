import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/layout/navbar/navbar";
import Footer from "./ui/layout/footer/footer";
import "@fontsource/fira-sans";
import LiveGames from "./ui/layout/livegames/liveGames";

export const metadata: Metadata = {
  title: "Player Stats",
  description: "Player Stats of all players on the NBA",
  icons: {
    icon: "/logo.png",
  },
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
        <LiveGames />
        {children}
        <Footer />
      </body>
    </html>
  );
}
