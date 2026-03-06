import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
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
    <section className="px-4 md:px-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          Add a new connection
        </h1>
        <p className="text-sm text-muted-foreground max-w-xl">
          Choose what you want to connect to your Mindex workspace. Start with a
          YouTube video, a PDF document, or any web page.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* YouTube video link */}
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <div className="space-y-1.5">
            <h2 className="font-medium text-sm">Add a YouTube video link</h2>
            <p className="text-xs text-muted-foreground">
              Paste a YouTube URL and let Mindex process the video for
              questions and insights.
            </p>
          </div>

          <div className="mt-4 space-y-2">
            <Label htmlFor="youtube-url" className="text-xs font-medium">
              YouTube URL
            </Label>
            <div className="space-y-2">
              <Input
                id="youtube-url"
                type="url"
                placeholder="https://www.youtube.com/watch?v=..."
                className="flex-1"
              />
              <Button type="button" size="sm">
                Connect
              </Button>
            </div>
          </div>
        </div>

        {/* PDF upload */}
        <div className="rounded-lg border bg-white p-5 shadow-sm relative opacity-70 pointer-events-none">
          <div className="flex items-center space-x-2">
            <h2 className="font-medium text-sm">Add PDF</h2>
            <Badge variant="secondary" className="text-[0.65rem]">Coming soon</Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">
            Upload a PDF to turn it into a searchable, question‑answerable
            knowledge source.
          </p>

          <div className="mt-4 space-y-2">
            <Label htmlFor="pdf-file" className="text-xs font-medium">
              PDF file
            </Label>
            <Input
              id="pdf-file"
              type="file"
              accept="application/pdf"
              className="text-xs"
              disabled
            />
            <Button type="button" size="sm" className="mt-2 w-full md:w-auto" disabled>
              Upload PDF
            </Button>
          </div>
        </div>

        {/* Web page */}
        <div className="rounded-lg border bg-white p-5 shadow-sm md:col-span-2 relative opacity-70 pointer-events-none">
          <div className="flex items-center space-x-2">
            <h2 className="font-medium text-sm">Add web page</h2>
            <Badge variant="secondary" className="text-[0.65rem]">Coming soon</Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">
            Capture the content of an article or documentation page from the
            web.
          </p>

          <div className="mt-4 space-y-2">
            <Label htmlFor="webpage-url" className="text-xs font-medium">
              Web page URL
            </Label>
            <div className="space-y-2">
              <Input
                id="webpage-url"
                type="url"
                placeholder="https://example.com/article"
                className="flex-1"
                disabled
              />
              <Button type="button" className="sm:w-auto" size="sm" disabled>
                Add page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
