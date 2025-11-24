"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 349 },
  { month: "June", desktop: 214 },
  { month: "June", desktop: 134 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartBarDefault() {
  return (
    <Card className="border-none shadow-none w-80 sm:40 md:w-full h-40 py-1 dark:bg-gray-800 ">
      <CardContent className="px-1 lg:px-6">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <defs>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A855F7" stopOpacity={1} />
                <stop offset="50%" stopColor="#9333EA" stopOpacity={1} />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="url(#purpleGradient)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
  </Card>
);
}