'use client';

import React, { useState, forwardRef, memo } from 'react';
import { Search, Menu, Bell, User, X } from 'lucide-react';

// MoonStar Component
type MoonStarProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
  title?: string;
};

const MoonStar = forwardRef<SVGSVGElement, MoonStarProps>(
  ({ size = 24, color = "currentColor", title = "Moon and star", className = "", ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        role="img"
        aria-label={title}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        {title ? <title>{title}</title> : null}

        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        <polygon points="16.5,6.2 17.2,7.9 19.0,8.1 17.6,9.4 17.9,11.2 16.2,10.2 14.4,11.2 14.7,9.4 13.3,8.1 15.1,7.9" />
      </svg>
    );
  }
);

MoonStar.displayName = "MoonStar";
const MemoizedMoonStar = memo(MoonStar);

// Navbar Component
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const newVal = !darkMode;
    setDarkMode(newVal);

    // Add/remove dark class from <html>
    if (newVal) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <header className="h-14 sm:h-16 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-3 sm:px-4 md:px-6 text-black dark:text-white">

        {/* Left space (Search on LG only) */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-1">
          <div className="relative hidden lg:block flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search (Ctrl+/)"
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full text-sm bg-white dark:bg-[#111] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">

          {/* Theme Toggle */}
          <MemoizedMoonStar
            className="md:block cursor-pointer hover:opacity-80 transition-opacity"
            size={24}
            onClick={toggleTheme}
          />

          {/* Notifications */}
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md relative transition-colors">
            <Bell size={18} className="sm:w-5 sm:h-5" />
            <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-[10px] sm:text-xs font-bold flex items-center justify-center rounded-full">
              4
            </span>
          </button>

          {/* User Avatar */}
          <button className="flex items-center gap-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
            <img
              src="/profilepic.jpg"
              alt="User"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover border border-gray-200 dark:border-gray-700"
            />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
