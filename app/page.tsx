'use client';

import dynamic from 'next/dynamic';
import Sidebar from './Components/Layout/sidebar';
import Navbar from './Components/Layout/navbar';
import { useState } from 'react';
import React from 'react';

// ⬇️ Dynamic Imports (no layout change)
const EarningReports = dynamic(() => import('./Components/Dashboard/EarningReports'), { ssr: false });
const SupportTracker = dynamic(() => import('./Components/Dashboard/supporttracker'), { ssr: false });
const Sales = dynamic(() => import('./Components/Dashboard/sales'), { ssr: false });
const RevenueReport = dynamic(() => import('./Components/Dashboard/Revenuereport.client'), { ssr: false });
const ProjectStatus = dynamic(() => import('./Components/Dashboard/projectstatus'), { ssr: false });
const EarningReportsGrid = dynamic(() => import('./Components/Dashboard/earningreportlayout'), { ssr: false });
const Totalearning = dynamic(() => import('./Components/Dashboard/totalearning'), { ssr: false });
const Lastsales = dynamic(() => import('./Components/Dashboard/lastsales'), { ssr: false });
const Lastprojectstatus = dynamic(() => import('./Components/Dashboard/lastprojectstatus'), { ssr: false });

function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-black">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">

            {/* Top Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <EarningReports isCollapsed={isCollapsed} />
              <SupportTracker isCollapsed={isCollapsed} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Sales isCollapsed={isCollapsed} />
              <RevenueReport isCollapsed={isCollapsed} />
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ProjectStatus isCollapsed={isCollapsed} />

              <EarningReportsGrid isCollapsed={isCollapsed} /> </div>

              {/* <div className="lg:mt-10 sm:mt-10 md:mt-10"> */}

                

                
            </div>
            <div className='grid mt-8 gap-4 lg:gap-4'>
              <div>
                <Totalearning isCollapsed={isCollapsed} />
              </div>
              <div className="lg:ml-105 lg:-mt-118">
                  <Lastsales isCollapsed={isCollapsed} />
                </div>
                <div className="lg:ml-205 lg:-mt-122">
                  <Lastprojectstatus isCollapsed={isCollapsed} />
                
              </div>

            </div>

          {/* </div> */}
        </main>
      </div>
    </div>
  );
}

export default Home;
