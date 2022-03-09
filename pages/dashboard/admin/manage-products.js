import {
  ChevronRightIcon,
  DotsVerticalIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import DashAdminMenu from "../DashMenu/DashAdminMenu";

const ManageProducts = () => {
  //   console.log(products);
  const [allProducts, setAllProducts] = useState([]);
  const [control, setConrol] = useState(false);

  useEffect(() => {
    setConrol(true);
    axios.get("/api/products").then((response) => {
      setAllProducts(response.data);
    });
  }, [control]);

  const handleDelete = (id) => {
    axios
      .delete(`/api/products/productDetails?product_id=${id}`, {})
      .then((response) => {
        console.log(response);
        if (response.data.deletedCount) {
          setConrol(!control);
          swal("Good job!", "Deleted", "success");
        } else {
          setConrol(false);
        }
      });
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
      <div id="dashboard-container" className="h-screen bg-gray-100">
        {/* top bar */}
        <DashAdminMenu />

        {/* main content */}
        <div className="   ">
          <style jsx>{`
            .dropdown:hover .dropdown-menu {
              display: block;
            }
            .image-container {
              width: 50px;
              height: 50px;
            }
          `}</style>
          <div className="py-16 mx-5 md:mx-20">
            <h2 className=" text-black font-semibold text-4xl pb-2">
              Manage Products
            </h2>
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
                        Manage Products
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
            <h1 className="text-xl font-semibold">Manage Products</h1>
            <div id="productTable">
              <div className="flex flex-col mt-4 md:block">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full">
                        <thead className="bg-gray-100 border">
                          <tr>
                            <th
                              scope="col"
                              className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Product
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Stock
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Category
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-sm font-medium tracking-wider text-center text-gray-700 uppercase "
                            >
                              Manage
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {allProducts.map((product) => (
                            <tr
                              key={product._id}
                              className="border-b odd:bg-white even:bg-gray-50"
                            >
                              <td className="flex flex-row gap-2 items-center py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                <input
                                  id="checkbox"
                                  type="checkbox"
                                  className="w-4 h-4"
                                />
                                <div className="border image-container">
                                  <Image
                                    width={50}
                                    height={50}
                                    src={product.product_imageUrl.thumbnail}
                                    alt="image"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <h1>{product.product_title}</h1>
                                  <h1 className="text-gray-500 font-light">
                                    ID:{product._id}
                                  </h1>
                                </div>
                              </td>
                              <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                $ <span>{product.product_price}</span>
                              </td>
                              <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                <span> {product.product_stock} in stock</span>
                              </td>
                              <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                <span>{product.product_category}</span>
                              </td>
                              <td className="py-4 text-sm text-gray-500 whitespace-nowrap">
                                <div className="dropdown relative w-6 mx-auto">
                                  <div className="dropdown">
                                    <DotsVerticalIcon className="h-5 w-6 text-black mx-auto" />
                                  </div>
                                  <ul className="dropdown-menu absolute bottom-0 right-4 z-50 hidden text-gray-700 pt-1">
                                    <li className="">
                                      <a
                                        className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-6 block whitespace-no-wrap"
                                        href="#"
                                      >
                                        Edit
                                      </a>
                                    </li>
                                    <li className="">
                                      <a
                                        className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-6 block whitespace-no-wrap"
                                        href="#"
                                        onClick={() =>
                                          handleDelete(product._id)
                                        }
                                      >
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProducts;
