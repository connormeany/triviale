import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import "@fontsource/inter/400.css"; // Regular weight
import "@fontsource/inter/700.css"; // Bold weight

export const metadata: Metadata = {
  title: "Triviale",
  description: "Challenge yourself with Triviale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className="font-inter antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
