import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

const AccountDetails = () => {
    return (
        <div className="py-16 mx-5 md:mx-20">
            <h2 className=" text-black font-semibold text-4xl pb-2">
                Account Details
            </h2>
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
                                    Account Details
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            {/* Account Details */}
            <div className="py-10 px-8 md:px-16 mt-6 text-left bg-white shadow-lg  rounded-lg">
                <h3 className="text-3xl font-semibold">Account Info</h3>
                <div className="mt-4">
                    <p className="text-sm font-bold text-gray-600">
                        Do not have an account ? Please{""}
                        <span className="text-sm ml-2 text-green-600 hover:text-green-800 hover:underline">
                            <Link href="/register">Register</Link>
                        </span>
                    </p>
                </div>
                <form action="">
                    <div className="mt-4">
                        <div className="md:flex">
                            <div className="md:w-1/2 md:pr-2 mt-4">
                                <label className="block" name="Email">
                                    First Name
                                    <span className="text-orange-600">*</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 py-2 mt-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                                />
                            </div>
                            <div className="md:w-1/2 md:pl-2 mt-4">
                                <label className="block" name="Email">
                                    Last Name
                                    <span className="text-orange-600">*</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-4 py-2 mt-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                                />
                            </div>
                        </div>
                        <div className="md:flex">
                            <div className="md:w-1/2 md:pr-2 mt-4">
                                <label className="block" name="Email">
                                    Display Name
                                    <span className="text-orange-600">*</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Display Name"
                                    className="w-full px-4 py-2 mt-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                                />
                            </div>
                            <div className="md:w-1/2 md:pl-2 mt-4">
                                <label className="block" name="Email">
                                    Your Phone Number
                                    <span className="text-orange-600">*</span>
                                </label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="Your Phone Number"
                                    className="w-full px-4 py-2 mt-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block" name="Email">
                                Address
                                <span className="text-orange-600"> *</span>
                            </label>
                            <input
                                required
                                type="email"
                                placeholder="Address"
                                className="w-full px-4 py-2 mt-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                            />
                        </div>

                        <div className="md:flex">
                            <div className="md:w-1/3 md:pr-2 mt-4">
                                <label className="block" name="Password">
                                    City
                                    <span className="text-orange-600"> *</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="City"
                                    className="w-full px-4 py-2 mt-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                                />
                            </div>
                            <div className="md:w-1/3 md:pr-2 mt-4">
                                <label className="block" name="Password">
                                    Country
                                    <span className="text-orange-600"> *</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Country"
                                    className="w-full px-4 py-2 mt-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                                />
                            </div>
                            <div className="md:w-1/3 mt-4">
                                <label className="block" name="Password">
                                    ZipCode
                                    <span className="text-orange-600"> *</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="ZipCode"
                                    className="w-full px-4 py-2 mt-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                                />
                            </div>
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button className="px-12 py-3 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-700 w-full md:w-1/4">
                                Sign up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AccountDetails;
