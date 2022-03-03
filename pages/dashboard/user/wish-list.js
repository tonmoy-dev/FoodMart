import { TrashIcon } from "@heroicons/react/outline";
import { ChevronRightIcon, HomeIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
<<<<<<< HEAD
=======
import Link from "next/link";
import React from "react";
>>>>>>> 154a84d5322a2528edced80eebf97cea002bc2d1
import productImage from "../../../src/assets/wishlistImage/product-1-1.png";

const WishList = () => {
  return (
    <div className="py-16 mx-5 md:mx-20">
      <h2 className=" text-black font-semibold text-4xl pb-2">Wishlist</h2>
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
                  Wishlist
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="md:p-10 bg-white md:shadow-lg  md:rounded-lg">
        <h2 className="text-2xl font-semibold">Your Wishlist</h2>
        {/* wishlist table */}
        <div className="mt-6 overflow-auto rounded-lg shadow hidden md:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th
                  scope="col"
                  className="p-6 text-sm font-semibold tracking-wide text-left"
                >
                  <p className="">Select</p>
                </th>
                <th
                  scope="col"
                  colSpan="2"
                  className="p-6 text-sm font-semibold tracking-wide text-center"
                >
                  <p>Product</p>
                </th>
                <th
                  scope="col"
                  className="p-6 text-sm font-semibold tracking-wide text-center"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="p-6 text-sm font-semibold tracking-wide text-center"
                >
                  Stock Status
                </th>
                <th
                  scope="col"
                  className="p-6 text-sm font-semibold tracking-wide text-center"
                >
                  Action
                </th>
                <th
                  scope="col"
                  className="p-6 text-sm font-semibold tracking-wide text-center"
                >
                  Manage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-4 whitespace-nowrap">
                  <input type="checkbox" className="ml-4" />
                </td>
                <td className="py-4 whitespace-nowrap">
                  <p className="w-36"></p>
                  <Image
                    src={productImage}
                    alt="product image"
                    className="object-cover"
                    width="150px"
                    height="97px"
                  />
                </td>
                <td className="p-4 whitespace-nowrap">
                  <p className="text-center">
                    <a href="#">Field Roast Chao Cheese Creamy Original</a>
                  </p>
                  <div className="flex justify-center items-center">
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />

                    <h6 className="pl-4">(4.8)</h6>
                  </div>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <h3 className="text-xl font-semibold text-center">$12.5</h3>
                </td>
                <td className="p-4 whitespace-nowrap text-center">
                  <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                    In Stock
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap text-center">
                  <button className="p-2 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-300 rounded-lg bg-opacity-50 border border-green-300 hover:bg-opacity-80 hover:text-green-600">
                    Add to cart
                  </button>
                </td>
                <td className="p-4 whitespace-nowrap ">
                  <div className="flex justify-center items-center">
                    <TrashIcon
                      className="h-6 w-6 text-red-500 "
                      aria-hidden="true"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 whitespace-nowrap">
                  <input type="checkbox" className="ml-4" />
                </td>
                <td className="py-4 whitespace-nowrap">
                  <p className="w-36"></p>
                  <Image
                    src={productImage}
                    alt="product image"
                    className="object-cover"
                    width="150px"
                    height="97px"
                  />
                </td>
                <td className="p-4 whitespace-nowrap">
                  <p className="text-center">
                    <a href="#">Field Roast Chao Cheese Creamy Original</a>
                  </p>
                  <div className="flex justify-center items-center">
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />

                    <h6 className="pl-4">(4.8)</h6>
                  </div>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <h3 className="text-xl font-semibold text-center">$12.5</h3>
                </td>
                <td className="p-4 whitespace-nowrap text-center">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                    In Stock
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap text-center">
                  <button className="p-2 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-300 rounded-lg bg-opacity-50 border border-green-300 hover:bg-opacity-80 hover:text-green-600">
                    Add to cart
                  </button>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <div className="flex justify-center items-center">
                    <TrashIcon
                      className="h-6 w-6 text-red-500 "
                      aria-hidden="true"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          <div className="my-4 bg-indigo-100 bg-opacity-50 shadow-lg py-6 rounded-lg space-x-2 space-y-2">
            <div className="flex">
              <div className="flex px-2 border-r border-gray-300">
                <Image
                  src={productImage}
                  alt="product image"
                  className="object-cover"
                  width="110px"
                  height="70px"
                />
              </div>
              <div className="px-2">
                <div className="text-sm text-gray-600">
                  <p className="text-center">
                    <a href="#">Field Roast Chaeo Cheese Creamy Original</a>
                  </p>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex justify-center items-center">
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />

                    <h6 className="pl-4">(4.8)</h6>
                  </div>
                </div>
                <div className="py-2 text-center">
                  <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                    In Stock
                  </span>
                </div>
                <div className="text-base font-medium text-gray-600">
                  <p>Price: $ 155.00 for 2 items</p>
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
          <div className="my-4 bg-indigo-100 bg-opacity-50 shadow-lg py-6 rounded-lg space-x-2 space-y-2">
            <div className="flex">
              <div className="flex px-2 border-r border-gray-300">
                <Image
                  src={productImage}
                  alt="product image"
                  className="object-cover"
                  width="110px"
                  height="70px"
                />
              </div>
              <div className="px-2">
                <div className="text-sm text-gray-600">
                  <p className="text-center">
                    <a href="#">Field Roast Chaeo Cheese Creamy Original</a>
                  </p>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex justify-center items-center">
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />
                    <StarIcon
                      className="h-5 w-5 text-orange-500"
                      aria-hidden="true"
                    />

                    <h6 className="pl-4">(4.8)</h6>
                  </div>
                </div>
                <div className="py-2 text-center">
                  <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                    In Stock
                  </span>
                </div>
                <div className="text-base font-medium text-gray-600">
                  <p>Price: $ 155.00 for 2 items</p>
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
        </div>
      </div>
    </div>
  );
};

export default WishList;


