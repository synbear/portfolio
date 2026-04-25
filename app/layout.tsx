import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Bukhari's Portfolio",
  description: "Modern & Minimalist Portfolio - built with Nextjs",
  icons: {
    icon: "/synbear.png",
    apple: "/synbear.png",
  },
  openGraph: {
    images: [
      {
        url: "/synbear.png",
        width: 2048,
        height: 2048,
        alt: "Synbear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/synbear.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          window.addEventListener('error', function(e) {
            if (e.message && e.message.includes('Failed to load chunk')) {
              window.location.reload();
            }
          });
        `}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
