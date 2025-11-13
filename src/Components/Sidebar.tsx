// src/components/Sidebar.tsx
import React, {  useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  Users,
  CreditCard,
  Calendar,
  FileSpreadsheet,
  Settings,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
type MenuKey = 'employeeManagement' | 'attendanceManagement' | 'salaryManagement';

const initialOpenMenus: Record<MenuKey, boolean> = {
  employeeManagement: true,
  attendanceManagement: false,
  salaryManagement: false,
};

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [openMenus, setOpenMenus] = useState<Record<MenuKey, boolean>>(initialOpenMenus);

  const navigate = useNavigate();

  const toggleMenu = (menu: MenuKey) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !(prev[menu] ?? false),
    }));
  };

  return (
    <aside
className={`${
        isCollapsed ? 'w-16' : 'w-64'
      } bg-gradient-to-b from-blue-900 via-blue-800 to-purple-900 text-white flex flex-col transition-all duration-300`}    >
      {/* Logo Section */}
      <div className="p-4 flex items-center justify-between border-b border-white/10">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">DART-PAYROLL</h1>
            <span className="text-xs bg-white/20 px-2 py-1 rounded">IS</span>
          </div>
        )}
        <button
          type="button"
          onClick={() => setIsCollapsed((s) => !s)}
          className="p-1.5 hover:bg-white/10 rounded transition-colors"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <ChevronLeft size={20} className={`${isCollapsed ? 'rotate-180' : ''} transition-transform`} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {/* Dashboard */}
        <a  className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors" onClick={() => navigate('/dashboard')}>
          <LayoutDashboard size={20} />
          {!isCollapsed && <span className="text-sm font-medium">DASHBOARD</span>}
        </a>

        {/* Registrations */}
        <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors">
          <FileText size={20} />
          {!isCollapsed && <span className="text-sm font-medium">REGISTRATIONS</span>}
        </a>

        {/* Employee Management */}
        <div>
          <button
            type="button"
            onClick={() => toggleMenu('employeeManagement')}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/10 transition-colors"
            aria-expanded={openMenus.employeeManagement}
            aria-controls="employee-submenu"
          >
            <div className="flex items-center gap-3">
              <Users size={20} />
              {!isCollapsed && <span className="text-sm font-medium">EMPLOYEE MANAGEMENT</span>}
            </div>
            {!isCollapsed && (openMenus.employeeManagement ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
          </button>

          {!isCollapsed && openMenus.employeeManagement && (
            <div id="employee-submenu" className="bg-white/5">
              <a href="#" className="flex items-center gap-3 px-4 pl-12 py-2.5 hover:bg-white/10 transition-colors text-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                EMPLOYEE
              </a>
              <a href="#" className="flex items-center gap-3 px-4 pl-12 py-2.5 hover:bg-white/10 transition-colors text-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                SALARY MASTER
              </a>
              <a href="#" className="flex items-center gap-3 px-4 pl-12 py-2.5 hover:bg-white/10 transition-colors text-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                MANAGE TEAMS
              </a>
            </div>
          )}
        </div>

        {/* Attendance Management */}
        <div>
          <button
            type="button"
            onClick={() => toggleMenu('attendanceManagement')}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/10 transition-colors"
            aria-expanded={openMenus.attendanceManagement}
          >
            <div className="flex items-center gap-3">
              <Calendar size={20} />
              {!isCollapsed && <span className="text-sm font-medium">ATTENDANCE MANAGEMENT</span>}
            </div>
            {!isCollapsed && (openMenus.attendanceManagement ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
          </button>
          {/* You can add submenu items for attendance here */}
        </div>

        {/* Leave Management */}
        <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors">
          <FileSpreadsheet size={20} />
          {!isCollapsed && <span className="text-sm font-medium">LEAVE MANAGEMENT</span>}
        </a>

        {/* Salary Management */}
        <div>
          <button
            type="button"
            onClick={() => toggleMenu('salaryManagement')}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/10 transition-colors"
            aria-expanded={openMenus.salaryManagement}
          >
            <div className="flex items-center gap-3">
              <CreditCard size={20} />
              {!isCollapsed && <span className="text-sm font-medium">SALARY MANAGEMENT</span>}
            </div>
            {!isCollapsed && (openMenus.salaryManagement ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
          </button>
        </div>

        {/* System Settings */}
        <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors">
          <Settings size={20} />
          {!isCollapsed && <span className="text-sm font-medium">SYSTEM SETTINGS</span>}
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
