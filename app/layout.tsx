import type { Metadata } from "next";
import { Providers } from "@/providers/providers";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Scintillar - Next.js Starter",
  description: "Powered by Next.js, TypeScript, and Tailwind CSS. Get your platform live and scale like never before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
