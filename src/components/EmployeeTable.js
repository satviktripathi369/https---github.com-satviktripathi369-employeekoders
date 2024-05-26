import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const employees = [
  { rank: 1, name: 'Rakesh Sharma', designation: 'UI/UX Designer', hoursWorked: '7(42)', change: '1.5 hrs', changeType: 'increase' },
  { rank: 2, name: 'Ankita Thakur', designation: 'HR Recruiter', hoursWorked: '7(41)', change: '1.5 hrs', changeType: 'decrease' },
  { rank: 3, name: 'Sarah Yadav', designation: 'Product Manager', hoursWorked: '7(40)', change: '1.5 hrs', changeType: 'increase' },
  { rank: 4, name: 'Harsha Shivhare', designation: 'Designer', hoursWorked: '7(37)', change: '1.5 hrs', changeType: 'increase' },
  { rank: 5, name: 'Vanhi Rai', designation: 'Video Editor', hoursWorked: '7(37)', change: '1.5 hrs', changeType: 'decrease' },
  { rank: 6, name: 'Bhanu Sharma', designation: 'Business Analyst', hoursWorked: '7(32)', change: '1.5 hrs', changeType: 'increase' },
  { rank: 7, name: 'Sunil Yadav', designation: 'Developer', hoursWorked: '7(24)', change: '1.5 hrs', changeType: 'increase' },
  { rank: 8, name: 'Akash Roy', designation: 'Business Analyst', hoursWorked: '7(21)', change: '1.5 hrs', changeType: 'increase' },
  { rank: 9, name: 'Rohit Soni', designation: 'Developer', hoursWorked: '7(20)', change: '1.5 hrs', changeType: 'increase' },
  { rank: 10, name: 'Suraj Chauhan', designation: 'Developer', hoursWorked: '7(18)', change: '1.5 hrs', changeType: 'decrease' },
];

const EmployeeTable = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left font-medium text-white-600">Rank</th>
            <th className="py-3 px-4 text-left font-medium text-white-600">Name</th>
            <th className="py-3 px-4 text-left font-medium text-white-600">Designation</th>
            <th className="py-3 px-4 text-left font-medium text-white-600">No. of hours worked</th>
            <th className="py-3 px-4 text-left font-medium text-white-600">Changes</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{employee.rank}</td>
              <td className="py-2 px-4 flex items-center">
                {employee.rank === 1 && <span className="text-yellow-500 mr-2">🏅</span>}
                {employee.rank === 2 && <span className="text-gray-500 mr-2">🥈</span>}
                {employee.rank === 3 && <span className="text-orange-500 mr-2">🥉</span>}
                {employee.rank > 3 && <span className="mr-2"></span>}
                {employee.name}
              </td>
              <td className="py-2 px-4">{employee.designation}</td>
              <td className="py-2 px-4">{employee.hoursWorked}</td>
              <td className="py-2 px-4">
                <span className={`flex items-center font-medium ${employee.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
                  {employee.changeType === 'increase' ? <FaArrowUp /> : <FaArrowDown />} {employee.change}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
