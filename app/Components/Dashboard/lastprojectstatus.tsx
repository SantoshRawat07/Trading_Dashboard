"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", value: 2800 },
  { month: "Feb", value: 4900 },
  { month: "Mar", value: 3800 },
  { month: "Apr", value: 7200 },
  { month: "May", value: 4200 },
  { month: "Jun", value: 2600 },
  { month: "Jul", value: 7900 },
  { month: "Aug", value: 3400 },
];

const chartConfig = {
  value: {
    label: "Project Value",
    color: "#6366f1",
  },
};

const ProjectStatus = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-lg shadow p-6
        w-full 
        sm:p-6 
        md:w-full lg:h-114
        lg:w-100 lg:ml-2
        ${isCollapsed ? "lg:ml-18 lg:w-126 sm:ml-[-5vw]" : ""}
      `}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Project Status</h3>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">$4,374</span>
          <span className="text-green-500 text-sm flex items-center">
            <TrendingUp size={16} /> +10.2%
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-white">Your Project Status</p>
      </div>

      {/* Responsive Chart */}
      <div className="h-50 w-full mb-6 ">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartConfig.value.color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={chartConfig.value.color} stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={false}
              hide={true}
            />

            <Area
              type="stepAfter"
              dataKey="value"
              stroke={chartConfig.value.color}
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3 lg:mt-0">
        <div className="flex items-center justify-between">
          <span className="text-sm">Donates</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">$756.26</span>
            <span className="text-xs text-red-500">+38.6%</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">Podcasts</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">$2,207.03</span>
            <span className="text-xs text-green-500">+70.9%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;
