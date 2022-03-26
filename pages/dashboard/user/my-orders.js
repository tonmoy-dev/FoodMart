import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import DashAdminMenu from "../DashMenu/DashAdminMenu";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DashVendorMenu from "../DashMenu/DashVendorMenu";
import DashUserMenu from "../DashMenu/DashUserMenu";

const MyOrders = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const user = useSelector((state) => state.states.user);
  // cart data
  useEffect(() => {
    setLoading(true);
    axios.get(`/api/orders?email=${user.email}`).then((response) => {
      setItems(response.data);
      setLoading(false);
    });
  }, [user.email]);
  // console.log(items[0].email)
  return (
    <>
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
        {/* {userNow?.role === 'admin' && <DashAdminMenu />}
        {userNow?.role === 'vendor' && <DashVendorMenu />}
        {userNow?.role === 'user' && <DashUserMenu />} */}

        <DashUserMenu />
        <div id="main-content" className="pt-24 pr-8 pl-8 lg:pl-80">
          <div className="py-16 mx-5 md:mx-20">
            <h2 className=" text-black font-semibold text-4xl pb-2">My Orders</h2>
            {/* breadcrumb */}
            <div>
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <HomeIcon
                        className="h-4 w-4 text-gray-700 mr-2"
                        aria-hidden="true"
                      />
                      <Link href="/">Home</Link>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <a
                        href="#"
                        className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <a
                        href="#"
                        className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                      >
                        User
                      </a>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                        My Orders
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="md:p-10 mt-6 bg-white md:shadow-lg md:rounded-md">
              <h2 className="text-2xl font-semibold mb-2">My Orders</h2>
              {loading && <p>Please wait</p>}
              {!loading && (
                <div className="overflow-auto rounded-md shadow">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                      <tr>
                        <th className="p-6 text-sm font-semibold tracking-wide text-left">
                          Order
                        </th>
                        <th className="p-6 text-sm font-semibold tracking-wide text-left">
                          Date
                        </th>
                        <th className="p-6 text-sm font-semibold tracking-wide text-left">
                          Status
                        </th>
                        <th className="p-6 text-sm font-semibold tracking-wide text-left">
                          Total
                        </th>
                        <th className="p-6 text-sm font-semibold tracking-wide text-left">
                          Email
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                          #{items[0]?._id}
                        </td>
                        <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                          March 11, 2022
                        </td>
                        <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                          <span className="p-1.5 text-xs font-medium uppercase tracking-wider primary-color bg-green-200 rounded-md bg-opacity-50">
                            Processing
                          </span>
                        </td>
                        <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                          $ {items[0]?.price}
                        </td>
                        <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                          {items[0]?.email}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* orders in small screen view */}

              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
                    <div className="bg-gray-100 py-4 rounded-md shadow-md">
                        <div className="flex">
                            <div className="flex items-center border-r border-gray-300">
                                <Image
                                    src={productImage}
                                    alt="product image"
                                    className="object-cover "
                                    width="120px"
                                    height="90px"
                                />
                            </div>
                            <div className="px-2">
                                <div className="flex space-x-10 text-sm pb-2">
                                    <div className="text-sm text-gray-600">
                                        <p>#1254</p>
                                    </div>
                                    <div className="text-sm text-gray-600 px-2">
                                        <p>15-02-2022</p>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-600">
                                    <p>Product Name will be show here.</p>
                                </div>



              



                </div>

                </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
