import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import EmployeeTable from './components/EmployeeTable';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div>
          <h1 className="text-5xl text-center font-bold">KODERS</h1>
        </div>
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-4" /> {/* Adjust height as needed */}
          <h1 className="text-2xl font-bold">Employees Activity Dashboard</h1>
        </div>
        <div className="text-right">
          <div>March 30, 2024</div>
          <div>09:36 AM</div>
        </div>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3">
          <EmployeeTable />
        </div>
        <div>
          <EmployeeCard />
        </div>
      </main>
    </div>
  );
}

export default App;
