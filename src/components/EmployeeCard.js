import React from 'react';
import employeeImage from '../assets/employee.jpg';  // Assume you have this image in the assets folder

const EmployeeCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Employee of the Month</h2>
      <img src={employeeImage} alt="Employee of the Month" className="rounded-full w-32 h-32 mx-auto mb-4"/>
      <h3 className="text-center text-lg font-semibold">Rakesh Sharma</h3>
      <p className="text-center text-gray-600">UI/UX Designer</p>
    </div>
  );
}

export default EmployeeCard;
