import { HeartIcon } from "@heroicons/react/solid";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const SingleProduct = () => {
  const images = [
    {
      original:
        "https://i.ibb.co/NZ3M6Xy/25-525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg",
      thumbnail:
        "https://i.ibb.co/28dHMTv/25-525c2823-683a-445e-b187-6fe7ca3f5a8e-159x202.jpg",
    },
    {
      original:
        "https://i.ibb.co/DLf4KB6/1-da8f6f9f-7e5f-4601-ab50-8cfde5005293.jpg",
      thumbnail:
        "https://i.ibb.co/KK4mDdw/1-da8f6f9f-7e5f-4601-ab50-8cfde5005293-159x202.jpg",
    },
    {
      original: "https://i.ibb.co/xLprhyw/18-1024x1024.jpg",
      thumbnail: "https://i.ibb.co/b1G5N7h/18-159x202.jpg",
    },
    {
      original:
        "https://i.ibb.co/NZ3M6Xy/25-525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg",
      thumbnail:
        "https://i.ibb.co/28dHMTv/25-525c2823-683a-445e-b187-6fe7ca3f5a8e-159x202.jpg",
    },
    {
      original:
        "https://i.ibb.co/DLf4KB6/1-da8f6f9f-7e5f-4601-ab50-8cfde5005293.jpg",
      thumbnail:
        "https://i.ibb.co/KK4mDdw/1-da8f6f9f-7e5f-4601-ab50-8cfde5005293-159x202.jpg",
    },
  ];
  return (
    <div>
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
                  className="ml-1 text-sm font-sm text-green-500 hover:text-orange-500 md:ml-2"
                >
                  Products
                </a>
              </div>
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
                  Product Details
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-2">
              <div
                id="GalleryAndDetailsContainer"
                className="grid lg:grid-cols-2 grid-cols-1 gap-4"
              >
                <div className="pt-2" id="productGallry">
                  <ImageGallery
                    showPlayButton={false}
                    showFullscreenButton={true}
                    showNav={false}
                    items={images}
                    className="myclass"
                  />
                </div>
                <div id="productDetails" className="lg:px-0 md:px-0 px-4">
                  <h2 className="text-2xl text-green-500 font-semibold">
                    Fresh Organic Fruit(50gm)
                  </h2>
                  <div id="rating" className="py-2">
                    ***** <span className="text-gray-500">(33 reviews)</span>
                  </div>
                  <h2 className="text-lg pt-4 font-semibold text-gray-700">
                    Availability :{" "}
                    <span className="text-sm text-orange-500">In Stock</span>
                  </h2>
                  <div id="price">
                    <h2 className="text-2xl font-bold text-green-500 py-4">
                      $ <span>38</span>
                    </h2>
                  </div>
                  <div id="details">
                    <p className="text-justify text-base">
                      Hurry up! only{" "}
                      <span className="text-orange-500 font-semibold">10</span>{" "}
                      products left in stock! Lorem Ipsum is simply dummy text
                      of the printing and typesetting industry. Lorem Ipsum has
                      been the industry standard dummy text ever since the
                      1500s, when an unknown printer took a galley.
                    </p>
                  </div>
                  <div
                    className="py-4 flex flex-row items-center gap-2"
                    id="size"
                  >
                    <h2 className="text-lg text-gray-700 font-semibold capitalize">
                      size :
                    </h2>
                    <button className="bg-white  py-2 px-1 text-sm text-green-500 hover:bg-green-500 hover:text-white rounded">
                      50gm
                    </button>
                    <button className="bg-white  py-2 px-1 text-sm text-green-500 hover:bg-green-500 hover:text-white rounded">
                      75gm
                    </button>
                    <button className="bg-white  py-2 px-1 text-sm text-green-500 hover:bg-green-500 hover:text-white rounded">
                      100gm
                    </button>
                    <button className="bg-white  py-2 px-1 text-sm text-green-500 hover:bg-green-500 hover:text-white rounded">
                      150gm
                    </button>
                  </div>
                  <div id="quantity" className="flex flex-row items-center">
                    <h2 className="text-lg pr-4 text-gray-700 font-semibold capitalize">
                      quantity :{" "}
                    </h2>
                    <button className="minus border hover:bg-green-500 hover:text-white bg-white shadow px-4 py-1">
                      -
                    </button>
                    <div className="quantityCount border shadow bg-white px-4 py-1">
                      0
                    </div>
                    <button className="plus border hover:bg-green-500 hover:text-white bg-white shadow px-4 py-1">
                      +
                    </button>
                  </div>
                  <div className="flex items-center flex-row gap-2 py-6">
                    <button className="bg-green-500 text-white font-base px-2 py-1 hover:bg-green-600">
                      {" "}
                      <HeartIcon className="h-6 w-6 text-white" />
                    </button>
                    <button className="bg-green-500 text-white font-base px-2 py-1 hover:bg-green-600">
                      Add to cart
                    </button>
                    <button className="bg-green-500 text-white font-base px-2 py-1 hover:bg-green-600">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
              <div id="alldetails">
                
              </div>
              {/* tab finish */}
            </div>
            <div className="bg-gray-100">
              <h2 className="text-xl text-gray-700 text-center">Category</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
