import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";
import { MenuProvider } from "./Context/MenuContext";
import { Poppins, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bradleymatjie.com"),

  title: {
    default: "Bradley Matjie | Full-Stack Software Engineer",
    template: "%s | Bradley Matjie",
  },

  description:
    "Bradley Matjie is a Johannesburg-based Full-Stack Software Engineer specializing in React, Next.js, TypeScript, APIs, AWS and modern production-ready web applications.",

  keywords: [
    "Bradley Matjie",
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer Johannesburg",
    "Web Developer South Africa",
    "Next.js South Africa",
  ],

  authors: [{ name: "Bradley Matjie" }],
  creator: "Bradley Matjie",
  publisher: "Bradley Matjie",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://bradleymatjie.com",
    siteName: "Bradley Matjie",
    title: "Bradley Matjie | Full-Stack Software Engineer",
    description:
      "Modern web applications built with React, Next.js, TypeScript and scalable technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bradley Matjie Portfolio",
      },
    ],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MenuProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} ${lato.variable} bg-[#050505] text-white antialiased`}
        >
          <Header />
          <main className="pt-20">{children}</main>
          <Analytics />
          <Toaster richColors position="top-right" />
        </body>
      </html>
    </MenuProvider>
  );
}