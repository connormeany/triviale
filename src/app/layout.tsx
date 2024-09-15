import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/inter/400.css"; // Regular weight
import "@fontsource/inter/700.css"; // Bold weight

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      </body>
    </html>
  );
}
