'use client';
import { useRouter } from "next/navigation";


import React from 'react';
import { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Activity, 
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
  FolderOpen, 
  ChevronRight,
  ChevronDown,
  X,
  Menu
} from 'lucide-react';


const Sidebar = ({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean; setIsCollapsed: (collapsed: boolean) => void }) => {
  const [activemenu, setactivemenu] = useState<string>('Dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>(['Dashboard']);

  const router = useRouter();


  type SubMenuItem = {
    label: string;
    icon?: React.ComponentType<any>;
  };
  type MenuItem = {
    icon?: React.ComponentType<any>;
    label: string;
    badge?: string;
    active?: boolean;
    hasSubmenu?: boolean;
    submenu?: SubMenuItem[];
    isHeader?: boolean;
    href?: string;
  };

  const menuItems: MenuItem[] = [
    { 
      icon: LayoutDashboard, 
      label: 'Dashboard', 
      badge: '3', 
      active: activemenu === 'Dashboard',
      hasSubmenu: true,
      submenu: [
        { label: 'CRM', icon: ShoppingCart },
        { label: 'eCommerce', icon: Package },
        { label: 'Layouts', icon: FileText }
      ]
    },
    { 
      label: 'APPS & PAGES',
      isHeader: true 
    },
    { icon: Activity, label: 'Nepse Trading', href: '/nepse-trading' },
    { icon: MessageSquare, label: 'Chat', badge: '3', active: activemenu === 'Chat' },
    { icon: Users, label: 'Users' },
    { 
      icon: Shield, 
      label: 'Roles & Permissions', 
      hasSubmenu: true,
      submenu: [
        { label: 'Roles' },
        { label: 'Permissions' },
        { label: 'Assign Roles' },
        { label: 'Permission Settings' }
      ]
    },
    { 
      icon: FileText, 
      label: 'Pages', 
      hasSubmenu: true,
      submenu: [
        { label: 'User Profile' },
        { label: 'Account Settings' },
        { label: 'FAQ' },
        { label: 'Help Center' }
      ]
    },
    { 
      icon: Lock, 
      label: 'Authentication', 
      hasSubmenu: true,
      submenu: [
        { label: 'Login' },
        { label: 'Register' },
        { label: 'Forgot Password' },
        { label: 'Reset Password' }
      ]
    },
    { 
      icon: AlertCircle, 
      label: 'Wizard Examples', 
      hasSubmenu: true,
      submenu: [
        { label: 'Checkout' },
        { label: 'Property Listing' },
        { label: 'Create Deal' },
        { label: 'Two Step' }
      ]
    },
    { icon: Settings, label: 'Modal Examples' },
    {
      label: 'USER INTERFACE',
      isHeader: true
    },
    { 
      icon: Settings, 
      label: 'User Interface', 
      badge: '4', 
      active: activemenu === 'user Interface', 
      hasSubmenu: true,
      submenu: [
        { label: 'Typography' },
        { label: 'Colors' },
        { label: 'Cards' },
        { label: 'Buttons' }
      ]
    },
    { 
      icon: Database, 
      label: 'Extended UI', 
      hasSubmenu: true,
      submenu: [
        { label: 'Avatar' },
        { label: 'Chips' },
        { label: 'Divider' },
        { label: 'Progress' }
      ]
    },
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

  const toggleDropdown = (label: string) => {
    setOpenDropdowns(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

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
            className={`hidden lg:block shrink-0 rounded p-1 transition-colors ${
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
            const isOpen = openDropdowns.includes(item.label);
            
            return (
              <div key={index}>
                <button
  onClick={() => {
    if (item.href) {
      router.push(item.href);  // ✅ navigate to new page
      setactivemenu(item.label);
      setIsMobileOpen(false);
      return;
    }

    if (item.hasSubmenu) {
      toggleDropdown(item.label);
    } else {
      setactivemenu(item.label);
      setIsMobileOpen(false);
    }
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
                      {item.hasSubmenu && (
                        isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />
                      )}
                    </div>
                  )}
                </button>

                {/* Submenu */}
                {item.hasSubmenu && item.submenu && !isCollapsed && isOpen && (
                  <div className="ml-4 mt-1 mb-2 space-y-1">
                    {item.submenu.map((subItem, subIndex) => {
                      const SubIcon = subItem.icon;
                      return (
                        <button
                          key={subIndex}
                          onClick={() => {
                            setactivemenu(subItem.label);
                            setIsMobileOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-sm transition-colors ${
                            activemenu === subItem.label
                              ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                        >
                          {SubIcon && <SubIcon size={18} className="shrink-0" />}
                          <span>{subItem.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;