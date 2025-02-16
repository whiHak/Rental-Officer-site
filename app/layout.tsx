import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Rent Showcase",
  description: "The place where you will find the best cars in your need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`relative`}>{children}</body>
      </html>
  );
}
