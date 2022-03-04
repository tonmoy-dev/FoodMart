import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.png";
import DashAdminMenu from "../DashMenu/DashAdminMenu";

const Invoice = () => {
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
        <DashAdminMenu />



        {/* main content */}
        <div id="main-content" className="pt-24 pr-8 pl-8 lg:pl-80">

                    <div className=" py-16 mx-4 md:mx-20">
                        <h1 className=" text-black font-semibold text-4xl pb-2">Invoice</h1>
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
                                                Invoice
                                            </span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>

                        <div className="w-full bg-gray-100 bg-opacity-50 shadow-lg p-2 md:p-10">
                            <h3 className="text-2xl font-semibold text-left pb-4">
                                Your Invoice
                            </h3>
                            <div className="md:flex justify-between bg-white px-4">
                                <div className="bg-white p-2">
                                    <div>
                                        <Image src={Logo} alt="" width={150} height={60} />
                                    </div>
                                    <div>
                                        <p className="text-base bg-white">
                                            If account is not paid within 7 days the credits
                                            details supplied as confirmation.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-2 bg-white">
                                    <ul className="flex items-center mb:4">
                                        <li className="p-2 border-l-2 border-green-200">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-green-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                                />
                                            </svg>
                                        </li>
                                        <span className="text-sm">
                                        </span>
                                    </ul>
                                    <ul className="flex items-center">
                                        <li className="p-2 border-l-2 border-green-200">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-green-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </li>
                                        <span className="text-sm">
                                            2821 Kensington Road,Avondale Estates, GA 30002
                                            USA
                                        </span>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full h-0.5 bg-green-500"></div>
                            <div className="flex justify-between p-4">
                                <div>
                                    <h6 className="font-bold">
                                        Order Date :{" "}
                                        <span className="text-sm font-medium">
                                            {" "}
                                            12/12/2022
                                        </span>
                                    </h6>
                                    <h6 className="font-bold">
                                        Order ID :{" "}
                                        <span className="text-sm font-medium">
                                            {" "}
                                            12/12/2022
                                        </span>
                                    </h6>
                                </div>
                                <div className="w-40">
                                    <address className="text-sm">
                                        <span className="font-bold"> Billed To : </span>
                                        Joe Smith 795 Folsom Ave San Francisco, CA 94107 P:
                                        (123) 456-7890
                                    </address>
                                </div>
                                <div className="w-40">
                                    <address className="text-sm">
                                        <span className="font-bold">Ship To :</span>
                                        Joe doe 800 Folsom Ave San Francisco, CA 94107 P: +
                                        111-456-7890
                                    </address>
                                </div>
                                <div></div>
                            </div>
                            <div className="flex justify-center p-4">
                                <div className="border-b border-gray-200 overflow-auto shadow">
                                    <table className="">
                                        <thead className="bg-gray-300">
                                            <tr>
                                                <th className="px-4 py-2 text-xs text-gray-500 ">
                                                    #
                                                </th>
                                                <th className="px-4 py-2 text-xs text-gray-500 ">
                                                    Product Name
                                                </th>
                                                <th className="px-4 py-2 text-xs text-gray-500 ">
                                                    Quantity
                                                </th>
                                                <th className="px-4 py-2 text-xs text-gray-500 ">
                                                    Price
                                                </th>
                                                <th className="px-4 py-2 text-xs text-gray-500 ">
                                                    Subtotal
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-gray-200">
                                            <tr className="whitespace-nowrap">
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    1
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">
                                                        Amazon Brand - Symactive Mens
                                                        Regular Fit T-Shirt
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">
                                                        4
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    $100
                                                </td>
                                                <td className="px-6 py-4">$400</td>
                                            </tr>
                                            <tr className="whitespace-nowrap">
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    2
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">
                                                        Amazon Brand - Symactive Mens
                                                        Regular Fit T-Shirt
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">
                                                        2
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    $55
                                                </td>
                                                <td className="px-6 py-4">$110</td>
                                            </tr>
                                            <tr className="border-b-2 whitespace-nowrap">
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    3
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">
                                                        Amazon Brand - Symactive Mens
                                                        Regular Fit T-Shirt
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">
                                                        3
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    $60
                                                </td>
                                                <td className="px-6 py-4">$180</td>
                                            </tr>
                                            <tr className="">
                                                <td colSpan="3"></td>
                                                <td className="text-sm font-bold px-4">
                                                    Sub Total
                                                </td>
                                                <td className="text-sm font-bold tracking-wider">
                                                    <b>$950</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th colSpan="3"></th>
                                                <td className="text-sm font-bold px-4 p-2">
                                                    <b>Tax Rate</b>
                                                </td>
                                                <td className="text-sm font-bold px-4">
                                                    <b>$1.50%</b>
                                                </td>
                                            </tr>
                                            <tr className="text-black bg-gray-300 gap-3">
                                                <th colSpan="3"></th>
                                                <td className="text-xl font-bold p-4">
                                                    <b>Total</b>
                                                </td>
                                                <td className="text-xl font-bold p-4">
                                                    <b>$999.0</b>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="flex justify-between p-4">
                                <div>
                                    <h3 className="text-xl">Terms And Condition :</h3>
                                    <ul className="text-xs list-disc list-inside">
                                        <li>
                                            All accounts are to be paid within 7 days from
                                            receipt of invoice.
                                        </li>
                                        <li>
                                            To be paid by cheque or credit card or direct
                                            payment online.
                                        </li>
                                        <li>
                                            If account is not paid within 7 days the credits
                                            details supplied.
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-4">
                                    <h3>Signature</h3>
                                    <div className="text-4xl italic text-indigo-500">
                                        AAA
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-0.5 bg-green-500"></div>

                            <div className="p-4">
                                <div className="pb-4 flex items-center justify-center">
                                    Thank you very much for being with us.
                                </div>
                                <div className="flex items-end justify-end space-x-3">
                                    <button className="px-4 py-2 text-sm font-semibold text-green-700 bg-green-300">
                                        Print
                                    </button>
                                    <button className="px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-300">
                                        Save
                                    </button>
                                    <button className="px-4 py-2 text-sm font-semibold text-red-700 bg-red-300">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


        </div>

      </div>
    </>



        
    );
};

export default Invoice;
