import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://greentechminerals.com"),
  title: {
    default: "Green Tech Minerals | Industrial Scrap Processing & B2B Iron Trading",
    template: "%s | Green Tech Minerals",
  },
  description: "Green Tech Minerals Global - High-volume industrial scrap processing, metallurgical grading accuracy, and optimized feedstock logistics for steel mills and foundry procurement managers across India.",
  keywords: [
    "industrial scrap processing",
    "iron trading",
    "metallurgical feedstock logistics",
    "HMS 1 HMS 2 scrap",
    "scrap iron procurement",
    "heavy industrial waste reduction",
    "byproduct recovery logistics",
    "metal recycling India",
    "TMT bars",
    "sponge iron",
    "slag crushing"
  ],
  authors: [{ name: "Green Tech Minerals Global" }],
  creator: "Green Tech Minerals Global",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://greentechminerals.com",
    title: "Green Tech Minerals | Industrial Scrap Processing & B2B Iron Trading",
    description: "Reliable metal recycling, scrap trading, and sustainable material processing since 2000. Serving key industrial hubs across Eastern and Central India.",
    siteName: "Green Tech Minerals",
    images: [
      {
        url: "/assets/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Green Tech Minerals Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Tech Minerals | Industrial Scrap Processing & B2B Iron Trading",
    description: "High-volume industrial scrap processing, metallurgical grading accuracy, and optimized feedstock logistics.",
    images: ["/assets/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
