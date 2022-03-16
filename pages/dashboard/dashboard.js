// import {
//   BellIcon, HomeIcon, LogoutIcon, MenuIcon, SearchIcon, UserCircleIcon, XIcon
// } from "@heroicons/react/solid";
// import Link from "next/link";
import React, { useState } from "react";
// import DashAdminMenu from "./DashMenu/DashAdminMenu";
import DashMenu from "./DashMenu/DashMenu";
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
      <div id="dashboard-container" className=" bg-gray-100">
        {/* top bar */}
        {/* <DashAdminMenu /> */}
        <DashMenu></DashMenu>

        {/* main content */}
        <div id="main-content" className="pt-24 pr-8 pl-8 lg:pl-80">
          {/* <WelcomeAdmin></WelcomeAdmin> */}
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
