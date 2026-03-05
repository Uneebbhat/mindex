import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Globe } from "lucide-react";
import Image from "next/image";
import { UploadCardProps } from "../types/workspace.type";

export default function RecentUploadCards({
  type,
  url,
  title,
  time,
}: UploadCardProps) {
  const getVideoThumbnail = (videoUrl: string) => {
    const videoId = videoUrl.split("v=")[1];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <>
      <Card className="p-1 gap-0">
        <CardHeader className="p-1">
          {/* VIDEO */}
          {type === "video" && (
            <div className="relative w-full h-40">
              <Image
                src={getVideoThumbnail(url)}
                alt={title}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 300px"
                priority={false}
                loading="lazy"
              />
            </div>
          )}

          {/* PDF */}
          {type === "pdf" && (
            <iframe
              src={url}
              className="w-full h-40 rounded-md"
              loading="lazy"
            />
          )}

          {/* WEBSITE */}
          {type === "website" && (
            <div className="w-full h-40 flex items-center justify-center bg-muted rounded-md">
              <Globe size={40} />
            </div>
          )}
        </CardHeader>

        <CardContent className="p-2 space-y-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{time}</CardDescription>
        </CardContent>
      </Card>
    </>
  );
}
