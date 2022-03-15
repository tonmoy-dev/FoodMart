import Image from "next/image";
import React from "react";
import { ChevronRightIcon, SearchIcon } from "@heroicons/react/solid";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import Link from "next/link";

const vendorProducts = [
  {
    _id: "62056b0651bf759ee9a55b71",
    product_badge: "Hot",
    product_title: "Black Grapes",
    product_category: "Fruits",
    product_imageUrl: "https://i.ibb.co/jDTnwFq/f-black-grapes-250-gm.webp",
    product_price: "25.50",
    vendor_name: "Sakib All Hasan",
    user_rating: "4",
  },
  {
    _id: "6205b0651bf759ee9a55b71",
    product_badge: "Hot",
    product_title: "Lal Angur (Red Grapes) ",
    product_category: "Fruits",
    product_imageUrl: "https://i.ibb.co/XSZ0F14/f-red-grapes.webp",
    product_price: "25.50",
    vendor_name: "Nature Food",
    user_rating: "5",
  },
  {
    _id: "62056b0651bf59ee9a55b71",
    product_badge: "Hot",
    product_title: "Narikel (Coconut)",
    product_category: "Fruits",
    product_imageUrl: "https://i.ibb.co/6w2jdkz/f-narikel-coconut-1-pcs.webp",
    product_price: "25.50",
    vendor_name: "Nature Food",
    user_rating: "4",
  },
  {
    _id: "62056b0651bf759ee9a5b71",
    product_badge: "Hot",
    product_title: "Sour Jujube (Tok Boroi)",
    product_category: "Fruits",
    product_imageUrl:
      "https://i.ibb.co/WttprKM/f-sour-jujube-tok-boroi-500-gm.webp",
    product_price: "25.50",
    vendor_name: "Nature Food",
    user_rating: "4",
  },
];

const vendorProfile = () => {
  return (
    <div>
      <style>
        {`
            .vendor-cover{
                height:300px;
                width:100%;
           background: url('https://i.ibb.co/g69VWkW/photo-1605447813584-26aeb3f8e6ae.jpg');
               background-position: center;
                background-repeat: no-repeat;
                background-size:cover;
            }
            .profile-pic{
                border:5px solid #f1f1f1;
                width:160px;
                height:160px;
            }
            `}
      </style>
      {/*top banner dtart*/}
      <div className="head-banner">
        <div className="container mx-auto">
          <div className="banner-inner flex flex-col justify-center items-center">
            <h1 className="banner-title font-bold text-4xl text-gray-900 mb-4">
              <span className="">Vendor Profile</span>
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
                      vendor-profile
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/*top banner end */}

      <div className="container mx-auto mb-8">
        <div id="profile-wrapper" className="shadow pb-4 bg-gray-100">
          <div className="relative">
            <div className="vendor-cover mt-16 rounded-t-lg"></div>
            <div className="text-center shadow-lg profile-pic mx-auto rounded-full relative -mt-16">
              <Image
                className="rounded-full"
                src="https://i.ibb.co/5BTm8d4/photo-profil-301783868.jpg"
                alt=""
                height={160}
                width={160}
              />
            </div>
          </div>
          <div id="vendor-info" className="mt-4 flex justify-center">
            <div className="text-center">
              <h1 className="text-xl mb-4">Mr. Sakib All Hasan</h1>
              <h1 className="md:text-3xl text-2xl my-4 font-semibold">
                Daily Super Shop
              </h1>
              <p>Purbo Shewrapara, Dhaka, Dhaka, Dhaka, Bangladesh</p>
              <div className="flex mt-4 gap-x-1.5 justify-center">
                <a href="">
                  {" "}
                  <FaFacebookSquare className="w-6 h-6 text-blue-500" />{" "}
                </a>
                <a href="">
                  {" "}
                  <FaTwitterSquare className="w-6 h-6 text-blue-400" />{" "}
                </a>
                <a href="">
                  {" "}
                  <FaLinkedin className="w-6 h-6 text-gray-500" />{" "}
                </a>
                <a href="">
                  {" "}
                  <FaInstagram className="w-6 h-6 text-red-500" />{" "}
                </a>
              </div>
              <button className="border rounded-full mt-4  text-white px-4 py-1 bg-green-500 hover:bg-green-400">
                Contact
              </button>
            </div>
          </div>
        </div>
        {/* search bar start */}
        <div className="flex flex-row justify-between items-center rounded pt-4 mx-4 md:mx-0 lg:mx-0">
          <h1 className="text-gray-700 font-semibold ml-1">
            Products showing:
            <span className="text-green-500"> {vendorProducts.length}</span>
          </h1>
          <div className="vendor-search relative">
            <input
              className="border-gray-200 focus:border-green-500 rounded-full focus:ring-0"
              type="text"
              placeholder="Search a vendor"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 mr-2 my-1 rounded-lg bg-white"
            >
              <SearchIcon className="h-6 w-6 text-green-500" />
            </button>
          </div>
        </div>
        {/* search bar end */}
        {/* vendor product list start */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 mx-4 md:mx-0 lg:mx-0">
          {vendorProducts.map((venProduct) => (
            <div key={venProduct._id}>
              <div className="w-full h-full bg-white rounded-lg border">
                <div className="relative">
                  <Image
                    width={250}
                    height={250}
                    layout="responsive"
                    src={venProduct.product_imageUrl}
                    alt=""
                  ></Image>
                  <span className="absolute top-0 left-0 z-10 px-2 py-1  bg-red-500 text-white rounded-l-none mt-2 rounded-full font-semibold uppercase tracking-wide text-xs">
                    {venProduct.product_badge}
                  </span>
                </div>
                <div className="p-5">
                  <p>{venProduct.product_category}</p>
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {venProduct.product_title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Debitis, ex!
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center py-1 px-4 text-sm font-medium text-center text-white bg-green-500 rounded-full hover:bg-green-800 focus:ring-4 focus:ring-green-300"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* vendor product list end */}
      </div>
    </div>
  );
};

export default vendorProfile;
