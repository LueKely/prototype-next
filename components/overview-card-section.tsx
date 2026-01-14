"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export type Tstats = {
  totalCalls: number;
  totalCallDuration: number;
  totalCost: number;
};
const lookup = new Map([
  ["totalCalls", "Total Calls"],
  ["totalCallDuration", "Avg Call Duration"],
  ["totalCost", "Total Cost"],
]);

export default function OverviewCardSection({ stats }: { stats: Tstats }) {
  return (
    <section className="flex w-full  gap-5">
      {Object.entries(stats).map((entry) => {
        const key: string = entry[0];
        const value = entry[1];
        return (
          <Card className="w-full" key={key}>
            <CardHeader>
              <CardTitle>{lookup.get(key)}</CardTitle>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>{value}</p>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
