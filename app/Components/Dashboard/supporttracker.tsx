"use client";

import React from "react";
import { Inbox, CheckCircle, Clock } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

const SupportTracker = ({ isCollapsed }: { isCollapsed?: boolean }) => {
  const [localCollapsed, setLocalCollapsed] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const totalTickets = 164;
  const completedTickets = 142;
  const openTickets = 28;
  const completionPercentage = 85;

  const segments = 24;
  const filledSegments = Math.round((segments * completionPercentage) / 100);

  const chartData = Array.from({ length: segments }, (_, i) => {
    const isFilled = i < filledSegments;
    const hue = 260;
    const saturation = 70 + (i / segments) * 20;
    const lightness = isFilled ? 75 - (i / segments) * 25 : 90;

    return {
      name: `segment-${i}`,
      value: 1,
      fill: isFilled ? `hsl(${hue}, ${saturation}%, ${lightness}%)` : "#e5e7eb",
    };
  });

  return (
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 overflow-hidden ml-auto
        ${isCollapsed ? "w-[107%]" : "max-h-[600px] w-full"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Support Tracker
          </h3>
          <p className="text-xs text-gray-400 dark:text-gray-300">Last 7 Days</p>
        </div>
      </div>

      {!localCollapsed && (
        <>
          {/* Chart Row */}
          <div className="flex items-center justify-between mb-6 mt-6 gap-6 lg:-mt-20">
            {/* Left Numbers */}
            <div className="shrink-0">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                {totalTickets}
              </h2>
              <p className="text-sm text-gray-500 mt-1 dark:text-gray-300">
                Total Tickets
              </p>
            </div>

            {/* Chart */}
            <div
              className="relative lg:mt-10 md:mx-auto"
              style={{ width: "300px", height: "300px" }}
            >
              {mounted ? (
                <PieChart
                  className="lg:mt-10 lg:ml-10 md:-mx-10 md:-mt-10"
                  width={250}
                  height={250}
                >
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={85}
                    startAngle={135}
                    endAngle={-135}
                    paddingAngle={2}
                    strokeWidth={0}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              {/* Completed Task */}
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) - 10}
                                className="text-gray-400 dark:fill-white"
                                fontSize="11"
                              >
                                Completed Task
                              </tspan>

                              {/* Percentage */}
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 15}
                                className="text-gray-900 dark:fill-white"
                                fontSize="36"
                                fontWeight="bold"
                              >
                                {completionPercentage}%
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="text-gray-400 dark:text-gray-300">
                    Loading chart...
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom List */}
          <div className="space-y-4 -mt-28">
            {/* New Tickets */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Inbox size={18} className="text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-white">
                  New Tickets
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-300">
                  {completedTickets}
                </p>
              </div>
            </div>

            {/* Open Tickets */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center">
                <CheckCircle size={18} className="text-cyan-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-white">
                  Open Tickets
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-300">
                  {openTickets}
                </p>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <Clock size={18} className="text-orange-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-white">
                  Response Time
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-300">
                  1 Day
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SupportTracker;
