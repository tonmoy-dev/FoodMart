import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";

const ManageOrders = () => {
    return (
        <div className="py-16 mx-5 md:mx-20">
            <h2 className=" text-black font-semibold text-4xl pb-2">
                My Orders
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
                                    Pages
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
                                    MyAccount
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
            <div className="p-5 md:p-10 h-screen bg-white shadow-lg  rounded-lg">
                <h2 className="text-3xl font-semibold mb-2">My Orders</h2>
                <div className="overflow-auto rounded-lg shadow hidden md:block">
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
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                                    #1234
                                </td>
                                <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                                    February 15 2022
                                </td>
                                <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                                        shipped
                                    </span>
                                </td>
                                <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                                    $145.00 for 2 item
                                </td>
                                <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                                    View
                                </td>
                            </tr>
                            <tr>
                                <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                                    #1234
                                </td>
                                <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                                    February 15 2022
                                </td>
                                <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-orange-500 bg-orange-200 rounded-lg bg-opacity-50">
                                        Processing
                                    </span>
                                </td>
                                <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                                    $145.00 for 2 item
                                </td>
                                <td className="p-6 text-sm text-gray-500 whitespace-nowrap">
                                    View
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div className="text-sm text-gray-600">
                                <p>#1254</p>
                            </div>
                            <div className="text-sm text-gray-600 px-2">
                                <p>15-02-2022</p>
                            </div>
                            <div>
                                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-orange-500 bg-orange-200 rounded-lg bg-opacity-50">
                                    Processing
                                </span>
                            </div>
                        </div>
                        <div className="text-sm text-gray-600 px-2">
                            <p>Product Name will be show here.</p>
                        </div>
                        <div>
                            <div className="text-base font-medium text-gray-600 px-2">
                                <p>145.00 for 2 items</p>
                            </div>
                            <div>
                                <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                                    view
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                        <div className="flex items-center space-x-2 text-sm">
                            <div className="text-sm text-gray-600">
                                <p>#1254</p>
                            </div>
                            <div className="text-sm text-gray-600 px-2">
                                <p>15-02-2022</p>
                            </div>
                            <div>
                                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                                    Shipped
                                </span>
                            </div>
                        </div>
                        <div className="text-sm text-gray-600 px-2">
                            <p>Product Name will be show here.</p>
                        </div>
                        <div>
                            <div className="text-base font-medium text-gray-600 px-2">
                                <p>145.00 for 2 items</p>
                            </div>
                            <div>
                                <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                                    view
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;
