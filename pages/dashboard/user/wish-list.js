import { TrashIcon } from "@heroicons/react/outline";
import { ChevronRightIcon, HomeIcon, StarIcon } from "@heroicons/react/solid";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import swal from "sweetalert";
import React, { useEffect, useState } from "react";

const WishList = () => {
    const [wishlists, setWishlists] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        setControl(true);
        axios.get("/api/wishlists").then((response) => {
            setWishlists(response.data);
        });
    }, [control]);

    // Add to cart a product
    const addToCartHandler = async (title, image, price) => {
        axios
            .post("/api/cart", {
                title: title,
                image: image,
                price: price,
            })
            .then((response) => {
                if (response.data.insertedId) {
                    setControl(!control);
                    swal("Wow!", "Product is added to your cart", "success");
                } else {
                    setControl(false);
                }
            });
    };

    const handleDelete = async (id) => {
        axios.delete(`/api/wishlists?product_id=${id}`, {}).then((response) => {
            if (response.data.deletedCount) {
                setControl(!control);
                swal("Oh!", "You removed a product from your cart", "success");
            } else {
                setControl(false);
            }
        });
    };
    return (
        <div className="py-16 mx-5 md:mx-20">
            <h2 className=" text-black font-semibold text-4xl pb-2">
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
                                    className="h-4 w-4 text-gray-700 mr-2"
                                    aria-hidden="true"
                                />
                                <Link href="/">Home</Link>
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
                                    User
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
                                    Wishlist
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="md:p-10 bg-white md:shadow-lg  md:rounded-lg">
                <h2 className="text-2xl font-semibold">Your Wishlist</h2>
                {/* wishlist table */}
                <div className="mt-6 overflow-auto rounded-lg shadow hidden md:block">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th
                                    scope="col"
                                    className="p-6 text-sm font-semibold tracking-wide text-left"
                                >
                                    <p className="">Select</p>
                                </th>
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
                        </thead>
                        { (wishlists==false) &&
                            <h2 className="text-2xl text-center m-auto py-12">You have no Wishlist Products! Please add Products.</h2>}
                         <tbody className="divide-y divide-gray-200">
                            {wishlists.map((wish) => {
                                console.log(wish);
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
                                        <td className="p-4 whitespace-nowrap">
                                            <input
                                                type="checkbox"
                                                className="ml-4"
                                            />
                                        </td>
                                        <td className="py-4 whitespace-nowrap">
                                            <p className="w-36"></p>
                                            <Image
                                                src={product_imageUrl}
                                                alt="product image"
                                                className="object-cover"
                                                width="120px"
                                                height="90px"
                                            />
                                        </td>
                                        <td className="p-4 whitespace-nowrap">
                                            <p className="text-center">
                                                <a href="#">{product_title}</a>
                                            </p>
                                            <div className="flex justify-center items-center">
                                                <StarIcon
                                                    className="h-5 w-5 text-orange-500"
                                                    aria-hidden="true"
                                                />
                                                <StarIcon
                                                    className="h-5 w-5 text-orange-500"
                                                    aria-hidden="true"
                                                />
                                                <StarIcon
                                                    className="h-5 w-5 text-orange-500"
                                                    aria-hidden="true"
                                                />
                                                <StarIcon
                                                    className="h-5 w-5 text-orange-500"
                                                    aria-hidden="true"
                                                />
                                                <StarIcon
                                                    className="h-5 w-5 text-orange-500"
                                                    aria-hidden="true"
                                                />

                                                <h6 className="pl-4">
                                                    {user_rating}
                                                </h6>
                                            </div>
                                        </td>
                                        <td className="p-4 whitespace-nowrap">
                                            <h3 className="text-xl font-semibold text-center">
                                                ${product_price}
                                            </h3>
                                        </td>
                                        <td className="p-4 whitespace-nowrap text-center">
                                            <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                                                {product_stock} In Stock
                                            </span>
                                        </td>
                                        <td className="p-4 whitespace-nowrap text-center">
                                            <button
                                                onClick={() =>
                                                    addToCartHandler(
                                                        product_title,
                                                        product_imageUrl,
                                                        product_price
                                                    )
                                                }
                                                className="p-2 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-300 rounded-lg bg-opacity-50 border border-green-300 hover:bg-opacity-80 hover:text-green-600"
                                            >
                                                Add to cart
                                            </button>
                                        </td>
                                        <td className="p-4 whitespace-nowrap ">
                                            <button className="flex justify-center items-center">
                                                <TrashIcon
                                                    onClick={() =>
                                                        handleDelete(_id)
                                                    }
                                                    className="h-6 w-6 text-red-500 "
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    {wishlists.map((wish) => {
                        console.log(wish);
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
                                className="my-4 bg-indigo-100 bg-opacity-50 shadow-lg py-6 rounded-lg space-x-2 space-y-2"
                            >
                                <div className="flex">
                                    <div className="flex px-2 border-r border-gray-300">
                                        <Image
                                            src={product_imageUrl}
                                            alt="product image"
                                            className="object-cover"
                                            width="110px"
                                            height="70px"
                                        />
                                    </div>
                                    <div className="px-2">
                                        <div className="text-sm text-gray-600">
                                            <p className="text-center">
                                                <a href="#">{product_title}</a>
                                            </p>
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            <div className="flex justify-center items-center">
                                                <StarIcon
                                                    className="h-5 w-5 text-orange-500"
                                                    aria-hidden="true"
                                                />
                                                <StarIcon
                                                    className="h-5 w-5 text-orange-500"
                                                    aria-hidden="true"
                                                />
                                                <StarIcon
                                                    className="h-5 w-5 text-orange-500"
                                                    aria-hidden="true"
                                                />
                                                <StarIcon
                                                    className="h-5 w-5 text-orange-500"
                                                    aria-hidden="true"
                                                />
                                                <StarIcon
                                                    className="h-5 w-5 text-orange-500"
                                                    aria-hidden="true"
                                                />

                                                <h6 className="pl-4">
                                                    {user_rating}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="py-2 text-center">
                                            <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                                                {product_stock} In Stock
                                            </span>
                                        </div>
                                        <div className="text-base font-medium text-gray-600">
                                            <p>${product_price}</p>
                                        </div>
                                        <div className="flex justify-between items-center  text-sm pt-2">
                                            <div className="text-center ">
                                                <a href="#">
                                                    <span
                                                        onClick={() =>
                                                            handleDelete(_id)
                                                        }
                                                        className="px-1.5 py-1.5 text-xs font-medium uppercase tracking-wider text-red-500 bg-red-200 rounded-lg border border-red-200 bg-opacity-50"
                                                    >
                                                        <TrashIcon
                                                            className="h-4 w-4 text-red-500 inline-block mr-1 mb-1"
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
                                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-300 rounded-lg bg-opacity-50 border border-green-300 hover:bg-opacity-80 hover:text-green-600"
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
    );
};

export default WishList;

/* 
export async function getServerSideProps() {
    // load all wishlist
    const wishlists_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/wishlists`);
    const wishlists = await wishlists_res.json();
    return {
        props: { wishlists },
    };
}
 */
