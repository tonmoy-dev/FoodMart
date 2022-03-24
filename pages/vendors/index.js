import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import VendorCard from "../../src/Components/VendorCard/VendorCard";
//{vendors}
const AllVendors = ({ vendors }) => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <>
      <div className="head-banner">
        <div className="container mx-auto">
          <div className="banner-inner flex flex-col justify-center items-center">
            <h1 className="banner-title font-bold text-4xl text-gray-900 mb-4">
              <span className="">Vendor List</span>
            </h1>
            {/* nav */}
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <Link href="/">Home</Link>
                  </a>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                      Vendors
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3">
          <div className="flex flex-row justify-between items-center rounded pt-3">
            <h1 className="text-gray-700 text-sm md:text-md font-semibold ml-1">
              Total vendors showing:{" "}
              <span className="primary-color">{vendors.length}</span>
            </h1>
            <div className="vendor-search relative">
              <input
                onChange={(event) => {
                  setSearchItem(event.target.value);
                }}
                id="searchValue"
                className="border-gray-200 focus:border-green-500 rounded-full focus:ring-0 py-1 px-1 md:px-2"
                type="text"
                placeholder="Search a vendor"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 mr-2 my-1 rounded-md bg-white"
              >
                <AiOutlineSearch className="md:h-6 md:w-6 w-5 h-5 primary-color" />
              </button>
            </div>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-8">
            {vendors
              .filter((vendor) => {
                if (searchItem == "") {
                  return vendor;
                } else if (
                  vendor.name
                    .toLowerCase()
                    .includes(searchItem.toLocaleLowerCase())
                ) {
                  return vendor;
                }
              })
              .map((vendor) => (
                <VendorCard key={vendor._id} vendor={vendor}></VendorCard>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllVendors;

/* export async function getStaticProps() {
  const res = await fetch(`${process.env.MY_APP_DOMAIN}/api/vendors`);
  const vendors = await res.json();
  return {
    props: {
      vendors,
    },
  };
} */

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.MY_APP_DOMAIN}/api/vendors`);
  const vendors = await res.json();
  return {
    props: {
      vendors,
    },
  };
};
