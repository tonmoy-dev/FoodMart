import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeartIcon, RefreshIcon, EyeIcon } from "@heroicons/react/outline";

const BestSells = ({ products }) => {
  const allProducts = products.slice(9, 13);
  <style jsx>
    {`
      .dbs-style {
        background-color: red;
      }
    `}
  </style>;

  return (
    <div className="container mx-auto pt-10 px-4 md:px-0">
      <div className="flex justify-between pb-5">
        <div>
          <h1 className="text-3xl font-bold mb-4">Daily Best Sells</h1>
        </div>
        <div>
          <p className=" inline-block ">Featured</p>
          <p className=" inline-block px-2 ">Popular</p>
          <p className=" inline-block  ">New added</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div>
          <div
            style={{
              backgroundImage: `url('https://i.ibb.co/cc0jgvk/banner-4.png')`,
              height: "26rem",
            }}
            className="dbs-style rounded-lg border-1"
          >
            <div className="py-10 px-10 ">
              <p className="text-3xl font-semibold text-gray-700">
                Bring nature{" "}
                <span>
                  <br />
                </span>{" "}
                into your{" "}
                <span>
                  <br />
                </span>{" "}
                home
              </p>
            </div>
            <div className=" px-10  ">
              <button className="bg-green-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                See more 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 pr-2 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {allProducts.map((product) => {
          const {
            _id,
            product_badge,
            product_title,
            product_category,
            product_imageUrl,
            vendor_name,
            user_rating,
            product_price,
          } = product;
          return (
            <div key={_id}>
              <div className="relative product-card bg-white border-gray-300 border rounded-lg hover:drop-shadow-lg">
              <div className="z-50 w-full absolute left-0 right-0 bottom-60">
                  <div className="product-card-overlay transition flex justify-center items-center h-full gap-3">
                    <HeartIcon className="w-8 h-6 bg-green-500 hover:bg-green-600 hover:text-white rounded text-white" />
                    <Link href={`/products/${_id}`}>
                      <a>
                        <EyeIcon className="w-8 h-6 bg-green-500 hover:bg-green-600 hover:text-white rounded text-white" />
                      </a>
                    </Link>
                    <RefreshIcon className="w-8 h-6 bg-green-500 hover:bg-green-600 hover:text-white rounded text-white" />
                  </div>
                </div>
              <span className="absolute top-0 z-10 px-2 py-1  bg-red-500 text-white rounded-l-none mt-2 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {product_badge}
                </span>
                {product_badge == "sale" && (
                  <span className="absolute top-0 z-10 px-2 py-1  bg-pink-500 text-white rounded-l-none mt-2 rounded-full font-semibold uppercase tracking-wide text-xs">
                    {product_badge}
                  </span>
                )}
                {product_badge  == "new" && (
                  <span className="absolute top-0 z-10 px-2 py-1  bg-blue-500 text-white rounded-l-none mt-2 rounded-full font-semibold uppercase tracking-wide text-xs">
                    {product_badge}
                  </span>
                )}
                <a href="./">
                  <Image
                    className="p-8 rounded-t-lg"
                    src={product_imageUrl}
                    alt="product image"
                    height="250"
                    width="250"
                    layout="responsive"
                  />
                </a>
                <div className="px-5 pb-5">
                  <span className="text-xs  font-bold text-slate-400 hover:text-sky-400 ">
                    {product_category}
                  </span>
                  <a href="./">
                    <h3 className="md:text-lg font-semibold tracking-tight text-gray-900 dark:text-black">
                      {product_title.slice(0, 20)}..
                    </h3>
                  </a>
                  <ul className="flex items-center mt-2.5 mb-1">
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-300 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-300 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-300 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-300 mr-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>

                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        className="w-4 text-yellow-300"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                        ></path>
                      </svg>
                    </li>
                    <span className=" text-blue-800 text-xs font-semibold mr-2  py-0.5 rounded dark:bg-white dark:text-black ml-1">
                      ({user_rating})
                    </span>
                  </ul>

                  <div className="mb-2 text-xs font-semibold">
                    <span>By </span>
                    <span className="text-green-600">{vendor_name}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-500 dark:text-dark">
                        ${product_price}
                      </span>
                      {/* <span className="text-base line-through font-bold text-slate-400 hover:text-sky-400 pl-2">$35.50</span> */}
                    </div>
                    <a
                    className="text-green-500 bg-green-100 hover:bg-green-500 focus:ring-0 font-medium rounded text-sm px-2 py-1.5 text-center hover:text-white"
                  >
                    <Link href="/checkout">
                    Add to cart
                    </Link>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};

export default BestSells;
