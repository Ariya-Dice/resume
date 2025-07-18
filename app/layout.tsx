// app/layout.tsx

import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google"; // Import font from next/font
import "./globals.css";

// Configure font
const vazirmatn = Vazirmatn({ subsets: ["latin", "arabic"] });

export const metadata: Metadata = {
  title: "Saeed Abdollahiyan - Full-Stack & Web3 Developer",
  description: "The professional portfolio of Saeed Abdollahiyan, a skilled Full-Stack and Web3 Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The lang attribute will be managed by the client component
    <html lang="en">
      <body className={`${vazirmatn.className} px-4 py-8 md:px-6 md:py-10`}>
        {children}
      </body>
    </html>
  );
}