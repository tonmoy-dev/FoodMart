import React from "react";

const AddCoupon = () => {
  return (
    <div>
      <div className="container mx-auto bg-gray-100 p-4">
      <h1 className="text-xl font-semibold">Edit Coupon</h1>
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
                  Coupon
                </span>
              </div>
            </li>
          </ol>
        </nav>
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
              <h1 className="text-lg font-semibold text-gray-600 mb-4">Type</h1>
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
            <div id="schedule" className="bg-white shadow mt-4 p-4 rounded-lg">
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
      </div>
    </div>
  );
};

export default AddCoupon;
