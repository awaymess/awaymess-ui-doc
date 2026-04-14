import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import EmotionRegistry from "@/components/EmotionRegistry";
import ThemeRegistry from "@/components/ThemeRegistry";
import DocsLayout from "@/components/DocsLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@awaymess/ui | Component Showcase",
  description: "Showcase for the custom MUI UI Component Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EmotionRegistry>
          <ThemeRegistry>
            <DocsLayout>{children}</DocsLayout>
          </ThemeRegistry>
        </EmotionRegistry>
      </body>
    </html>
  );
}
