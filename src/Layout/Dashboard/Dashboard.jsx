import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[15%,85%] h-screen bg-[#002050eb] ">
      <Sidebar />

      <div className=" bg-white w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
