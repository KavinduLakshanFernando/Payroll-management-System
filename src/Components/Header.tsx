import React from 'react';
import { Bell, Mail, Grid3x3, Menu } from 'lucide-react';

// Header Component
const Header = ({ setIsMobileOpen }: any) => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white px-6 py-3 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Left Section - Logo and Date */}
        <div className="flex items-center gap-6">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-wide">DART-PAYROLL</h1>
            <span className="text-xs bg-white/20 px-2 py-1 rounded font-semibold">IS</span>
          </div>
          
          {/* Date - Hidden on mobile */}
          <span className="hidden md:block text-sm font-medium bg-white/10 px-4 py-1.5 rounded-lg">
            FRIDAY 7 NOVEMBER 2025
          </span>
        </div>

        {/* Right Section - Icons and User Profile */}
        <div className="flex items-center gap-3">
          {/* Grid Icon */}
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Grid3x3 size={20} />
          </button>

          {/* Notification Bell with Badge */}
          <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-blue-900"></span>
          </button>

          {/* Messages with Badge */}
          <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Mail size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-blue-900"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 ml-3 pl-3 border-l border-white/30">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
              SA
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-xs font-semibold">0771154849</span>
              <span className="text-xs text-blue-200">SUPER_ADMIN</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;