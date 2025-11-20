import React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { TrendingUp, DollarSign, ShoppingCart, MoreVertical } from 'lucide-react';
import Saleschart from './sales';

const RevenueReport =  ({ isCollapsed }: { isCollapsed: boolean }) => {
  const chartData = [
    { month: "Jan", earning: 180, gap: 15, expense: 120 },
    { month: "Feb", earning: 150, gap: 15, expense: 100 },
    { month: "Mar", earning: 220, gap: 15, expense: 130 },
    { month: "Apr", earning: 140, gap: 15, expense: 95 },
    { month: "May", earning: 190, gap: 15, expense: 110 },
    { month: "Jun", earning: 210, gap: 15, expense: 125 },
    { month: "Jul", earning: 170, gap: 15, expense: 105 },
    { month: "Aug", earning: 160, gap: 15, expense: 90 },
  ];

  return (
    
      <div
      className={`bg-white dark:bg-gray-800
         rounded-lg shadow p-6
        w-full 
        sm:p-6 -mt-4
        md:w-full
        lg:w-100
        ${isCollapsed ? "lg:-ml-5 sm:ml-[-5vw]" : "lg:ml-0"}
      `}
    >  
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-sm text-gray-500 dark:text-white font-medium mb-1">Total Earning</h3>
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">87%</span>
            <span className="flex items-center text-green-500 text-sm font-semibold">
              <TrendingUp className="w-4 h-4 mr-1" />
              25.8%
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="flex justify-center mb-6">
        <BarChart
          width={280}
          height={200}
          data={chartData}
          margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
        >
          <Bar dataKey="expense" stackId="a" fill="#6366f1" radius={[4, 4, 4, 4]} barSize={12} />
          <Bar dataKey="gap" stackId="a" fill="transparent" barSize={16} />
          <Bar dataKey="earning" stackId="a" fill="#ef4444" radius={[4, 4, 4, 4]} barSize={12} />
        </BarChart>
      </div>

      {/* Stats */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Total Revenue</p>
              <p className="text-xs text-gray-400 dark:text-white">Client Payment</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-green-500">+$126</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-indigo-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Total Sales</p>
              <p className="text-xs text-gray-400 dark:text-white">Refund</p>
            </div>
          </div>
          <span className="text-sm font-semibold text-green-500">+$98</span>
        </div>
      </div>
    </div>
  
   
   
  );
};

export default RevenueReport;