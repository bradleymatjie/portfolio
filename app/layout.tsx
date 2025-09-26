import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { MenuProvider } from "./Context/MenuContext";
import { Poppins, Lato } from "next/font/google";

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
  icons: [
    { rel: "icon", url: "/favicon.ico" }, // Default favicon
    { rel: "shortcut icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/favicon.ico" }, // For iOS devices
    { rel: "icon", url: "/favicon.ico", sizes: "32x32" },
    { rel: "icon", url: "/favicon.ico", sizes: "16x16" },
  ],
  openGraph: {
    title: "Bradley Matjie",
    description: "Software Engineer specializing in modern frontend development.",
    url: "https://bradleymatjie.com",
    siteName: "Bradley Matjie",
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
        </body>
      </html>
    </MenuProvider>
  );
}