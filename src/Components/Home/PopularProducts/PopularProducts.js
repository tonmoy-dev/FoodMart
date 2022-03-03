import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { HeartIcon, RefreshIcon, EyeIcon } from "@heroicons/react/outline";
import swal from "sweetalert";

const productTest = [
    {
        name: "fruit",
        info: "This is a fruit",
        category: "fff",
    },
];

const PopularProducts = ({ products }) => {
    const [control, setControl] = useState(false);

    const handleAddCompare = async (id) => {
        const compareProduct = products.filter((product) => product._id === id);

        axios.post("/api/compare", { compareProduct }).then((response) => {
            if (response.data.insertedId) {
                setControl(!control);
                swal("WOW!!! Compare product add successfully");
            } else {
                setControl(false);
            }
        });
    };
    const allProducts = products.slice(0, 5);
    return (
        <div className="container mx-auto px-4 md:px-0 py-10">
            <div className="flex justify-between pb-5">
                <div>
                    <h1 className="text-3xl font-bold mb-4">
                        Popular Products
                    </h1>
                </div>
                <div>
                    <p className=" inline-block ">All</p>
                    <p className=" inline-block px-2 ">Milk & Dairies</p>
                    <p className=" inline-block px-2 ">Coffe & Teas</p>
                    <p className=" inline-block px-2 ">Pet Foods</p>
                    <p className=" inline-block px-2 ">Meats</p>
                    <p className=" inline-block px-2 ">Vegetables</p>
                    <p className=" inline-block px-2 ">Fruits</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
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
                            <div className="product-card bg-white relative border-gray-300 border rounded-lg hover:drop-shadow-lg">
                                <div className="z-50 w-full absolute left-0 right-0 bottom-60">
                                    <div className="product-card-overlay transition flex justify-center items-center h-full gap-3">
                                        <HeartIcon className="w-8 h-6 bg-green-500 hover:bg-green-600 hover:text-white rounded text-white" />
                                        <Link href={`/products/${_id}`}>
                                            <a>
                                                <EyeIcon className="w-8 h-6 bg-green-500 hover:bg-green-600 hover:text-white rounded text-white" />
                                            </a>
                                        </Link>
                                        <RefreshIcon
                                            onClick={() =>
                                                handleAddCompare(_id)
                                            }
                                            className="w-8 h-6 bg-green-500 hover:bg-green-600 hover:text-white rounded text-white"
                                        />
                                    </div>
                                </div>

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
                                <a href="./">
                                    <Image
                                        className="p-8 rounded-t-lg"
                                        src={product_imageUrl.thumbnail}
                                        alt="product image"
                                        height="180"
                                        width="200"
                                        layout="responsive"
                                    />
                                </a>
                                <div className="px-5 pb-5">
                                    <span className="text-xs  font-bold text-slate-400 hover:text-sky-400 ">
                                        {product_category}
                                    </span>
                                    <a href="./">
                                        <h3 className="md:text-md font-semibold tracking-tight text-gray-900 dark:text-black">
                                            {product_title.slice(0, 30)}..
                                        </h3>
                                    </a>
                                    <ul className="flex items-center mt-2.5 mb-2">
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
                                        <span className="text-green-600">
                                            {vendor_name}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xl font-bold text-green-500 dark:text-dark">
                                                ${product_price}
                                            </span>
                                            
                                        </div>
                                        <a className="text-green-500 bg-green-100 hover:bg-green-500 focus:ring-0 font-medium rounded text-sm px-2 py-1.5 text-center hover:text-white">
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

export default PopularProducts;
