import React from "react";
const AddProduct = () => {
  return (
    <div className="bg-gray-200 py-5">
      <div>
        <div className="flex flex-wrap items-center justify-center ">
          <div className="flex justify-center items-center  w-full ">
            <div className="lg:w-1/2 w-full bg-white rounded-lg p-8 m-4">
              <div className="">
                <h1 className="text-green-500 text-center  text-2xl font-semibold">
                  Add New Product
                </h1>
              </div>
              <form className="pt-10" action="/" method="post">
                <div className="flex md:flex-row flex-col gap-2">
                  <div className="flex flex-col mb-4 w-full">
                    <label
                      className="mb-2  text-md text-gray-900"
                      htmlFor="product_title"
                    >
                      Product Title:
                    </label>
                    <input
                      className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800 focus:border-green-500  focus:ring-green-500 focus:outline-none"
                      type="text"
                      name="product_title"
                      id="product_title"
                    />
                  </div>
                  <div className="flex flex-col mb-4 w-full">
                    <label
                      className="mb-2  text-md text-gray-900"
                      htmlFor="product_category"
                    >
                      Product Category:
                    </label>
                    <input
                      className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800 focus:border-green-500  focus:ring-green-500 focus:outline-none"
                      type="text"
                      name="product_category"
                      id="product_category"
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-2">
                  <div className="flex flex-col mb-4 w-full">
                    <label
                      className="mb-2  text-md text-gray-900"
                      htmlFor="product_price"
                    >
                      Product Price:
                    </label>
                    <input
                      className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800 focus:border-green-500  focus:ring-green-500 focus:outline-none"
                      type="text"
                      name="text"
                      id="product_price"
                    />
                  </div>
                  <div className="flex flex-col mb-4 w-full">
                    <label
                      className="mb-2  text-md text-gray-900"
                      htmlFor="product_stock"
                    >
                      Product Stock:
                    </label>
                    <input
                      className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800 focus:border-green-500  focus:ring-green-500 focus:outline-none"
                      type="text"
                      name="text"
                      id="product_stock"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-4 w-full">
                  <div className="mb-3">
                    <label className="form-label inline-block mb-2">
                      Upload Product Image
                    </label>
                    <input
                      className="form-control upload block w-full px-3 text-base font-normal text-gray-700 bg-white border border-solid border-gray-400 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none"
                      type="file"
                      id="formFile"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2  text-md text-gray-900"
                    htmlFor="vendor_name"
                  >
                    Vendor Name:
                  </label>
                  <input
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800 focus:border-green-500  focus:ring-green-500 focus:outline-none"
                    type="text"
                    name="text"
                    id="vendor_name"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2  text-md text-gray-900"
                    htmlFor="productDetails"
                  >
                    Product Details:
                  </label>
                  <textarea
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800 focus:border-green-500  focus:ring-green-500 focus:outline-none"
                    type="productDetails"
                    name="productDetails"
                    id="productDetails"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  className="block font-medium rounded-xl bg-green-500 hover:bg-green-600 text-white uppercase text-md px-4 py-2 w-full mx-auto "
                  type="submit"
                >
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
