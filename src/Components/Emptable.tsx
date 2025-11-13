import React, { useState } from 'react';
import { Users, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmployeeTable = () => {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Display Name');
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const employees = [
    { id: 2, empNo: '010871', epfNo: '010871', displayName: '', firstName: '', middleName: '', lastName: '', nic: '', mobile: '', mobile2: '', address: '', designation: '', basicSalary: '', dailySalary: '', budgetAllowance: '', incentive: '', specialIncentive: '' },
    { id: 4, empNo: '010873', epfNo: '010873', displayName: '', firstName: '', middleName: '', lastName: '', nic: '', mobile: '', mobile2: '', address: '', designation: '', basicSalary: '', dailySalary: '', budgetAllowance: '', incentive: '', specialIncentive: '' },
    { id: 3, empNo: '010872', epfNo: '010872', displayName: '', firstName: '', middleName: '', lastName: '', nic: '', mobile: '', mobile2: '', address: '', designation: '', basicSalary: '', dailySalary: '', budgetAllowance: '', incentive: '', specialIncentive: '' },
  ];

  // safe lowercase checks so empty strings / null won't crash
  const filtered = employees.filter(e =>
    (e.displayName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (e.empNo || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (e.firstName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (e.lastName || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4 lg:p-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Users className="text-blue-600" size={24} />
            <h1 className="text-2xl font-bold text-gray-800">EMPLOYEES</h1>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md" onClick={() => navigate('/empform')}>
            Add Employees
          </button>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Search className="text-gray-400" size={20} />
            <h2 className="text-lg font-semibold text-gray-700">SEARCH :--</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Display Name</option>
              <option>Employee No</option>
              <option>First Name</option>
              <option>Last Name</option>
            </select>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-blue-600">EMP LIST</h2>
          </div>

          {/* Table Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-gray-200">
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors text-sm">
                Settings
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors text-sm">
                Refresh
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors text-sm">
                Reset
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors text-sm">
                Excel
              </button>
            </div>
            
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Employee No</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">EPF NO</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Display Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">First Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Middle Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Last Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">NIC</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Mobile</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Mobile 2</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Address</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Designation</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Basic Salary</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Daily Salary</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Budget Allowance</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Incentive</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Special Incentive</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employees.map((emp, index) => (
                  <tr key={emp.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.id}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.empNo}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.displayName}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.firstName}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.middleName}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.lastName}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.nic}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.mobile}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.mobile2}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.address}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.designation}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.basicSalary}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.dailySalary}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.budgetAllowance}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.incentive}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{emp.specialIncentive}</td>
                  </tr>
                ))}
                {/* Empty rows */}
                {[...Array(7)].map((_, i) => (
                  <tr key={`empty-${i}`} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-400">{employees.length + i + 1}</td>
                    {[...Array(15)].map((_, j) => (
                      <td key={j} className="px-4 py-3 text-sm text-gray-400"></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer headers (duplicate for scrolling) */}
          <div className="border-t border-gray-200 bg-gray-50 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Employee No</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">EPF NO</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Display Name</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">First Name</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Middle Name</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Last Name</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">NIC</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Mobile</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Mobile 2</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Address</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Designation</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Basic Salary</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Daily Salary</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Budget Allowance</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Incentive</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Special Incentive</th>
                </tr>
              </thead>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded transition-colors">2</button>
              <span className="px-2">...</span>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded transition-colors">2</button>
              <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
