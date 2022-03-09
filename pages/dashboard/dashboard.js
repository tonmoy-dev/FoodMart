import {
  BellIcon, HomeIcon, LogoutIcon, MenuIcon, SearchIcon, UserCircleIcon, XIcon
} from "@heroicons/react/solid";
import Link from "next/link";
import React, { useState } from "react";
import DashAdminMenu from "./DashMenu/DashAdminMenu";
const Dashboard = () => {
  const [isActive, setActive] = useState("false");
  const [isAActive, setAActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  // for mobile device
  const handleMenu = () => {
    setAActive(!isAActive);
  };

  return (
    <div>
      <style jsx>
        {`
          ::-webkit-scrollbar {
            width: 1px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: darkcyan;
          }
        `}
      </style>
      <div id="dashboard-container" className="h-screen bg-gray-100">
        {/* top bar */}
        <DashAdminMenu />






















        {/* main content */}
        <div id="main-content" className="pt-24 pr-8 pl-8 lg:pl-80">
          <h1 className="text-3xl text-gray-700 font-bold">
            Welcome to Dashboard
          </h1>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
