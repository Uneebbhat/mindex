import KPICards from "@/features/workspace/components/kpi-cards";
import RecentUploadCards from "@/features/workspace/components/recent-upload-cards";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { LinkIcon, UploadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import KPICardsSkeleton from "@/features/workspace/components/skeleton/kpi-cards-skeleton";
import recentData from "@/features/workspace/data/recent-data.json";
import { RecentUpload } from "@/features/workspace/types/workspace.type";
import { Metadata } from "next";
import RecentUploadCardSkeleton from "@/features/workspace/components/skeleton/recent-upload-cards-skeleton";

export const metadata: Metadata = {
  title: "Workspace - Mindex | Your AI Knowledge Hub",
  description:
    "Manage all your uploaded videos, PDFs, and connected content in Mindex. Track your AI usage, recent uploads, and ask questions to your AI-powered knowledge assistant effortlessly.",
  keywords: [
    "Mindex",
    "AI knowledge hub",
    "workspace",
    "video transcripts",
    "PDF uploads",
    "AI questions",
    "AI learning platform",
    "knowledge management",
    "RAG AI",
    "AI productivity",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Workspace - Mindex | AI Knowledge Hub",
    description:
      "Track your AI usage, manage uploaded videos and PDFs, and ask questions to your AI-powered knowledge assistant.",
    // url: "https://yourdomain.com/workspace",
    siteName: "Mindex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workspace - Mindex | AI Knowledge Hub",
    description:
      "Manage uploads, track AI usage, and interact with your AI-powered knowledge assistant in Mindex.",
  },
};

export default function WorkspacePage() {
  return (
    <>
      {/* KPI Cards */}
      <section className="px-4 md:px-6 space-y-6">
        <h2 className="text-2xl font-medium">Workspace</h2>

        <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
          <Suspense fallback={<KPICardsSkeleton />}>
            <KPICards />
          </Suspense>
        </div>
      </section>

      {/* Recently Added Media */}
      <section className="px-4 md:px-6 space-y-6">
        <h2 className="text-2xl font-medium">Recent Uploads</h2>

        {recentData.length === 0 ? (
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <UploadIcon />
              </EmptyMedia>
              <EmptyTitle>No connections found</EmptyTitle>
              <EmptyDescription>
                Your uploaded videos, PDFs, and links will appear here once
                added.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button asChild>
                <Link href={"/connection"}>
                  <LinkIcon />
                  Add connection
                </Link>
              </Button>
            </EmptyContent>
          </Empty>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
              {recentData.map((item) => (
                <>
                  <Suspense
                    fallback={<RecentUploadCardSkeleton key={item.id} />}
                  >
                    <RecentUploadCards
                      key={item.id}
                      type={item.type as RecentUpload["type"]}
                      url={item.url}
                      title={item.title}
                      time={item.time}
                    />
                  </Suspense>
                </>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant={"secondary"} asChild>
                <Link href={"/library"}>View All</Link>
              </Button>
            </div>
          </>
        )}
      </section>
    </>
  );
}
