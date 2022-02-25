import { PencilAltIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";


const OrderDetails = () => {
  const fakeCart = [
    {
      id: "1",
      title: "Field Roast Chao Cheese Creamy Original",
      img: "https://i.ibb.co/5T05pBT/product-1-1.jpg",
    },
    {
      id: "12",
      title: "Field Roast Chao Cheese Creamy Original",
      img: "https://i.ibb.co/5T05pBT/product-1-1.jpg",
    },
    {
      id: "13",
      title: "Field Roast Chao Cheese Creamy Original",
      img: "https://i.ibb.co/5T05pBT/product-1-1.jpg",
    },
  ];
  return (
    <div>
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
                  Order Details
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-xl font-semibold">Order Details #80294</h1>
        <div className="border-t border-b flex lg:flex-row md:flex-row flex-col gap-4 py-2 my-4">
          <div className="flex flex-row">
            <div className="border-r-2 px-2">
              <p>October 7, 2020 at 9:08 pm</p>
            </div>
            <div className="border-r-2 px-2">
              <p>
                <span>6</span> items
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4">
            <div className="border-r-2 px-2">
              <p>
                Total $<span>5,882.00</span>
              </p>
            </div>
            <div>
              <p className="px-2 bg-green-200">Paid</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 md:gap-4">
          <div className="col-span-2">
            <div id="note-area" className="relative">
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-base text-gray-900 bg-white rounded border-0 focus:ring-gray-500 shadow"
                placeholder="Notes about order"
              ></textarea>
              <div className="absolute bottom-0 right-0">
                <PencilAltIcon className="h-5 w-6 text-gray-400 m-4" />
              </div>
            </div>
            <div className="shadow" id="productTable">
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
                              Items
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
                              Select
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Total
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
                                <div className="border">
                                  <Image
                                    width={50}
                                    height={50}
                                    src="https://i.ibb.co/5T05pBT/product-1-1.jpg"
                                    alt="image"
                                  ></Image>
                                </div>
                                <div id="product-title">
                                  <h1>
                                    Field Roast Chao Cheese Creamy Original
                                  </h1>
                                </div>
                              </td>
                              <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                $ <span>200</span>
                              </td>
                              <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                <span>2</span>
                              </td>
                              <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                $ <span>400</span>
                              </td>
                            </tr>
                          ))}
                          <tr className="bg-white">
                            <td className="py-4 flex flex-col gap-y-2 px-6 text-sm text-gray-900 whitespace-nowrap">
                              <h2 className="text-base font-semibold text-gray-700">
                                Subtotal
                              </h2>
                              <h2 className="text-base font-semibold text-gray-700">
                                Store Credit
                              </h2>
                              <h2 className="text-base font-semibold text-gray-700">
                                Shipping
                              </h2>
                            </td>
                            <td></td>
                            <td></td>
                            <td className="py-4 flex flex-col gap-y-2 px-6 text-sm text-gray-900 whitespace-nowrap">
                              <p>
                                $ <span>5,877.00</span>
                              </p>
                              <p>
                                $ <span>-20.00</span>
                              </p>
                              <p>
                                $ <span>25.00</span>
                              </p>
                            </td>
                          </tr>
                          <tr className="bg-white shadow border-t">
                            <td className="py-4 gap-y-2 px-6 text-sm text-gray-900 whitespace-nowrap">
                              <h2 className="text-base font-semibold text-gray-700">
                                Total
                              </h2>
                            </td>
                            <td></td>
                            <td></td>
                            <td className="py-4 gap-y-2 px-6 text-sm text-gray-900 whitespace-nowrap">
                              <p className="text-green-500 text-base font-semibold">
                                $ <span>2500</span>
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="right-part">
            <div id="Customer" className="bg-white p-4 shadow rounded-lg">
              <div className="flex justify-between items-center flex-row border-b mb-4">
                <h1 className="text-lg font-semibold text-gray-700">
                  Customer
                </h1>
                <button className="text-blue-600 capitalize">edit</button>
              </div>
              <div className="flex flex-col">
                <h1>Jessica Moore</h1>
                <p>This is a first order</p>
              </div>
            </div>
            <div
              id="contact-person"
              className="bg-white my-4 p-4 shadow rounded-lg"
            >
              <div className="flex justify-between items-center flex-row border-b mb-4">
                <h1 className="text-lg font-semibold text-gray-700">
                  Contact person
                </h1>
                <button className="text-blue-600 capitalize">edit</button>
              </div>
              <div className="contact-info text-sm font-medium text-gray-500">
                <h1>Jessica Moore</h1>
                <a
                  className="text-blue-600 hover:underline"
                  href="mailto:moore@example.com"
                >
                  moore@example.com
                </a>
                <p>+38 (094) 730-24-25</p>
              </div>
            </div>
            <div
              id="shipping-address"
              className="bg-white my-4 p-4 shadow rounded-lg"
            >
              <div className="flex justify-between items-center flex-row border-b mb-4">
                <h1 className="text-lg font-semibold text-gray-700">
                  Shipping Address
                </h1>
                <button className="text-blue-600 capitalize">edit</button>
              </div>
              <div className="contact-info text-sm font-medium text-gray-500">
                <h1>Jessica Moore</h1>
                <p>Random Federation</p>
                <p>115302, Moscow Varshavskaya, 15-2-178</p>
              </div>
            </div>
            <div
              id="billing-address"
              className="bg-white my-4 p-4 shadow rounded-lg"
            >
              <div className="flex justify-between items-center flex-row border-b mb-4">
                <h1 className="text-lg font-semibold text-gray-700">
                  Billing Address
                </h1>
                <button className="text-blue-600 capitalize">edit</button>
              </div>
              <div className="contact-info text-sm font-medium text-gray-500">
                <h1>Jessica Moore</h1>
                <p>Random Federation</p>
                <p>115302, Moscow Varshavskaya, 15-2-178</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
