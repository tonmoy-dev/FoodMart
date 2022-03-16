import {
  BellIcon, HomeIcon, LogoutIcon, MenuIcon, SearchIcon, UserCircleIcon, XIcon
} from "@heroicons/react/solid";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WelcomeAdmin from "../../src/Components/Dashboard/Admin/WelcomePage/WelcomeAdmin";
import WelcomeUser from "../../src/Components/Dashboard/User/WelcomePage/WelcomeUser";
// import WelcomeAdmin from "../../src/Components/Dashboard/Admin/WelcomePage/WelcomeAdmin";
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

  const user = useSelector((state) => state.states.user);

  const [control, setControl] = useState(false);
  const [loading, setLoading] = useState(true);

 






  // users
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setLoading(true);
    setControl(true);
    axios.get("/api/users").then(response => {
      setUsers(response.data);
      setLoading(false);
    });
  }, [control]);


  console.log(user.displayName);
  console.log(user.email);
  const email = user.email


  const userNow = users.filter(user => user.email === email)[0]
  console.log(userNow?.role);
  let role = userNow?.role

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
      <div id="dashboard-container" className="">
        {/* top bar */}
        <DashAdminMenu />

        {/* main content */}
        <div id="main-content" className="pt-24 pr-8 pl-8 lg:pl-80">
          {role === 'admin' || role === 'vendor' ? <WelcomeAdmin></WelcomeAdmin> : <WelcomeUser/>

          }
          {/* <WelcomeAdmin></WelcomeAdmin> */}
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
