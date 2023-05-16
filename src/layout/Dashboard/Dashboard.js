import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className='grid grid-cols-12'>
      <Sidebar />
      <div className=' lg:col-span-10 col-span-12 '>
        <div className=' h-full lg:max-w-7xl w-full mx-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
