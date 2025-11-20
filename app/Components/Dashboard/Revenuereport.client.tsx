'use client';

import React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const RevenueReport = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const [selectedYear, setSelectedYear] = React.useState('2022');

  // Responsive width (client-only)
  const [chartWidth, setChartWidth] = React.useState(500);

  React.useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setChartWidth(320);
      else if (w < 1024) setChartWidth(450);
      else setChartWidth(500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartData = [
    { month: "Jan", earning: 280, gap: 20, expense: 150 },
    { month: "Feb", earning: 230, gap: 20, expense: 180 },
    { month: "Mar", earning: 180, gap: 20, expense: 220 },
    { month: "Apr", earning: 190, gap: 20, expense: 160 },
    { month: "May", earning: 270, gap: 20, expense: 140 },
    { month: "Jun", earning: 320, gap: 20, expense: 210 },
    { month: "Jul", earning: 280, gap: 20, expense: 140 },
    { month: "Aug", earning: 290, gap: 20, expense: 180 },
    { month: "Sep", earning: 130, gap: 20, expense: 200 },
  ];

  const totalRevenue = 25825;
  const budget = 56800;

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 ${
        isCollapsed ? 'lg:-ml-80 lg:w-[1000px]' : 'lg:-ml-50 lg:w-200'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 lg:w-full">

        {/* Left Section */}
        <div className="lg:pr-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Revenue Report</h3>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-white">Earning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-white">Expense</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="w-full overflow-x-auto lg:overflow-x-visible lg:-ml-4">
            <div className="min-w-[320px]">
              <BarChart
                width={chartWidth}
                height={300}
                data={chartData}
                margin={{ top: 20, right: 10, bottom: 0, left: -10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} horizontal={false}/>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 11 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 11 }}
                  domain={[-200, 300]}
                  ticks={[-200, -10, 100, 200, 300]}
                />
                <Bar dataKey="expense" stackId="a" fill="#fb923c" radius={[4, 4, 4, 4]} barSize={12} />
                <Bar dataKey="gap" stackId="a" fill="transparent" barSize={20} />
                <Bar dataKey="earning" stackId="a" fill="#6366f1" radius={[4, 4, 4, 4]} barSize={12} />
              </BarChart>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between lg:pl-8 relative">
          <div className="hidden lg:block absolute left-0 top-4 bottom-4 w-px bg-gray-600/40 rounded-full lg:ml-20"></div>
          <div className="block lg:hidden w-full h-px bg-gray-600/40 rounded-full mb-6"></div>

          <div>
            <div className="flex justify-center sm:justify-start lg:justify-center mb-6 lg:ml-6 lg:mt-8">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-indigo-300 rounded-lg text-indigo-600 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer text-sm"
              >
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>

            <div className="mb-6 text-center sm:text-left lg:ml-30 lg:mt-4">
              <div className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-1">
                ${totalRevenue.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 dark:text-white">
                Budget: {budget.toLocaleString()}
              </div>
            </div>

            <div className="mb-6 sm:mb-8 lg:ml-14">
              <svg width="100%" height="80" viewBox="0 0 400 80" className="max-w-full">
                <path
                  d="M 0 40 Q 50 20, 100 35 T 200 45 T 300 25 T 400 40"
                  stroke="#6366f1"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 0 50 Q 50 65, 100 55 T 200 48 T 300 60 T 400 50"
                  stroke="#e0e0e0"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>

          <button className="w-full sm:w-auto lg:w-50 lg:ml-24 lg:mb-10 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
            Increase Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevenueReport;
