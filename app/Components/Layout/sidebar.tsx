'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Calendar, 
  MessageSquare, 
  Users, 
  Shield, 
  FileText, 
  Lock, 
  AlertCircle, 
  Settings, 
  HelpCircle, 
  UserCircle, 
  Database, 
  PieChart, 
  FileSpreadsheet, 
  Wand2, 
  Mail, 
  Activity, 
  FolderOpen, 
  ChevronRight,
  X,
  Menu
} from 'lucide-react';

const Sidebar = ({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean; setIsCollapsed: (collapsed: boolean) => void }) => {
  const [activemenu, setactivemenu] = useState<string>('Dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', badge: '3', active: activemenu === 'Dashboard' },
    { icon: ShoppingCart, label: 'CRM' },
    { icon: Package, label: 'eCommerce' },
    { icon: FileText, label: 'Layouts' },
    { 
      label: 'APPS & PAGES',
      isHeader: true 
    },
    { icon: Calendar, label: 'Calendar' },
    { icon: MessageSquare, label: 'Chat', badge: '3', active: activemenu === 'Chat' },
    { icon: Users, label: 'Users' },
    { icon: Shield, label: 'Roles & Permissions', hasSubmenu: true },
    { icon: FileText, label: 'Pages', hasSubmenu: true },
    { icon: Lock, label: 'Authentication', hasSubmenu: true },
    { icon: AlertCircle, label: 'Wizard Examples', hasSubmenu: true },
    { icon: Settings, label: 'Modal Examples' },
    {
      label: 'USER INTERFACE',
      isHeader: true
    },
    { icon: Settings, label: 'User Interface', badge: '4', active: activemenu === 'user Interface', hasSubmenu: true },
    { icon: Database, label: 'Extended UI', hasSubmenu: true },
    { icon: PieChart, label: 'Icons' },
    {
      label: 'FORMS & TABLES',
      isHeader: true
    },
    { icon: FileSpreadsheet, label: 'Form Elements' },
    { icon: FileText, label: 'Form Layouts' },
    { icon: Wand2, label: 'Form Wizard' },
    { icon: Activity, label: 'Form Validation' },
    { icon: Database, label: 'Tables' },
    { icon: FolderOpen, label: 'Data Tables' },
    {
      label: 'CHARTS',
      isHeader: true
    },
    { icon: PieChart, label: 'Charts' },
    { icon: HelpCircle, label: 'Access Control' },
    {
      label: 'OTHERS',
      isHeader: true
    },
    { icon: HelpCircle, label: 'Support' },
    { icon: FileText, label: 'Documentation' },
  ];

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-3 left-4 z-50 p-1 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black"
      >
        {isMobileOpen ? <X size={24} className='absolute left-50 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 mt-1' /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        bg-white dark:bg-black dark:text-white border-r border-gray-200 dark:border-gray-700 h-screen overflow-y-auto


        fixed lg:relative z-40 lg:z-auto
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}


        ${isCollapsed ? 'w-20' : 'w-64'}
      `}>
        {/* Logo */}
        <div className={`p-4 flex items-center gap-2 ${isCollapsed ? 'flex-col' : ''}`}>
          <div className="">
            {/* <span className="text-white font-bold">V</span> */}
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <path d="M6 18L16 28L22 22L12 12L6 18Z" fill="url(#gradient1)" />
              <path
                d="M16 28L34 10L40 16L22 34L16 28Z"
                fill="url(#gradient2)"
              />
              <defs>
                <linearGradient id="gradient1" x1="6" y1="12" x2="22" y2="28">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#A78BFA" />
                </linearGradient>
                <linearGradient id="gradient2" x1="16" y1="10" x2="40" y2="34">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#818CF8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {!isCollapsed && (
            <span className="font-bold text-lg">Vuexy</span>
          )}
          {/* Desktop toggle button */}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`hidden lg:block shrink-0  rounded p-1 transition-colors ${
              isCollapsed ? '' : 'ml-auto'
            }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <path d="M12 3v18"/>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="px-2 pb-20 lg:pb-4">
          {menuItems.map((item, index) => {
            if (item.isHeader) {
              if (isCollapsed) {
                return (
                  <div key={index} className="border-t border-gray-200 dark:border-gray-700 my-2" />
                );
              }
              return (
                <div key={index} className="px-4 py-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase">
                  {item.label}
                </div>
              );
            }

            const Icon = item.icon;
            const isActive = activemenu === item.label;
            
            return (
              <button
                key={index}
                onClick={() => {
                  setactivemenu(item.label);
                  // Close mobile menu when item is clicked
                  setIsMobileOpen(false);
                }}
                className={`w-full flex items-center ${
                  isCollapsed ? 'justify-center px-2' : 'justify-between px-4'
                } py-2.5 rounded-md mb-1 transition-colors ${
                  isActive
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <div className={`flex items-center ${isCollapsed ? '' : 'gap-3'}`}>
                  {Icon && <Icon size={20} className="shrink-0" />}
                  {!isCollapsed && <span className="text-sm">{item.label}</span>}
                </div>
                {!isCollapsed && (
                  <div className="flex items-center gap-2 shrink-0">
                    {item.badge && (
                      <span className={`px-2 py-0.5 text-xs rounded-full ${
                        item.active ? 'bg-white text-purple-600' : 'bg-red-500 text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    {item.hasSubmenu && <ChevronRight size={16} />}
                  </div>
                )}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;