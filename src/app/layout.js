import LeftNavbar from "@/components/layout/LeftNavbar";
import MobileNavbar from "@/components/layout/MobileNavbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/seo/JsonLd";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JetBrains_Mono, VT323 } from "next/font/google";
import ThemeProvider from "./contexts/ThemeProvider";
import "./globals.css";

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
  applicationName: "hfa Portfolio",
  title: "hfa | Full-Stack Developer Portfolio",
  category: "technology",
  authors: [{ name: "Hugo Anes", url: "https://www.hfanes.com/" }],
  creator: "@hfa_dev",
  publisher: "Hugo Anes",
  keywords: [
    "hfa",
    "hfanes",
    "Hugo Anes",
    "full-stack developer",
    "full-stack developer portfolio",
    "JavaScript developer",
    "React developer",
    "Next.js developer",
    "Java developer",
    "Spring Boot developer",
    "portfolio",
    "web development",
    "software engineering",
  ],
  description:
    "Full-stack web developer specializing in modern JavaScript and Java frameworks, backend APIs, and responsive design.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/yellow_hfa.ico",
  },
  openGraph: {
    title: "hfa | Full-Stack Developer Portfolio",
    description:
      "Explore my projects, skills, and contact info as a full-stack developer.",
    url: "https://www.hfanes.com",
    siteName: "hfa Portfolio",
    images: [
      {
        url: "https://www.hfanes.com/images/hfa_open.png",
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
    site: "@hfa_dev",
    creator: "@hfa_dev",
    title: "hfa | Full-Stack Developer Portfolio",
    description: "Explore my full-stack projects, skills, and experience.",
    images: {
      url: "https://www.hfanes.com/images/hfa_open.png",
      alt: "hfa Portfolio Preview",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} ${vt323.variable} `}>
        <ThemeProvider>
          <MobileNavbar />
          <div className="hidden lg:block">
            <Navbar />
            <LeftNavbar />
          </div>
          <ScrollToTopButton />
          <JsonLd />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
