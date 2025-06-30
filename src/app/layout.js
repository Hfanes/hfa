import { Geist_Mono, JetBrains_Mono, VT323 } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "./contexts/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import LeftNavbar from "@/components/layout/LeftNavbar";
import Footer from "@/components/sections/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "700", // your desired weights
  variable: "--font-jetbrains", // optional for Tailwind or CSS var
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL("hfanes.com"),
  title: "hfa | Full-Stack Developer Portfolio",
  description:
    "Full-stack web developer specializing in modern JavaScript and Java frameworks, backend APIs, and responsive design.",
  icons: {
    icon: "/images/yellow_hfa.ico",
  },
  openGraph: {
    title: "hfa | Full-Stack Developer Portfolio",
    description:
      "Explore my projects, skills, and contact info as a full-stack developer.",
    icons: {
      icon: "/images/yellow_hfa.ico",
    },
    url: "hfanes.com",
    siteName: "hfa Portfolio",
    images: [
      {
        url: "/images/hfa_open.png",
        width: 1200,
        height: 630,
        alt: "hfa Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "hfa | Full-Stack Developer Portfolio",
    description: "Explore my full-stack projects, skills, and experience.",
    images: "/images/hfa_open.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} ${vt323.variable} `}>
        <ThemeProvider>
          <Navbar />
          <LeftNavbar />
          {children}
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
