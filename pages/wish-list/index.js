import { TrashIcon } from "@heroicons/react/outline";
import { ChevronRightIcon, HomeIcon, StarIcon } from "@heroicons/react/solid";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { fetchCartProducts } from "../../src/redux/slices/productSlice";
import { removeItem } from "../../src/redux/slices/wishlistSlice";

const WishLists = () => {
    const [control, setControl] = useState(false);
    const user = useSelector((state) => state.states.user);
    const wishlists = useSelector((state) => state.wishlists.wishlists);
    const dispatch = useDispatch();

    // Add to cart a product
    const addToCartHandler = async (title, image, price) => {
        axios.post("/api/cart", {
            title: title,
            image: image,
            price: price,
            description: title,
            quantity: 1,
            email: user.email
          })
            .then((response) => {
                if (response.data.insertedId) {
                    setControl(!control);
                    dispatch(fetchCartProducts(user));
                    toast.success('Wow! Added to your cart.', {
                        position: "bottom-left"
                      });
                } else {
                    setControl(false);
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
            <div className="py-16 mx-5 md:mx-20">
                <h2 className="pb-2 text-4xl font-semibold text-black ">
                    Wishlist
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
                                        className="w-4 h-4 mr-2 text-gray-700"
                                        aria-hidden="true"
                                    />
                                    <Link href="/">Home</Link>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <ChevronRightIcon
                                        className="w-5 h-5 text-gray-400"
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
                                        className="w-5 h-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                    <a
                                        href="#"
                                        className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        User
                                    </a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <ChevronRightIcon
                                        className="w-5 h-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                                        Wishlist
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="bg-white md:p-10 md:shadow-lg md:rounded-md">
                    <h2 className="text-2xl font-semibold">
                        Your Wishlist
                    </h2>
                    {/* wishlist table */}
                    {/* Large Device*/}
                    <div className="hidden mt-6 overflow-auto rounded-md shadow md:block">
                        <table className="w-full">
                            {wishlists.length !== 0 &&
                                <thead className="border-b-2 border-gray-200 bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            colSpan="2"
                                            className="p-6 text-sm font-semibold tracking-wide text-center"
                                        >
                                            <p>Product</p>
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-6 text-sm font-semibold tracking-wide text-center"
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-6 text-sm font-semibold tracking-wide text-center"
                                        >
                                            Stock Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-6 text-sm font-semibold tracking-wide text-center"
                                        >
                                            Action
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-6 text-sm font-semibold tracking-wide text-center"
                                        >
                                            Manage
                                        </th>
                                    </tr>
                                </thead>}
                            {wishlists.length == 0 && (<div className="flex justify-center"><h3 className="py-10 m-auto text-2xl text-gray-600">You have no Wishlist product. Please add product in Wishlist.</h3></div>)}
                            <tbody className="divide-y divide-gray-200">
                                {wishlists.map((wish) => {
                                    const {
                                        product_title,
                                        product_price,
                                        user_rating,
                                        product_stock,
                                        product_imageUrl,
                                        _id,
                                    } = wish;
                                    return (
                                        <tr key={_id}>
                                            <td className="py-4 whitespace-nowrap">
                                                <p className="w-36"></p>
                                                <Image
                                                    src={
                                                        product_imageUrl
                                                    }
                                                    alt="product image"
                                                    className="object-cover"
                                                    width="120px"
                                                    height="90px"
                                                />
                                            </td>
                                            <td className="p-4 whitespace-nowrap">
                                                <p className="text-center">
                                                    <a href="#">
                                                        {
                                                            product_title
                                                        }
                                                    </a>
                                                </p>
                                                <div className="flex items-center justify-center">
                                                    <StarIcon
                                                        className="w-5 h-5 text-orange-500"
                                                        aria-hidden="true"
                                                    />
                                                    <StarIcon
                                                        className="w-5 h-5 text-orange-500"
                                                        aria-hidden="true"
                                                    />
                                                    <StarIcon
                                                        className="w-5 h-5 text-orange-500"
                                                        aria-hidden="true"
                                                    />
                                                    <StarIcon
                                                        className="w-5 h-5 text-orange-500"
                                                        aria-hidden="true"
                                                    />
                                                    <StarIcon
                                                        className="w-5 h-5 text-orange-500"
                                                        aria-hidden="true"
                                                    />

                                                    <h6 className="pl-4">
                                                        {
                                                            user_rating
                                                        }
                                                    </h6>
                                                </div>
                                            </td>
                                            <td className="p-4 whitespace-nowrap">
                                                <h3 className="text-xl font-semibold text-center">
                                                    ${product_price}
                                                </h3>
                                            </td>
                                            <td className="p-4 text-center whitespace-nowrap">
                                                <span className="p-1.5 text-xs  font-medium uppercase tracking-wider primary-color bg-green-200 rounded-md bg-opacity-50">
                                                    {product_stock}{" "}
                                                    In Stock
                                                </span>
                                            </td>
                                            <td className="p-4 text-center whitespace-nowrap">
                                                <button
                                                    onClick={() =>
                                                        addToCartHandler(
                                                            product_title,
                                                            product_imageUrl,
                                                            product_price
                                                        )
                                                    }
                                                    className="p-2 text-xs font-medium tracking-wider uppercase bg-green-300 bg-opacity-50 border border-green-300 rounded-md primary-color hover:bg-opacity-80 hover:text-green-600"
                                                >
                                                    Add to cart
                                                </button>
                                            </td>
                                            <td className="p-4 whitespace-nowrap ">
                                                <button className="flex items-center justify-center">
                                                    <TrashIcon
                                                        onClick={() => dispatch(removeItem(_id))}
                                                        className="w-6 h-6 text-red-500 "
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
    
                    {/* Mobile Responsive  */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
                        {wishlists.map((wish) => {
                            const {
                                product_title,
                                product_price,
                                user_rating,
                                product_stock,
                                product_imageUrl,
                                _id,
                            } = wish;
                            return (
                                <div
                                    key={_id}
                                    className="py-6 my-4 space-x-2 space-y-2 bg-indigo-100 bg-opacity-50 rounded-md shadow-lg"
                                >
                                    <div className="flex">
                                        <div className="flex px-2 border-r border-gray-300">
                                            <Image
                                                src={
                                                    product_imageUrl
                                                }
                                                alt="product image"
                                                className="object-cover"
                                                width="110px"
                                                height="70px"
                                            />
                                        </div>
                                        <div className="px-2">
                                            <div className="text-sm text-gray-600">
                                                <p className="text-center">
                                                    <a href="#">
                                                        {
                                                            product_title
                                                        }
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                <div className="flex items-center justify-center">
                                                    <StarIcon
                                                        className="w-5 h-5 text-orange-500"
                                                        aria-hidden="true"
                                                    />
                                                    <StarIcon
                                                        className="w-5 h-5 text-orange-500"
                                                        aria-hidden="true"
                                                    />
                                                    <StarIcon
                                                        className="w-5 h-5 text-orange-500"
                                                        aria-hidden="true"
                                                    />
                                                    <StarIcon
                                                        className="w-5 h-5 text-orange-500"
                                                        aria-hidden="true"
                                                    />
                                                    <StarIcon
                                                        className="w-5 h-5 text-orange-500"
                                                        aria-hidden="true"
                                                    />

                                                    <h6 className="pl-4">
                                                        {
                                                            user_rating
                                                        }
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="py-2 text-center">
                                                <span className="p-1.5 text-xs  font-medium uppercase tracking-wider primary-color bg-green-200 rounded-md bg-opacity-50">
                                                    {product_stock}{" "}
                                                    In Stock
                                                </span>
                                            </div>
                                            <div className="text-base font-medium text-gray-600">
                                                <p>
                                                    ${product_price}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between pt-2 text-sm">
                                                <div className="text-center">
                                                    <a href="#">
                                                        <span className="px-1.5 py-1.5 text-xs font-medium uppercase tracking-wider text-red-500 bg-red-200 rounded-md border border-red-200 bg-opacity-50">
                                                            <TrashIcon
                                                                className="inline-block w-4 h-4 mb-1 mr-1 text-red-500"
                                                                aria-hidden="true"
                                                            />
                                                            Delete
                                                        </span>
                                                    </a>
                                                </div>
                                                <div>
                                                    <button
                                                        onClick={() =>
                                                            addToCartHandler(
                                                                product_title,
                                                                product_imageUrl,
                                                                product_price
                                                            )
                                                        }
                                                        className="p-1.5 text-xs font-medium uppercase tracking-wider primary-color bg-green-300 rounded-md bg-opacity-50 border border-green-300 hover:bg-opacity-80 hover:text-green-600"
                                                    >
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* Toast Notification */}
            <ToastContainer />
        </>
    );
};

export default WishLists;
