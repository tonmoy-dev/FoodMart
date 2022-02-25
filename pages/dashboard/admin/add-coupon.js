import React from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";

const AddCoupon = () => {
  return (
    <>
      <div className=" bg-gray-100 bg-opacity-70">
        <div className="py-16 mx-5 md:mx-20">
          <h1 className=" text-black font-semibold text-4xl pb-2">
            Add Coupon
          </h1>
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
                      Add Coupon
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <h1 className="text-xl font-semibold">Edit Coupon</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 md:gap-4">
            <div className="col-span-2">
              <div id="status" className="bg-white p-4 shadow rounded-lg mt-4">
                <div className="code pb-4">
                  <h1 className="text-lg font-semibold text-gray-600 mb-4">
                    Code
                  </h1>
                  <input
                    className="w-full border-gray-200 rounded focus:border-gray-200 focus:ring-gray-500"
                    type="text"
                    name="code"
                    id="code"
                    placeholder="qwerty12"
                  />
                </div>
                <h1 className="text-lg font-semibold text-gray-600 mb-4">
                  Type
                </h1>
                <div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white defaultChecked:bg-blue-600 defaultChecked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="type"
                      id="type1"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="type1"
                    >
                      Percentage
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white defaultChecked:bg-blue-600 defaultChecked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="type"
                      id="type2"
                      defaultChecked
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="type2"
                    >
                      Fixed Amount
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white defaultChecked:bg-blue-600 defaultChecked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="type"
                      id="type3"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="type2"
                    >
                      free Shipping
                    </label>
                  </div>
                </div>
                <div className="discount py-4">
                  <h1 className="text-lg font-semibold text-gray-600 mb-4">
                    Discount value
                  </h1>
                  <input
                    className="w-full border-gray-200 rounded focus:border-gray-200 focus:ring-gray-500"
                    type="text"
                    name="discount"
                    id="discount"
                    placeholder="10.20"
                  />
                </div>
                <div className="limit">
                  <h1 className="text-lg font-semibold text-gray-600 mb-4">
                    Useage Limit
                  </h1>
                  <input
                    className="w-full border-gray-200 rounded focus:border-gray-200 focus:ring-gray-500"
                    type="text"
                    name="limit"
                    id="limit"
                    value="100"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div id="status" className="bg-white p-4 shadow rounded-lg mt-4">
                <h1 className="text-lg font-semibold text-gray-600 mb-4 border-b">
                  Status
                </h1>
                <div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white defaultChecked:bg-blue-600 defaultChecked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="flexRadioDefault1"
                    >
                      Enabled
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white defaultChecked:bg-blue-600 defaultChecked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      defaultChecked
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="flexRadioDefault2"
                    >
                      Disabled
                    </label>
                  </div>
                </div>
              </div>
              <div
                id="schedule"
                className="bg-white shadow mt-4 p-4 rounded-lg"
              >
                <h1 className="text-lg font-semibold text-gray-600 mb-4 border-b">
                  Schedule
                </h1>
                <p className="mb-4">
                  Use these settings to limit the coupon expiration date.
                </p>
                <div className="datePicker">
                  <div className="flex flex-col mb-4 gap-y-2">
                    <label htmlFor="start">Starting Date</label>
                    <input
                      className="w-full border-gray-200 rounded focus:border-gray-200 focus:ring-gray-500"
                      type="date"
                      name="start"
                      id="start"
                    />
                  </div>
                  <div className="flex flex-col mb-4 gap-y-2">
                    <label htmlFor="start">Starting Date</label>
                    <input
                      className="w-full border-gray-200 rounded focus:border-gray-200 focus:ring-gray-500"
                      type="date"
                      name="end"
                      id="end"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-check mb-2">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white defaultChecked:bg-blue-600 defaultChecked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="type"
              id="type3"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="type2"
            >
              free Shipping
            </label>
          </div>
        </div>
        <div className="discount py-4">
          <h1 className="text-lg font-semibold text-green-500 mb-4">
            Discount value
          </h1>
          <input
            className="w-full border-gray-200 rounded focus:border-gray-200 focus:ring-gray-500"
            type="text"
            name="discount"
            id="discount"
            placeholder="10.20"
          />
        </div>
        <div className="limit">
          <h1 className="text-lg font-semibold text-green-500 mb-4">
            Useage Limit
          </h1>
          <input
            className="w-full border-gray-200 rounded focus:border-gray-200 focus:ring-gray-500"
            type="text"
            name="limit"
            id="limit"
            value="100"
          />
        </div>
      </div>
      <div className="">
        <div id="status" className="bg-white p-4 shadow rounded-lg mt-4">
          <h1 className="text-lg font-semibold text-green-500 mb-4 border-b">
            Status
          </h1>
          <div>
            <div className="form-check mb-2">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white defaultChecked:bg-blue-600 defaultChecked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="flexRadioDefault1"
              >
                Enabled
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white defaultChecked:bg-blue-600 defaultChecked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="flexRadioDefault2"
              >
                Disabled
              </label>
            </div>
          </div>
        </div>
        <div id="schedule" className="bg-white shadow mt-4 p-4 rounded-lg">
          <h1 className="text-lg font-semibold text-green-500 mb-4 border-b">
            Schedule
          </h1>
          <p className="mb-4">
            Use these settings to limit the coupon expiration date.
          </p>
          <div className="datePicker">
            <div className="flex flex-col mb-4 gap-y-2">
              <label htmlFor="start">Starting Date</label>
              <input
                className="w-full border-gray-200 rounded focus:border-gray-200 focus:ring-gray-500"
                type="date"
                name="start"
                id="start"
              />
            </div>
            <div className="flex flex-col mb-4 gap-y-2">
              <label htmlFor="start">Starting Date</label>
              <input
                className="w-full border-gray-200 rounded focus:border-gray-200 focus:ring-gray-500"
                type="date"
                name="end"
                id="end"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCoupon;