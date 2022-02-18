import Image from "next/image";
import React from "react";
import { DotsVerticalIcon } from "@heroicons/react/solid";

const OrderList = () => {
  const fakeCart = [
    {
      id: "1",
      title: "Field Roast Chao Cheese Creamy Original",
      img: "https://i.ibb.co/5T05pBT/product-1-1.jpg",
      paid: "yes",
      status: "pending",
    },
    {
      id: "12",
      title: "Field Roast Chao Cheese Creamy Original",
      img: "https://i.ibb.co/5T05pBT/product-1-1.jpg",
      paid: "No",
      status: "shipped",
    },
    {
      id: "13",
      title: "Field Roast Chao Cheese Creamy Original",
      img: "https://i.ibb.co/5T05pBT/product-1-1.jpg",
      paid: "yes",
      status: "cancled",
    },
    {
      id: "14",
      title: "Field Roast Chao Cheese Creamy Original",
      img: "https://i.ibb.co/5T05pBT/product-1-1.jpg",
      paid: "yes",
      status: "new",
    },
  ];
  return (
    <div>
      <style jsx>{`
        .dropdown:hover .dropdown-menu {
          display: block;
        }
      `}</style>
      <div className="container mx-auto bg-gray-100 p-4">
        <nav className="flex pb-2" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-sm text-green-500 hover:text-orange-500"
              >
                Dashboard
              </a>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-sm font-sm text-gray-400 md:ml-2">
                  Order List
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-xl font-semibold">Order List</h1>
        <div id="productTable">
          <div className="flex flex-col mt-4">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-gray-100 border">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                        >
                          Order ID
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                        >
                          Customer
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                        >
                          Paid
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                        >
                          Items
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                        >
                          Total
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-sm font-medium tracking-wider text-center text-gray-700 uppercase "
                        >
                          Manage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {fakeCart.map((order) => (
                        <tr
                          key={order.id}
                          className="border-b odd:bg-white even:bg-gray-50"
                        >
                          <td className="flex flex-row gap-4 items-center py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            <input
                              id="checkbox"
                              type="checkbox"
                              className="w-4 h-4"
                            />
                            <h1>#3201</h1>
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                            <span>June 26, 2021</span>
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                            <span>Jessica Moore</span>
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                            {order.paid.toLocaleLowerCase() == "no" ? (
                              <span className="bg-orange-100 text-orange-600 px-2 py-smrounded">
                                No
                              </span>
                            ) : (
                              <span className="bg-green-100 text-green-600 px-2 py-smrounded">
                                Yes
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                            {order.status.toLocaleLowerCase() == "pending" && (
                              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                                New
                              </span>
                            )}
                            {order.status.toLocaleLowerCase() == "new" && (
                              <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded">
                                Pending
                              </span>
                            )}
                            {order.status.toLocaleLowerCase() == "shipped" && (
                              <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                                Shipped
                              </span>
                            )}
                            {order.status.toLocaleLowerCase() == "cancled" && (
                              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                Cancled
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                            <span>3 </span>items
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                            $<span> 300</span>
                          </td>
                          <td className="py-4 text-sm text-gray-500 whitespace-nowrap">
                            <div className="dropdown relative w-6 mx-auto">
                              <div className="dropdown ">
                                <DotsVerticalIcon className="h-5 w-6 text-black mx-auto" />
                              </div>
                              <ul className="dropdown-menu absolute bottom-0 right-4 z-50 hidden text-gray-700 pt-1">
                                <li className="">
                                  <a
                                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-6 block whitespace-no-wrap"
                                    href="#"
                                  >
                                    Edit
                                  </a>
                                </li>
                                <li className="">
                                  <a
                                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-6 block whitespace-no-wrap"
                                    href="#"
                                  >
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
