import { DotsVerticalIcon } from "@heroicons/react/solid";
import React from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/outline";

const ManageOrders = () => {
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
        <div className="">
            <style jsx>{`
                .dropdown:hover .dropdown-menu {
                    display: block;
                }
            `}</style>
            <div className="py-16 mx-5 md:mx-20">
                <h2 className=" text-black font-semibold text-4xl pb-2">
                    Manage Orders
                </h2>
                {/* breadcrumb */}
                <div className="pb-10">
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
                                    Home
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
                                        Admin
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
                                        Manage Orders
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <h1 className="text-xl font-semibold">Order List</h1>
                <div id="productTable" className="hidden md:block">
                    <div className="flex flex-col mt-4 pb-10">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow-md">
                                    <table className="min-w-full ">
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
                                                        <span>
                                                            June 26, 2021
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                                        <span>
                                                            Jessica Moore
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                                        {order.paid.toLocaleLowerCase() ==
                                                        "no" ? (
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
                                                        {order.status.toLocaleLowerCase() ==
                                                            "pending" && (
                                                            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                                                                New
                                                            </span>
                                                        )}
                                                        {order.status.toLocaleLowerCase() ==
                                                            "new" && (
                                                            <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded">
                                                                Pending
                                                            </span>
                                                        )}
                                                        {order.status.toLocaleLowerCase() ==
                                                            "shipped" && (
                                                            <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                                                                Shipped
                                                            </span>
                                                        )}
                                                        {order.status.toLocaleLowerCase() ==
                                                            "cancled" && (
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
                {/* Manage orders grid view - mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    <div className="my-2 bg-indigo-100 bg-opacity-50 shadow-lg py-6 rounded-lg">
                        <div className="px-4">
                            <div className="flex justify-between">
                                <div className="w-full text-left text-gray-600">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Order ID:{" "}
                                    </span>
                                    <span className="text-lg text-gray-700 font-semibold">
                                        <a href="#">#321</a>
                                    </span>
                                </div>
                                <div className="w-full text-left text-gray-600">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Date:{" "}
                                    </span>
                                    <span className="text-lg text-gray-700 font-semibold">
                                        <a href="#">12-02-2022</a>
                                    </span>
                                </div>
                            </div>
                            <div className="w-full py-1 text-left">
                                <span className="font-semibold text-gray-600 pr-2">
                                    Customer:{" "}
                                </span>
                                <span className=" text-gray-600">
                                    Jessica Moore
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <div className="w-full py-1 text-left">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Paid:{" "}
                                    </span>
                                    <span className="py-1.5 px-2 text-xs  font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                                        Yes
                                    </span>
                                </div>
                                <div className="w-full py-1 text-left">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Status:{" "}
                                    </span>
                                    <span className="py-1.5 px-2 text-xs  font-medium uppercase tracking-wider text-blue-500 bg-blue-200 rounded-lg bg-opacity-50">
                                        New
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="w-full py-1 text-left">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Items:{" "}
                                    </span>
                                    <span className="text-gray-600">
                                        3 items
                                    </span>
                                </div>
                                <div className="w-full py-1 text-left">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Total:{" "}
                                    </span>
                                    <span className="text-gray-600">$ 300</span>
                                </div>
                            </div>
                            <div className="flex justify-between w-full">
                                <div className="w-full text-left py-1">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Manage:{" "}
                                    </span>
                                    <a href="#">
                                        <span className="px-1.5 py-1.5 text-xs font-medium uppercase tracking-wider text-red-500 bg-red-200 rounded-lg border border-red-200 bg-opacity-50">
                                            <TrashIcon
                                                className="h-4 w-4 text-red-500 inline-block mr-1 mb-1"
                                                aria-hidden="true"
                                            />
                                            Delete
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-2 bg-yellow-100 bg-opacity-40 shadow-lg py-6 rounded-lg">
                        <div className="px-4">
                            <div className="flex justify-between">
                                <div className="w-full text-left text-gray-600">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Order ID:{" "}
                                    </span>
                                    <span className="text-lg text-gray-700 font-semibold">
                                        <a href="#">#321</a>
                                    </span>
                                </div>
                                <div className="w-full text-left text-gray-600">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Date:{" "}
                                    </span>
                                    <span className="text-lg text-gray-700 font-semibold">
                                        <a href="#">12-02-2022</a>
                                    </span>
                                </div>
                            </div>
                            <div className="w-full py-1 text-left">
                                <span className="font-semibold text-gray-600 pr-2">
                                    Customer:{" "}
                                </span>
                                <span className=" text-gray-600">
                                    Jessica Moore
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <div className="w-full py-1 text-left">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Paid:{" "}
                                    </span>
                                    <span className="py-1.5 px-2 text-xs  font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                                        Yes
                                    </span>
                                </div>
                                <div className="w-full py-1 text-left">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Status:{" "}
                                    </span>
                                    <span className="py-1.5 px-2 text-xs  font-medium uppercase tracking-wider text-blue-500 bg-blue-200 rounded-lg bg-opacity-50">
                                        New
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="w-full py-1 text-left">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Items:{" "}
                                    </span>
                                    <span className="text-gray-600">
                                        3 items
                                    </span>
                                </div>
                                <div className="w-full py-1 text-left">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Total:{" "}
                                    </span>
                                    <span className="text-gray-600">$ 300</span>
                                </div>
                            </div>
                            <div className="flex justify-between w-full">
                                <div className="w-full text-left py-1">
                                    <span className="font-semibold text-gray-600 pr-2">
                                        Manage:{" "}
                                    </span>
                                    <a href="#">
                                        <span className="px-1.5 py-1.5 text-xs font-medium uppercase tracking-wider text-red-500 bg-red-200 rounded-lg border border-red-200 bg-opacity-50">
                                            <TrashIcon
                                                className="h-4 w-4 text-red-500 inline-block mr-1 mb-1"
                                                aria-hidden="true"
                                            />
                                            Delete
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;
