import type { Metadata } from "next";
import { LogSnagProvider } from '@logsnag/next';
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Openinary | Open-source, self-hostable alternative to Cloudinary",
  description:
    "Open-source, self-hostable alternative to Cloudinary. Self-hosted, no vendor lock-in, works with S3/R2/MinIO. Upload, transform, and deliver images and videos from the edge.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logsnagToken = process.env.NEXT_PUBLIC_LOGSNAG_TOKEN;
  const logsnagProject = process.env.NEXT_PUBLIC_LOGSNAG_PROJECT || "openinary";
  
  return (
    <html lang="en">
      <head>
        {logsnagToken && (
          <LogSnagProvider token={logsnagToken} project={logsnagProject} />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
