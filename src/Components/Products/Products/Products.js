import Image from "next/image";
import Link from "next/link";
import React from "react";
// import "../../../../styles/AllProducts.module.css";

const Products = ({ data }) => {
  const AllProducts = data;
  return (
    <div className="py-5">
      <div className="flex p-2 mx-4 mb-2 rounded-lg flex-row justify-between items-center shadow">
        <h2 className="text-green-700 text-lg">
          <span className="font-semibold">29</span> Products{" "}
        </h2>

        <div>
          <form action="">
            <select
              className="mx-2 border-none shadow-sm"
              name="Sort by"
              id="cars"
            >
              <option selected disabled>
                Show
              </option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
            </select>
            <select
              className="mx-2 border-none shadow-sm"
              name="cars"
              id="cars"
            >
              <option selected disabled>
                Category
              </option>
              <option value="snacks">snacks</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </form>
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-center align-middle product-grid-style">
        {AllProducts.map((product) => {
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
            <div key={_id} className="">
              <div className="bg-white relative border-gray-200 border rounded-lg hover:drop-shadow-lg">
                <span className="absolute top-0 z-10 px-2 py-1  bg-red-500 text-white rounded-l-none mt-2 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {product_badge}
                </span>
                {product_badge.toLowerCase() == "sale" && (
                  <span className="absolute top-0 z-10 px-2 py-1  bg-pink-500 text-white rounded-l-none mt-2 rounded-full font-semibold uppercase tracking-wide text-xs">
                    {product_badge}
                  </span>
                )}
                {product_badge.toLowerCase() == "new" && (
                  <span className="absolute top-0 z-10 px-2 py-1  bg-blue-500 text-white rounded-l-none mt-2 rounded-full font-semibold uppercase tracking-wide text-xs">
                    {product_badge}
                  </span>
                )}
                <Link href={`/products/${_id}`}>
                  <a>
                    {" "}
                    <Image
                      className="p-8 rounded-t-lg"
                      src={product_imageUrl.thumbnail}
                      alt="product image"
                      height="180"
                      width="200"
                      layout="responsive"
                    />
                  </a>
                </Link>
                <div className="px-2 pb-5 pt-2">
                  <span className="text-xs font-bold text-slate-400 hover:text-sky-400 ">
                    {product_category}
                  </span>
                  <a href="./">
                    <h3 className="text-md font-semibold tracking-tight text-gray-900">
                      {product_title.slice(0, 18)}..
                    </h3>
                  </a>
                  <ul className="flex items-center my-2">
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

                  <div className=" mb-2 text-xs font-semibold">
                    <span>By </span>
                    <span className="text-green-600">{vendor_name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-dark">
                        ${product_price}
                      </span>
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
      </div>
    </div>
  );
};

export default Products;
