import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { MenuProvider } from "./Context/MenuContext";
import { Poppins, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adjust weights as needed
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"], // adjust weights as needed
});

export const metadata: Metadata = {
  title: "Bradley Matjie",
  keywords: ["software engineer", "React", "Next.js", "UI/UX", "frontend development"],
  authors: [{ name: "Bradley Matjie" }],
  icons: {
      icon: "/favicon.ico",
    },
  openGraph: {
    title: "Bradley Matjie",
    description: "Software Engineer specializing in modern frontend development.",
    url: "https://bradleymatjie.com",
    siteName: "Bradley Matjie",
    images: [
      {
        url: "https://bradleymatjie.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <MenuProvider>
      <html lang="en">
        
        <body className={`${poppins.variable} ${lato.variable} antialiased`}>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </body>
      </html>
    </MenuProvider>
  );
}