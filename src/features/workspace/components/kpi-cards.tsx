import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import kpis from "@/features/workspace/data/kpis.json";

export default function KPICards() {
  return (
    <>
      {kpis.map((kpi) => (
        <Card key={kpi.title} className="gap-2 shadow-none">
          <CardHeader>
            <CardTitle>{kpi.title}</CardTitle>
          </CardHeader>

          <CardContent className="flex items-baseline justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold mt-2">
              {kpi.value}
            </h2>
            {"progress" in kpi && <p>{kpi.footer}</p>}
          </CardContent>

          <CardFooter>
            {"progress" in kpi ? (
              <Progress value={kpi.progress} className="mt-2" />
            ) : (
              <p>{kpi.footer}</p>
            )}
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
