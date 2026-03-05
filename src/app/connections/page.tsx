import CreateConnection from "@/features/connections/create-connection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connections - Mindex | Add Videos, PDFs & Knowledge Sources",
  description:
    "Add and manage your knowledge sources in Mindex. Connect YouTube videos, upload PDFs, and build your personal AI knowledge base to ask questions and extract insights instantly.",

  keywords: [
    "Mindex connections",
    "upload youtube videos",
    "upload PDFs",
    "AI knowledge sources",
    "AI learning tool",
    "knowledge management AI",
    "AI study assistant",
    "AI research tool",
    "video transcript AI",
    "AI document analysis"
  ],

  robots: "index, follow",

  openGraph: {
    title: "Connections - Mindex",
    description:
      "Upload videos, connect PDFs, and build your AI-powered knowledge base with Mindex.",
    // url: "https://yourdomain.com/connections",
    siteName: "Mindex",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Connections - Mindex",
    description:
      "Add videos, PDFs, and knowledge sources to your AI-powered learning workspace.",
  },
};

export default function ConnectionsPage() {
  return (
    <>
      <section className="h-screen overflow-y-auto md:overflow-hidden px-2 sm:px-4 md:px-6 bg-white">
        <CreateConnection />
      </section>
    </>
  )
}
