import { Geist_Mono, JetBrains_Mono, VT323 } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  //TODO: Change metadataBase URL
  // metadataBase: new URL(""),
  title: "hfa | Full-Stack Developer Portfolio",
  description:
    "Full-stack web developer specializing in modern JavaScript and Java frameworks, backend APIs, and responsive design.",
  icons: {
    icon: "/yellow_hfa.ico",
  },
  openGraph: {
    title: "hfa | Full-Stack Developer Portfolio",
    description:
      "Explore my projects, skills, and contact info as a full-stack developer.",
    icons: {
      icon: "/yellow_hfa.ico",
    },
    //TODO: Change url
    url: "",
    siteName: "hfa Portfolio",
    images: [
      {
        //Todo: Change image
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "hfa Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    //Todo: Change image
    card: "summary_large_image",
    title: "hfa | Full-Stack Developer Portfolio",
    description: "Explore my full-stack projects, skills, and experience.",
    //Todo: Change image
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} ${vt323.variable} `}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
