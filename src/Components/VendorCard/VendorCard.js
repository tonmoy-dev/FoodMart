import {
    ArrowSmRightIcon,
    ChevronRightIcon,
    LocationMarkerIcon,
    PhoneIcon,
    StarIcon,
  } from "@heroicons/react/solid";
  import Link from "next/link";
  import React, { useState } from "react";
  import { AiOutlineSearch } from "react-icons/ai";
  import { FaCartPlus } from "react-icons/fa";

const VendorCard = ({vendor}) => {
    return (
        <div
                vendor={vendor}
                key={vendor.name}
                className="mx-auto bg-white rounded-lg  border-gray-200 border shadow"
              >
                <div className="relative">
                  <a href="#">
                    <img
                      className="rounded-t-lg mx-auto w-full vendor-banner"
                      src={vendor.banner}
                      alt="logo"
                    />
                  </a>
                  <div className="absolute bg-white shadow-lg rounded-full bottom-0 w-16 h-16">
                    <img
                      className="rounded-full p-1"
                      src={vendor.icon}
                      alt="icon"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <div>
                    <a href="#">
                      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
                        {vendor.name}{" "}
                        <span className="text-sm font-normal">
                          ( Since {vendor.subtitle} )
                        </span>
                      </h5>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <StarIcon className="h-5 w-5 text-yellow-300" />
                    <StarIcon className="h-5 w-5 text-yellow-300" />
                    <StarIcon className="h-5 w-5 text-yellow-300" />
                    <StarIcon className="h-5 w-5 text-yellow-300" />
                    <StarIcon className="h-5 w-5 text-yellow-300" />
                  </div>
                  <div className="flex items-center justify-between">
                    <LocationMarkerIcon className="mr-2 h-5 w-5 primary-color" />
                    <p className="my-2 w-full text-gray-500 ">
                      Address: {vendor.address}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <PhoneIcon className="mr-2 h-5 w-5 primary-color" />
                    <p className="w-full text-gray-500 ">
                      Call Us: {vendor.contact}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="">
                      <p className="flex items-center py-2 primary-color rounded-md">
                        <FaCartPlus />
                        <span className="ml-2 text-gray-500">
                          Products: {vendor.products_added}
                        </span>
                      </p>
                    </div>
                    <Link href={`/vendors/${vendor.name}`}>
                    <a
                      className="inline-flex items-center p-2 text-sm font-medium text-center primary-bg-color shadow rounded-full hover:bg-green-700 focus:ring-4 focus:ring-blue-300 "
                    >
                      <ArrowSmRightIcon className="h-5 w-5 text-white" />
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
    );
};

export default VendorCard;