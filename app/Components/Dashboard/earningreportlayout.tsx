"use client";

import React, { useState } from "react";
import Sales from './sales';
import {
  ShoppingCart,
  TrendingUp,
  DollarSign,
  PieChart,
  Plus,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  LabelList,
  Cell,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", orders: 28000, sales: 28870, profit: 3460, income: 2340 },
  { month: "Feb", orders: 10000, sales: 2320, profit: 29380, income: 23940 },
  { month: "Mar", orders: 45000, sales: 3290, profit: 23790, income: 78349 },
  { month: "Apr", orders: 38000, sales: 2330, profit: 67220, income: 39440 },
  { month: "May", orders: 15000, sales: 38200, profit: 9780, income: 2480 },
  { month: "Jun", orders: 30000, sales: 72830, profit: 4550, income: 8890 },
  { month: "Jul", orders: 35000, sales: 2340, profit: 9480, income: 98740 },
  { month: "Aug", orders: 28000, sales: 1900, profit: 2420, income: 34980 },
  { month: "Sep", orders: 8000, sales: 23920, profit: 28480, income: 6730 },
];

type CategoryKey = "orders" | "sales" | "profit" | "income";

const categories = [
  { id: "orders" as CategoryKey, label: "Orders", icon: ShoppingCart, color: "#6366f1" },
  { id: "sales" as CategoryKey, label: "Sales", icon: TrendingUp, color: "#8b5cf6" },
  { id: "profit" as CategoryKey, label: "Profit", icon: DollarSign, color: "#ec4899" },
  { id: "income" as CategoryKey, label: "Income", icon: PieChart, color: "#10b981" },
];

const EarningReports = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("orders");

  const maxValue = Math.max(...chartData.map((d) => d[activeCategory]));

  return (
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6
        w-full
        ${
          isCollapsed
            ? "lg:-ml-25 lg:w-[1000px]"
            : "lg:ml-2 lg:w-[800px]"
        }
      `}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Earning Reports</h3>
      </div>

      <p className="text-sm text-gray-400 mb-6 dark:text-white">Yearly Earnings Overview</p>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg  border-2 transition-all
                ${
                  isActive
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }
              `}
              style={{ minWidth: "90px" }}
            >
              <Icon
                size={24}
                className={`mb-2 ${isActive ? "text-indigo-600" : "text-gray-400"}`}
              />
              <span
                className={`text-sm font-medium ${
                  isActive ? "text-gray-800" : "text-gray-600"
                }`}
              >
                {category.label}
              </span>
            </button>
          );
        })}

        <button
          className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-gray-300 transition-all"
          style={{ minWidth: "90px" }}
        >
          <Plus size={24} className="text-gray-400" />
        </button>
      </div>

      {/* Responsive Bar Chart */}
      <div className="w-full h-72 sm:h-80 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 10, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} horizontal={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              tickMargin={10}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              tickFormatter={(value) => `${value / 1000}k`}
            />

            <Bar dataKey={activeCategory} radius={[8, 8, 0, 0]} maxBarSize={40}>
              {chartData.map((entry, idx) => (
                <Cell
                  key={idx}
                  fill={
                    entry[activeCategory] === maxValue
                      ? "#3b82f6"
                      : "#F3F4FE"
                  }
                />
              ))}

              <LabelList
                dataKey={activeCategory}
                position="top"
                style={{
                  fontSize: "11px",
                  fill: "#6b7280",
                  fontWeight: "500",
                }}
                formatter={(v: number) => `${(v / 1000).toFixed(0)}k`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningReports;
