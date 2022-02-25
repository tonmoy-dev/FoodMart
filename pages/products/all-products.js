import React from "react";
import Products from "../../src/Components/Products/Products/Products";
import SideBar from "../../src/Components/Products/SideBar/SideBar/SideBar";
import useSWR from "swr";

const AllProducts = () => {
  // let products = require("../../src/assets/Api/Products.json");

  const fetcher = async () => {
    const response = await fetch(`http://foodmart11.herokuapp.com/products`);
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR("details", fetcher);
  if (error) return `An error has occured${error}`;
  if (!data) return "Loading";

  return (
    <>
     <div className="border border-l-0 border-r-0 py-4">
        <nav className="flex px-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-sm text-green-500 hover:text-orange-500"
              >
                <svg
                  className="mr-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </a>
            </li>
            <li>
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
                <a
                  href="#"
                  className="ml-1 text-sm font-sm text-gray-500 hover:text-orange-500 md:ml-2"
                >
                  Products
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    <div className=" flex flex-col justify-center align-middle items-center">
      <div className="pt-10">
        <h1 className="text-gray-700 font-bold text-3xl mb-6">All Fresh Products</h1>
      </div>
    </div>
    <div>
    <div className="AllProducts-style grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 px-4">
        <div className="lg:col-span-3 sm:col-span-2">
          <Products data={data}></Products>
        </div>
        <div className="px-4 mt-2">
          <SideBar></SideBar>
        </div>
      </div>
    </div>
    </>
  );
};

export default AllProducts;