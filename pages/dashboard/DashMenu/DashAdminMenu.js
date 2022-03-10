import {
  BellIcon,
  LogoutIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import React, { useState } from "react";

const DashAdminMenu = () => {
  const [isActive, setActive] = useState("false");
  const [isAActive, setAActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  // for mobile device
  const handleMenu = () => {
    setAActive(!isAActive);
  };

  const MenuList = [
    {
      menuId: 2,
      menuName: "Coupon List",
      pageLink: "/dashboard/admin/coupons-list",
    },
    {
      menuId: 3,
      menuName: "Catagory List",
      pageLink: "/dashboard/admin/category-list",
    },
    {
      menuId: 4,
      menuName: "Add Product",
      pageLink: "/dashboard/admin/add-product",
    },
    {
      menuId: 5,
      menuName: "Add Coupon",
      pageLink: "/dashboard/admin/add-coupon",
    },
    {
      menuId: 6,
      menuName: "Add Blog",
      pageLink: "/dashboard/user/add-blog",
    },
    {
      menuId: 7,
      menuName: "Add Review",
      pageLink: "/dashboard/user/add-review",
    },
    {
      menuId: 8,
      menuName: "My order",
      pageLink: "/dashboard/user/my-orders",
    },
    {
      menuId: 9,
      menuName: "Order Details",
      pageLink: "/dashboard/admin/order-details",
    },
    {
      menuId: 10,
      menuName: "Account Details",
      pageLink: "/dashboard/user/account-details",
    },
  ];

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

      {/* top bar */}
      <div
        id="top-bar"
        className="h-20 bg-white shadow-sm pr-8 lg:pl-80 pl-8 fixed w-full top-0 left-0 flex items-center"
      >
        {/* menu button */}
        <div
          id="hambarg"
          onClick={handleToggle}
          className="w-8 cursor-pointer lg:hidden"
        >
          <MenuIcon className="text-green-500" />
        </div>
        {/* menu button */}
        <div className="relative hidden lg:block">
          <SearchIcon className="absolute left-2 top-2 w-6 text-green-500" />
          <input
            type="text"
            placeholder="Search for products"
            className="block pl-11 pr-2 w-72 border-none rounded-3xl focus:ring-gray-400 focus:outline-none py-2 bg-gray-100 text-base text-gray-600"
          />
        </div>
        <div className="ml-auto lg:flex hidden items-center">
          <div>
            <BellIcon className="w-6 cursor-pointer text-green-500 hover:text-green-400" />
          </div>
          <div className="ml-4 relative">
            <div
              onClick={handleToggle}
              className="cursor-pointer flex items-center gap-1"
            >
              <UserCircleIcon
                id="dropdown"
                className="h-8 w-8 text-green-500 rounded-full"
              />
              <h1 className="font-medium uppercase">anik nath</h1>
            </div>
            <div
              id="dropdown_settings"
              className={`absolute ${
                isActive ? "hidden" : ""
              } z-50 mt-4 rounded shadow-lg w-48 right-0 py-1 bg-white`}
            >
              <div className="px-4 py-2 text-xs text-gray-400">
                Manage Account
              </div>
              <a
                href="#"
                className="block px-4 text-sm leading-5 py-2 text-gray-700 hover:bg-gray-100 transition"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 text-sm leading-5 py-2 text-gray-700 hover:bg-gray-100 transition"
              >
                Settings
              </a>
              <div className="border-t border-gray-100"></div>
              <a
                href="#"
                className="block px-4 text-sm leading-5 py-2 text-gray-700 hover:bg-gray-100 transition"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* side bar */}
      <div
        id="side-bar"
        className={`${
          isActive ? "hidden md:block" : "active"
        } fixed flex flex-col left-0 top-0 w-72 h-full bg-gray-200 shadow-sm z-10 transition-all`}
      >
        <div className="relative text-dark font-bold text-xl uppercase text-center py-6 bg-gray-200 border-b-4 border-white">
          <h1 className="text-green-500">
            <Link href="/"><a href="">food<span className="text-orange-400">Mart</span></a></Link>
          </h1>
          <XIcon
            onClick={handleToggle}
            id="sideBar-close"
            className="absolute block lg:hidden w-6 right-3 top-5 cursor-pointer"
          />
        </div>
        <div className="flex overflow-y-auto h-full flex-col justify-between flex-grow">
          <div className="py-5">
            <Link href="/dashboard/dashboard">
            <a
              className="flex items-center my-1 px-6 py-3 text-white hover:text-white border-l-4 border-transparent transition border-orange-500 bg-green-500"
            >
              Home
            </a>
            </Link>
            {MenuList.map((menu) => (
              <div key={menu.menuId}>
                <Link href={`${menu.pageLink}`}>
                  <a className="flex items-center my-1 px-6 py-3 hover:text-white border-l-4 hover:border-orange-500 hover:bg-green-500">
                    {menu.menuName}
                  </a>
                </Link>
              </div>
            ))}

            {/* for mobile device */}
            <a
              href="#"
              className="flex lg:hidden items-center my-1 px-4 py-3 text-dark hover:text-white border-l-4 border-transparent transition hover:border-orange-500 hover:bg-green-500"
            >
              <LogoutIcon className="w-5 mr-3" />
              Logout
            </a>
          </div>
          <div className="lg:hidden block">
            {/* seach box for mobile device */}
            <div className="relative mx-5 mb-5">
              <SearchIcon className="absolute left-2 top-2 w-6 text-green-500" />
              <input
                type="text"
                className="block pl-11 pr-2 w-full border-none rounded-3xl focus:outline-none focus:ring-green-500 py-2 bg-gray-300 text-base text-dark"
                placeholder="Search for products"
              />
            </div>
            {/* user profile for mobil device */}
            <div className="border-t border-gray-400 flex items-center py-4 px-5">
              <div
                onClick={handleMenu}
                className="relative cursor-pointer mr-4"
              >
                <UserCircleIcon className="h-8 w-8 text-green-500 rounded-full" />
                <div
                  className={`absolute ${
                    isAActive ? "hidden" : ""
                  } ml-10 rounded shadow-lg w-48 bottom-0 bg-white`}
                >
                  <div className="px-4 py-2 text-xs text-gray-400">
                    Manage Account
                  </div>
                  <a
                    href="#"
                    className="block px-4 text-sm leading-5 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 text-sm leading-5 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Settings
                  </a>
                </div>
              </div>
              <a href="#" className="text-dark text-md capitalize">
                Anik Nath
              </a>
              <div className="ml-auto">
                <BellIcon className="w-6 cursor-pointer text-green-500 hover:text-gray-900" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main content */}
      {/* <div id="main-content" className="pt-24 pr-8 pl-8 lg:pl-80">
                    <h1 className="text-3xl text-gray-700 font-bold">
                        Welcome to Dashboard
                    </h1>
                </div> */}
    </div>
  );
};

export default DashAdminMenu;
