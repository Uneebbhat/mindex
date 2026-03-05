import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function RecentUploadCardSkeleton() {
  return (
    <Card className="p-1 gap-0">
      <CardHeader className="p-1">
        {/* Skeleton for media (video, PDF, website) */}
        <div className="relative w-full h-40">
          <Skeleton className="w-full h-40 rounded-md" />
        </div>
      </CardHeader>

      <CardContent className="p-2 space-y-2">
        {/* Skeleton for title */}
        <CardTitle>
          <Skeleton className="h-5 w-3/4 rounded-md" />
        </CardTitle>

        {/* Skeleton for description/time */}
        <CardDescription>
          <Skeleton className="h-4 w-1/2 rounded-md" />
        </CardDescription>
      </CardContent>
    </Card>
  );
}
