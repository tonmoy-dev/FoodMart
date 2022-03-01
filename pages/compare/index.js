import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import productImage from "../../src/assets/compareImage/product-2-1.jpg";

const Compare = () => {
  return (
    <div div className="py-16 mx-5 md:mx-20">
      <h2 className=" text-black font-semibold text-4xl pb-2">
        Products Compare
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
                   <Link href="/products/all-products">Shop</Link>
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
                  Compare
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="">
        {/* wishlist table */}
        <div className="pt-10 overflow-auto">
          <table className="w-full">
            <tbody className="flex border rounded p-4 overflow-auto w-full">
              <tr className="flex flex-col w-1/4  border">
                <td className="p-3 h-32 border-b">
                  <p className="text-sm font-semibold text-gray-500">Preview</p>
                </td>
                <td className="p-4 border-b">
                  <p className="text-sm font-semibold text-gray-500">Name</p>
                </td>
                <td className="p-4 border-b">
                  <p className="text-sm font-semibold text-gray-500">Price</p>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Rating
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Description
                  </h3>
                </td>
                <td className="p-3 h-14 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Stock status
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Weight
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Dimensions
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Buy now
                  </h3>
                </td>
              </tr>
              <tr className="flex flex-col w-1/4  border">
                <td className="p-4 h-32 border-b">
                  <Image
                    src={productImage}
                    alt="product image"
                    className="object-cover"
                    width="150px"
                    height="97px"
                  />
                </td>
                <td className="p-4 border-b">
                  <p className="text-sm font-semibold text-gray-500">Name</p>
                </td>
                <td className="p-4 border-b">
                  <p className="text-sm font-semibold text-gray-500">Price</p>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Rating
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Description
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-orange-500 bg-orange-200 rounded-lg bg-opacity-50">
                    In Stock
                  </span>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Weight
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Dimensions
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Buy now
                  </h3>
                </td>
              </tr>
              <tr className="flex flex-col w-1/4  border">
                <td className="p-4 h-32 border-b">
                  <Image
                    src={productImage}
                    alt="product image"
                    className="object-cover"
                    width="150px"
                    height="97px"
                  />
                </td>
                <td className="p-4 border-b">
                  <p className="text-sm font-semibold text-gray-500">Name</p>
                </td>
                <td className="p-4 border-b">
                  <p className="text-sm font-semibold text-gray-500">Price</p>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Rating
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Description
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-orange-500 bg-orange-200 rounded-lg bg-opacity-50">
                    In Stock
                  </span>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Weight
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Dimensions
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Buy now
                  </h3>
                </td>
              </tr>
              <tr className="flex flex-col w-1/4 border">
                <td className="p-4 h-32 border-b">
                  <Image
                    src={productImage}
                    alt="product image"
                    className="object-cover"
                    width="150px"
                    height="97px"
                  />
                </td>
                <td className="p-4 border-b">
                  <p className="text-sm font-semibold text-gray-500">Name</p>
                </td>
                <td className="p-4 border-b">
                  <p className="text-sm font-semibold text-gray-500">Price</p>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Rating
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Description
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-orange-500 bg-orange-200 rounded-lg bg-opacity-50">
                    In Stock
                  </span>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Weight
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Dimensions
                  </h3>
                </td>
                <td className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-gray-500">
                    Buy now
                  </h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Compare;
