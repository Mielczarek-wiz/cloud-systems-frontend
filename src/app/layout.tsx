import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Title from "@/components/Title";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Covid 19 stats",
  description: "Application for showing Covid 19 statistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full p-10">
          <Title/>
        </div>
        {children}
      </body>
    </html>
  );
}
