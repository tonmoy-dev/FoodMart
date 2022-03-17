import {
  ArrowSmRightIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import Pagination from "../../src/Components/Pagination/Pagination";
import axios from "axios";

const AllVendors = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/api/vendors");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProduct = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const vendors = [
    {
      name: "Nature Food",
      icon: "https://i.ibb.co/tqF3ZXP/logo-1.png",
      subtitle: "2012",
      banner: "https://i.ibb.co/gMVdYpM/gettyimages-1212810931-612x612.jpg",
      products_added: "380",
      address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
      contact: "(+91) - 540-025-124553",
      user_rating: "4",
    },
    {
      name: "Red Baron",
      icon: "https://i.ibb.co/qs9nzKT/logo-2.jpg",
      subtitle: "2015",
      banner: "https://i.ibb.co/ZG6HsVt/gettyimages-139468977-612x612.jpg",
      products_added: "280",
      address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
      contact: "(+91) - 540-025-124553",
      user_rating: "4",
    },
    {
      name: "TotinosPizza",
      subtitle: "2012",
      icon: "https://i.ibb.co/QPbwWTH/logo-3.jpg",
      banner: "https://i.ibb.co/JvzCqfD/gettyimages-530743809-612x612.jpg",
      products_added: "380",
      address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
      contact: "(+91) - 540-025-124553",
      user_rating: "4",
    },
    {
      name: "Nature Shop",
      subtitle: "2016",
      banner: "https://i.ibb.co/kQ9bPCf/gettyimages-476803857-612x612.jpg",
      icon: "https://i.ibb.co/2Zs1BsX/logo-4.jpg",
      products_added: "500",
      address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
      contact: "(+91) - 540-025-124553",
      user_rating: "4",
    },
    {
      name: "Red Baron 2",
      icon: "https://i.ibb.co/qs9nzKT/logo-2.jpg",
      subtitle: "2015",
      banner: "https://i.ibb.co/ZG6HsVt/gettyimages-139468977-612x612.jpg",
      products_added: "280",
      address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
      contact: "(+91) - 540-025-124553",
      user_rating: "4",
    },
    {
      name: "Nature Foods 5",
      subtitle: "2012",
      banner: "https://i.ibb.co/94sfvKy/gettyimages-532270528-612x612.jpg",
      icon: "https://i.ibb.co/NKDTxKR/wcfmmp-blue.png",
      products_added: "380",
      address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
      contact: "(+91) - 540-025-124553",
      user_rating: "4",
    },
    {
      name: "Nature Foods 6",
      subtitle: "2012",
      banner: "https://i.ibb.co/MRX0hjs/gettyimages-463246795-612x612.jpg",
      icon: "https://i.ibb.co/47cj8m4/logo-6.jpg",
      products_added: "380",
      address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
      contact: "(+91) - 540-025-124553",
      user_rating: "4",
    },
    {
      name: "TotinosPizza 2",
      subtitle: "2012",
      icon: "https://i.ibb.co/QPbwWTH/logo-3.jpg",
      banner: "https://i.ibb.co/JvzCqfD/gettyimages-530743809-612x612.jpg",
      products_added: "380",
      address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
      contact: "(+91) - 540-025-124553",
      user_rating: "4",
    },
  ];

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <div className="head-banner">
        <div className="container mx-auto">
          <div className="banner-inner flex flex-col justify-center items-center">
            <h1 className="banner-title font-bold text-4xl text-gray-900 mb-4">
              <span className="">Vendor List</span>
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
                      Vendors
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3">
          <div className="flex flex-row justify-between items-center rounded pt-3">
            <h1 className="text-gray-700 font-semibold ml-1">
              Total vendors showing:{" "}
              <span className="text-green-500">{vendors.length}</span>
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
                <AiOutlineSearch className="h-6 w-6 text-green-500" />
              </button>
            </div>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-8">
            {currentProduct.map((vendor) => (
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
                  {/* <p className="text-sm text-gray-500">Since {vendor.subtitle}</p> */}
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
                    <LocationMarkerIcon className="mr-2 h-5 w-5 text-green-500" />
                    <p className="my-2 w-full text-gray-500 ">
                      Address: {vendor.address}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <PhoneIcon className="mr-2 h-5 w-5 text-green-500" />
                    <p className="w-full text-gray-500 ">
                      Call Us: {vendor.contact}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="">
                      <p className="flex items-center py-2 text-green-600 rounded-md">
                        <FaCartPlus />
                        <span className="ml-2 text-gray-500">
                          Products: {vendor.products_added}
                        </span>
                      </p>
                    </div>
                    <Link href="/vendors/vendor-profile">
                      <a className="inline-flex items-center p-2 text-sm font-medium text-center bg-green-500 shadow rounded-full hover:bg-green-700 focus:ring-4 focus:ring-blue-300 ">
                        <ArrowSmRightIcon className="h-5 w-5 text-white" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* pagination */}
          <div className="container mt-2">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
          {/* pagination */}
        </div>
      </div>
    </>
  );
};

export default AllVendors;
