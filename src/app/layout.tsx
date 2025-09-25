import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ComeOn!",
  description: "Lets play at ComeOn!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header />
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
          {children}
        </div>
      </body>
    </html>
  );
}
