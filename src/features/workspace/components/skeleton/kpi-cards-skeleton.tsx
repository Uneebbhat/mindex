import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function KPICardsSkeleton() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} className="gap-2 shadow-none">
          <CardHeader>
            <Skeleton className="h-5 w-32" />
          </CardHeader>

          <CardContent className="flex items-baseline justify-between">
            <Skeleton className="h-8 w-20 mt-2" />
            <Skeleton className="h-4 w-16" />
          </CardContent>

          <CardFooter>
            <Skeleton className="h-2 w-full mt-2 rounded-full" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
