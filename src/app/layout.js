import { Geist_Mono, JetBrains_Mono, VT323 } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "./contexts/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import LeftNavbar from "@/components/layout/LeftNavbar";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/next";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-jetbrains",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
});

export const metadata = {
  metadataBase: new URL("https://www.hfanes.com/"),
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
    url: "https://www.hfanes.com/",
    siteName: "hfa Portfolio",
    images: [
      {
        url: "https://www.hfanes.com/images/hfa_open.webp",
        width: 1200,
        height: 630,
        alt: "hfa Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "hfa | Full-Stack Developer Portfolio",
    description: "Explore my full-stack projects, skills, and experience.",
    images: "https://www.hfanes.com/images/hfa_open.webp",
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
