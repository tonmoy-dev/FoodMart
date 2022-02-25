import {
    DotsVerticalIcon,
    ChevronRightIcon,
    HomeIcon,
} from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
const ManageProducts = () => {
    const fakeCart = [
        {
            id: "1",
            title: "Field Roast Chao Cheese Creamy Original",
            img: "https://i.ibb.co/5T05pBT/product-1-1.jpg",
            price: "25.5",
            stock: "5",
            category: "Vegetable",
        },
        {
            id: "12",
            title: "Roast Chaooo Cheese Creamy Original Meatball",
            img: "https://i.ibb.co/5T05pBT/product-1-1.jpg",
            price: "15.5",
            stock: "35",
            category: "Grocery",
        },
        {
            id: "13",
            title: "Exclusive Roast Chao Cheese Creamy Original",
            img: "https://i.ibb.co/5T05pBT/product-1-1.jpg",
            price: "65.5",
            stock: "25",
            category: "Fruits and vegetable",
        },
    ];
    return (
        <div className="   ">
            <style jsx>{`
                .dropdown:hover .dropdown-menu {
                    display: block;
                }
                .image-container {
                    width: 50px;
                    height: 50px;
                }
            `}</style>
            <div className="py-16 mx-5 md:mx-20">
                <h2 className=" text-black font-semibold text-4xl pb-2">
                    Manage Products
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
                                        Manage Products
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <h1 className="text-xl font-semibold">Manage Products</h1>
                <div id="productTable">
                    <div className="flex flex-col mt-4 hidden md:block">
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
                                                    Product
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                                                >
                                                    Price
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                                                >
                                                    Stock
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                                                >
                                                    Category
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
                                            {fakeCart.map((cart) => (
                                                <tr
                                                    key={cart.id}
                                                    className="border-b odd:bg-white even:bg-gray-50"
                                                >
                                                    <td className="flex flex-row gap-2 items-center py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                        <input
                                                            id="checkbox"
                                                            type="checkbox"
                                                            className="w-4 h-4"
                                                        />
                                                        <div className="border image-container">
                                                            <Image
                                                                width={50}
                                                                height={50}
                                                                src={cart.img}
                                                                alt="image"
                                                            ></Image>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <h1>
                                                                Field Roast Chao
                                                                Cheese Creamy
                                                                Original
                                                            </h1>
                                                            <h1 className="text-gray-500 font-light">
                                                                ID:1234
                                                            </h1>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                                        $ <span>2.51</span>
                                                    </td>
                                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                                        <span>1 in stock</span>
                                                    </td>
                                                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                                        <span>Power Tools</span>
                                                    </td>
                                                    <td className="py-4 text-sm text-gray-500 whitespace-nowrap">
                                                        <div className="dropdown relative w-6 mx-auto">
                                                            <div className="dropdown">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    {fakeCart.map((cart) => (
                        <div
                            key={cart.id}
                            className="my-4 bg-indigo-100 bg-opacity-70 shadow-lg py-6 rounded-lg space-x-2 space-y-2"
                        >
                            <div className="flex">
                                <div className="flex px-2 border-r border-gray-300">
                                    <Image
                                        src={cart.img}
                                        alt="product image"
                                        className="object-cover"
                                        width="110px"
                                        height="70px"
                                    />
                                </div>
                                <div className="px-2">
                                    <div className="text-sm text-gray-600">
                                        <p className="text-center">
                                            <a href="#">{cart.title}</a>
                                        </p>
                                    </div>

                                    <div className="py-2 text-center">
                                        <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                                            {cart.stock} -items in stock
                                        </span>
                                    </div>
                                    <div className="text-base font-medium text-gray-600">
                                        <p>
                                            Price:{" "}
                                            <span className="text-lg">
                                                $ {cart.price}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="text-base font-medium text-gray-600">
                                        <p>
                                            Category:{" "}
                                            <span className="text-base font-normal">
                                                {cart.category}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center  text-sm pt-2">
                                        <div className="text-center">
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
                                        <div>
                                            <button className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-300 rounded-lg bg-opacity-50 border border-green-300 hover:bg-opacity-80 hover:text-green-600">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;
