import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import swal from "sweetalert";
import DashAdminMenu from "../DashMenu/DashAdminMenu";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({});
  const [product_imageUrl, setProduct_imageUrl] = useState({});

  const handleImageUrl = (e) => {
    const newProductImageUrl = { ...product_imageUrl };
    newProductImageUrl[e.target.name] = e.target.value;
    setProduct_imageUrl(newProductImageUrl);
  };

  const handleInputOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newAddData = { ...addProduct };
    newAddData[field] = value;
    setAddProduct(newAddData);
  };

  console.log(addProduct);

  const handleSubmission = async (e) => {
    e.preventDefault();
    const newAddProduct = { ...addProduct };
    newAddProduct.product_imageUrl = product_imageUrl;
    setAddProduct(newAddProduct);
    // post blog data
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addProduct),
    });
    const data = await res.json();
    if (data.insertedId) {
      swal("Good job!", "SUBMITED", "success");
      // router.push('/blog');
      // const newComments = comments;
      // newComments.push(addCommentData);
      // setComments(newComments);
      e.target.reset();
    }
  };

  return (

    <>
      <style jsx>
        {`
          ::-webkit-scrollbar {
            width: 1px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: darkcyan;
          }
        `}
      </style>
      <div id="dashboard-container" className=" bg-gray-100">
        {/* top bar */}
        <DashAdminMenu />



        {/* main content */}

        <div id="main-content" className="pt-24 pr-8 pl-8 lg:pl-80">
          <div className="">

            <div className="py-16 mx-5 md:mx-20">
              <h1 className=" text-black font-semibold text-4xl pb-2">Add Product</h1>
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
                          Add Product
                        </span>
                      </div>
                    </li>
                  </ol>
                </nav>
              </div>
              <h1 className="text-xl pb-3 font-semibold">Add New Product</h1>
              <div className="md:flex flex-wrap items-center justify-center ">
                <div className="md:w-1/2 bg-white rounded-lg p-8 md:m-4">
                  <div className="">
                    <h1 className="text-gray-700 text-center font-semibold text-3xl ">
                      Add Product
                    </h1>
                  </div>
                  <form onSubmit={handleSubmission} className="pt-10">
                    <div className="flex flex-col mb-2">
                      <label
                        className="font-semibold text-lg text-gray-700"
                        htmlFor="product_title"
                      >
                        Product bage:
                      </label>
                      <input
                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                        required
                        type="text"
                        name="product_badge"
                        id="product_badge"
                        onBlur={handleInputOnBlur}
                      />
                    </div>

                    <div className="flex flex-col mb-2">
                      <label
                        className="font-semibold text-lg text-gray-700"
                        htmlFor="product_title"
                      >
                        Product Title:
                      </label>
                      <input
                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                        required
                        type="text"
                        name="product_title"
                        id="product_title"
                        onBlur={handleInputOnBlur}
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label
                        className="font-semibold text-lg text-gray-700"
                        htmlFor="product_category"
                      >
                        Product Category:
                      </label>
                      <input
                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                        required
                        type="text"
                        name="product_category"
                        id="product_category"
                        onBlur={handleInputOnBlur}
                      />
                    </div>

                    <div className="flex flex-col mb-2">
                      <label
                        className="font-semibold text-lg text-gray-700"
                        htmlFor="product_category"
                      >
                        Thumbnail:
                      </label>
                      <input
                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                        required
                        type="text"
                        name="thumbnail"
                        id="thumbnail"
                        onBlur={handleImageUrl}
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label
                        className="font-semibold text-lg text-gray-700"
                        htmlFor="product_category"
                      >
                        Image 1:
                      </label>
                      <input
                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                        required
                        type="text"
                        name="img1"
                        id="img1"
                        onBlur={handleImageUrl}
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label
                        className="font-semibold text-lg text-gray-700"
                        htmlFor="product_category"
                      >
                        Image 2:
                      </label>
                      <input
                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                        required
                        type="text"
                        name="img2"
                        id="img2"
                        onBlur={handleImageUrl}
                      />
                    </div>

                    <div className="flex flex-col mb-2">
                      <label
                        className="font-semibold text-lg text-gray-700"
                        htmlFor="product_price"
                      >
                        Product Price:
                      </label>
                      <input
                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                        required
                        type="number"
                        name="product_price"
                        id="product_price"
                        onBlur={handleInputOnBlur}
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label
                        className="font-semibold text-lg text-gray-700"
                        htmlFor="product_stock"
                      >
                        Product Stock:
                      </label>
                      <input
                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                        required
                        type="number"
                        name="product_stock"
                        id="product_stock"
                        onBlur={handleInputOnBlur}
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label
                        className="font-semibold text-lg text-gray-700"
                        htmlFor="vendor_name"
                      >
                        Vendor Name:
                      </label>
                      <input
                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                        required
                        type="text"
                        name="vendor_name"
                        id="vendor_name"
                        onBlur={handleInputOnBlur}
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label
                        className="font-semibold text-lg text-gray-700"
                        htmlFor="vendor_name"
                      >
                        User Rating:
                      </label>
                      <input
                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                        required
                        type="number"
                        name="user_rating"
                        id="user_rating"
                        onBlur={handleInputOnBlur}
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label
                        className="font-semibold text-lg text-gray-700"
                        htmlFor="vendor_name"
                      >
                        Rating Count:
                      </label>
                      <input
                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                        required
                        type="number"
                        name="rating_count"
                        id="rating_count"
                        onBlur={handleInputOnBlur}
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <label
                        className="font-semibold text-lg text-gray-700"
                        htmlFor="productDetails"
                      >
                        Product Details:
                      </label>
                      <textarea
                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                        type="productDetails"
                        name="produc_Details"
                        id="produc_Details"
                        rows="6"
                        onBlur={handleInputOnBlur}
                      ></textarea>
                    </div>
                    <div className="pt-3">
                      <button
                        className="w-full block font-semibold rounded-lg bg-green-500 hover:bg-green-600 text-white uppercase text-lg mx-auto px-4 py-2"
                        type="submit"
                      >
                        Add Product
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>




    </>

  );
};

export default AddProduct;
