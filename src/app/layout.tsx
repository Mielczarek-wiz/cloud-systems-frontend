import type { Metadata } from "next";
import "./globals.css";
import Title from "@/components/Title";

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
      <body>
        <div className="pt-10 h-1/6">
          <Title />
        </div>
        <section className="h-5/6 overflow-y-auto mx-auto">{children}</section>
      </body>
    </html>
  );
}
