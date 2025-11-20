import React from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

const SalesRadarChart = ({ isCollapsed }: { isCollapsed: boolean }) =>  {
  const chartData = [
    { month: "Jan", sales: 239, visits: 290 },
    { month: "Feb", sales: 385, visits: 320 },
    { month: "Mar", sales: 237, visits: 290 },
    { month: "Apr", sales: 253, visits: 290 },
    { month: "May", sales: 209, visits: 270 },
    { month: "Jun", sales: 214, visits: 260 },
  ];

  return (
    <div className={`lg:w-100 md:w-full dark:bg-gray-800 dark:text-white
    bg-white rounded-lg shadow p-6 sm:p-6 ${isCollapsed ? 'ml-0 sm:ml-[-5vw]' : ''}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Sales</h3>
          <p className="text-xs text-gray-400 dark:text-white">Last 6 Months</p>
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-center justify-center my-6">
        <RadarChart width={300} height={300} data={chartData}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis 
            dataKey="month" 
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            tickLine={false}
          />
           <Radar
            dataKey="visits"
            stroke="#9929EA"
            fill="#9929EA"
            fillOpacity={0.7}
            strokeWidth={2}
          />
          <Radar
            dataKey="sales"
            stroke="#6FE6FC"
            fill="#6FE6FC"
            fillOpacity={0.6}
            strokeWidth={2}
          />
         
        </RadarChart>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
          <span className="text-sm text-gray-600 dark:text-white">Sales</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
          <span className="text-sm text-gray-600 dark:text-white">Visits</span>
        </div>
      </div>
    </div>
  );
};

export default SalesRadarChart;