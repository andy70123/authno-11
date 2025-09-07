import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Authno - Expert Authentication",
  description: "AI powered verification that can provide accurate assessments immediately",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  other: {
    "Cache-Control": "public, max-age=31536000"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
