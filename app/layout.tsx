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
  metadataBase: new URL("https://synbear.com"),
  title: "Ahmed Bukhari | Full Stack Developer & Designer",
  description: "Modern & Minimalist Portfolio - built with Nextjs",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: [
      { url: "/synbear-logo.png" },
      { url: "/synbear-logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/synbear-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Ahmed Bukhari | Full Stack Developer & Designer",
    description: "Modern & Minimalist Portfolio - built with Nextjs",
    url: "https://synbear.com",
    siteName: "Ahmed Bukhari Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/synbear-logo.png",
        width: 1200,
        height: 1200,
        alt: "Ahmed Bukhari - Synbear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Bukhari | Full Stack Developer & Designer",
    description: "Modern & Minimalist Portfolio - built with Nextjs",
    creator: "@synbear",
    images: ["/synbear-logo.png"],
  },
  category: "technology",
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#000319",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ahmed Bukhari",
              "url": "https://synbear.com",
              "image": "https://synbear.com/synbear-logo.png",
              "sameAs": [
                "https://github.com/synbear",
                "https://twitter.com/synbear"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": "Ahmed Bukhari is a Full Stack Developer specializing in building modern, minimalist, and high-performance web applications."
            })
          }}
        />
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
