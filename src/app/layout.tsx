import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://mindex.app"), // change to your real domain

  title: {
    default: "Mindex - AI-Powered Video & PDF Knowledge System",
    template: "%s | Mindex",
  },

  description:
    "Mindex transforms YouTube videos and PDFs into structured, searchable knowledge. Extract transcripts, chat with AI, create timestamped notes, and build connected knowledge graphs for smarter learning.",

  keywords: [
    "AI learning tool",
    "chat with YouTube videos",
    "YouTube transcript AI",
    "AI study assistant",
    "RAG application",
    "AI note taking app",
    "timestamped video notes",
    "knowledge graph app",
    "AI for students",
    "AI for developers",
    "PDF AI chat",
    "vector database app",
    "AI research assistant",
  ],

  authors: [{ name: "Mindex Team" }],
  creator: "Mindex",
  publisher: "Mindex",

  openGraph: {
    title: "Mindex - Connected Learning. Instant Insights.",
    description:
      "Upload a YouTube link or PDF, extract insights instantly, chat with AI, create timestamped notes, and build a connected knowledge system.",
    // url: "https://mindex.app",
    siteName: "Mindex",
    images: [
      {
        url: "/og-image.png", // create a proper OG image
        width: 1200,
        height: 630,
        alt: "Mindex - AI-Powered Knowledge Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mindex - AI-Powered Learning Engine",
    description:
      "Turn videos and PDFs into structured knowledge with AI chat, smart summaries, and timestamped notes.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}antialiased`}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
