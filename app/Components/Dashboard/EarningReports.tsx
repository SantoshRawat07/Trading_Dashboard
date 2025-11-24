import React from "react";
import { TrendingUp } from "lucide-react";
import { DollarSignIcon } from "lucide-react";
import { ChartBarDefault } from "./bargraph";

const EarningReports = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6 ${isCollapsed ? 'ml-0 sm:ml-[-5vw]' : ''}`}>
      {/* Header */}
      <div>
        <h3 className="font-semibold text-base sm:text-lg text-gray-800 dark:text-white">Earning Reports</h3>
        <p className="text-gray-400 text-xs sm:text-sm -mt-1 dark:text-white">Weekly Earnings Overview</p>
      </div>

      {/* Main Row */}
      <div className="flex flex-col lg:flex-row items-start justify-between mt-4 sm:mt-6 gap-4">
        
        {/* LEFT SIDE */}
        <div className="w-full lg:w-auto">
          <div className="flex items-center gap-2 mt-4 sm:mt-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">$468</h2>

            <span className="text-green-500 text-xs sm:text-sm font-semibold bg-green-100 px-2 py-1 rounded-md flex items-center">
              <TrendingUp size={12} className="mr-1 sm:hidden" />
              <TrendingUp size={14} className="mr-1 hidden sm:block" />
              +4.2%
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 leading-tight dark:text-white">
            You informed of this week
          </p>
          <p className="text-xs sm:text-sm text-gray-500 leading-tight dark:text-white">
            compared to last week
          </p>
        </div>

        {/* RIGHT SIDE (GRAPH) */}
        <div className="w-full lg:w-auto lg:-mt-20 flex justify-center lg:justify-center item-center">
          <div className="scale-75 md:scale-120 lg:scale-100 origin-center lg:origin-top-right lg:-ml-1 text-gray-800 dark:text-white lg:w-100">
            <ChartBarDefault/>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 pt-4 sm:pt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-8">
        {/* Earnings */}
        <div> 
          <div className="flex items-center gap-2 mb-1">
            <div className="bg-[#EFEAFC] rounded p-1"> 
              <DollarSignIcon className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-xs sm:text-sm text-gray-500 font-bold dark:text-white">Earnings</span>
          </div> 
          <p className="text-base sm:text-lg font-semibold">$545.69</p> 
          <div className="bg-linear-to-r from-blue-500 to-blue-200 h-1 w-full max-w-[120px] mt-2 rounded-full shadow"></div> 
        </div>
        
        {/* Profit */}
        <div>
          <div className="flex items-center gap-2 mb-1"> 
            <div className="bg-[#EFEAFC] rounded p-1"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0eb7e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                <path d="M12 16v5"/>
                <path d="M16 14v7"/>
                <path d="M20 10v11"/>
                <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/>
                <path d="M4 18v3"/>
                <path d="M8 14v7"/>
              </svg>
            </div> 
            <span className="text-xs sm:text-sm text-gray-500 font-bold dark:text-white">Profit</span>
          </div>
          <p className="text-base sm:text-lg font-semibold">$256.34</p>
          <div className="bg-linear-to-r from-cyan-400 to-cyan-200 h-1 w-full max-w-[120px] mt-2 rounded-full shadow"></div>
        </div>
        
        {/* Expense */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-1"> 
            <div className="bg-[#EFEAFC] rounded p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#df3434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/>
                <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/>
                <path d="m2 16 6 6"/>
                <circle cx="16" cy="9" r="2.9"/>
                <circle cx="6" cy="5" r="3"/>
              </svg>
            </div> 
            <span className="text-xs sm:text-sm text-gray-500 font-bold dark:text-white">Expense</span>
          </div>
          <p className="text-base sm:text-lg font-semibold mt-2">$74.19</p> 
          <div className="bg-linear-to-r from-red-500 to-red-200 h-1 w-full max-w-[120px] mt-2 rounded-full shadow"></div> 
        </div>
      </div>
    </div> 
  );
}

export default EarningReports;