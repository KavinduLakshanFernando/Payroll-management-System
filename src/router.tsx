import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import EmployeeForm from './Components/EmpForm';
import Sidebar from './Components/Sidebar';

// Layout component with Sidebar
const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 bg-gray-50 overflow-y-auto" style={{ maxHeight: '100vh' }}>
        <Outlet />
      </main>
    </div>
  );
};
const router = createBrowserRouter([
  {
    element: <MainLayout />, // Layout with Sidebar
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/empform", element: <EmployeeForm /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);

export default router;
