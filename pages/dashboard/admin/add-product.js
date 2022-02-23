import React, { useState } from "react";

const AddProduct = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productVendor, setProductVendor] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [productImage, setProductImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!image) {
    //   return;
    // }
    const formData = new FormData();
    formData.append("productTitle", productTitle);
    formData.append("productCategory", productCategory);
    formData.append("productPrice", productPrice);
    formData.append("productStock", productStock);
    formData.append("productVendor", productVendor);
    formData.append("productDetails", productDetails);
    formData.append("productImage", productImage);

    fetch("http://localhost:5000/products", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
      }) 
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-gray-200 py-5">
      <div>
        <div className="flex flex-wrap items-center justify-center ">
          <div className="flex justify-center items-center  w-full ">
            <div className="w-full md:w-2/4 bg-white p-6">
              <div className="">
                <h1 className="text-gray-700 text-center font-bold text-4xl ">
                  Add New Product
                </h1>
              </div>
              <form
                onSubmit={handleSubmit}
                className="pt-10"
                action="/"
                method="post"
              >
                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    htmlFor="product_title"
                  >
                    Product Title:
                  </label>
                  <input
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                    type="text"
                    name="product_title"
                    id="product_title"
                    onChange={(e) => setProductTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    htmlFor="product_category"
                  >
                    Product Category:
                  </label>
                  <input
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                    type="text"
                    name="product_category"
                    id="product_category"
                    onChange={(e) => setProductCategory(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {" "}
                    Add Product image{" "}
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={(e) => setProductImage(e.target.files[0])}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    htmlFor="product_price"
                  >
                    Product Price:
                  </label>
                  <input
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                    type="text"
                    name="text"
                    id="product_price"
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    htmlFor="product_stock"
                  >
                    Product Stock:
                  </label>
                  <input
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                    type="text"
                    name="text"
                    id="product_stock"
                    onChange={(e) => setProductStock(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    htmlFor="vendor_name"
                  >
                    Vendor Name:
                  </label>
                  <input
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                    type="text"
                    name="text"
                    id="vendor_name"
                    onChange={(e) => setProductVendor(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    htmlFor="productDetails"
                  >
                    Product Details:
                  </label>
                  <textarea
                    className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                    type="productDetails"
                    name="productDetails"
                    id="productDetails"
                    rows="6"
                    onChange={(e) => setProductDetails(e.target.value)}
                  ></textarea>
                </div>
                <button
                  className="block font-semibold rounded-sm bg-green-500 hover:bg-green-600 text-white uppercase text-lg mx-auto px-12 py-4 "
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
