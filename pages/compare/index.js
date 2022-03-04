import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";

const Compare = ({ compareProducts }) => {
    const [control, setControl] = useState(false);
    const result = compareProducts.map((compareItems) =>
        console.log(compareItems.compareProduct[0])
    );

    //Delete product from compare
    /* const handleDeleteProduct = async (compareId) => {
        console.log(compareId);
        const response = await fetch(`/api/compare/${compareId}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log(data); */

        //console.log("api/compare?_id="+ id)
        /* const url= `/api/compare/compareProduct[0]?${id} `;
        console.log(url)
       axios.delete(url, {}).then((response) => {
            console.log(url)
            console.log(response);
            if (response.data.deletedCount) {
                setControl(!control);
                swal("Delete product sucessfully");
            } else {
                setControl(false);
            }
        }); 
        axios.delete(url)
    };*/

    return (
        <div div className="py-16 mx-5 md:mx-20">
            <h2 className=" text-black font-semibold text-4xl pb-2">
                Products Compare
            </h2>
            {/* breadcrumb */}
            <div>
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
                                    <Link href="/products/all-products">
                                        Shop
                                    </Link>
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
                                    Compare
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="">
                {/* wishlist table */}
                <div className="pt-10 overflow-auto">
                    <table className="w-full">
                        <tbody className="flex border rounded p-4 overflow-auto w-full">
                            <tr className="flex flex-col w-1/4  border">
                                <td className="p-3 h-32 md:h-48 border-b">
                                    <p className="text-sm font-semibold text-gray-500">
                                        Preview
                                    </p>
                                </td>
                                <td className="p-4 border-b">
                                    <p className="text-sm font-semibold text-gray-500">
                                        Name
                                    </p>
                                </td>
                                <td className="p-4 border-b">
                                    <p className="text-sm font-semibold text-gray-500">
                                        Price
                                    </p>
                                </td>
                                <td className="p-4 border-b">
                                    <h3 className="text-sm font-semibold text-gray-500">
                                        Rating
                                    </h3>
                                </td>
                                <td className="h-40 p-4 border-b">
                                    <h3 className="text-sm font-semibold text-gray-500">
                                        Description
                                    </h3>
                                </td>
                                <td className="p-3 h-14 border-b">
                                    <h3 className="text-sm font-semibold text-gray-500">
                                        Stock status
                                    </h3>
                                </td>
                                <td className="p-4 border-b">
                                    <h3 className="text-sm font-semibold text-gray-500">
                                        Buy now
                                    </h3>
                                </td>
                                <td className="p-4 border-b">
                                    <h3 className="text-sm font-semibold text-gray-500">
                                        Delete Compare Product
                                    </h3>
                                </td>
                            </tr>
                            {compareProducts.slice(0, 3).map((product) => {
                                const {
                                    _id,
                                    product_imageUrl,
                                    product_title,
                                    product_price,
                                    user_rating,
                                    produc_Details,
                                    product_stock,
                                } = product.compareProduct[0];

                                return (
                                    <tr
                                        key={_id}
                                        className="flex flex-col w-1/4  border"
                                    >
                                        <td className="flex justify-center items-center h-32 md:h-48 border-b">
                                            <Image
                                                src={product_imageUrl.thumbnail}
                                                alt="product image"
                                                className="object-cover"
                                                width="175px"
                                                height="140px"
                                            />
                                        </td>
                                        <td className="p-4 border-b">
                                            <p className="text-sm font-semibold text-gray-500">
                                                {product_title}
                                            </p>
                                        </td>
                                        <td className="p-4 border-b">
                                            <p className="text-sm font-semibold text-gray-500">
                                                {product_price}
                                            </p>
                                        </td>
                                        <td className="p-4 border-b">
                                            <h3 className="text-sm font-semibold text-gray-500">
                                                {user_rating}
                                            </h3>
                                        </td>
                                        <td className="h-40 p-4 border-b overflow-scroll">
                                            <h3 className="text-sm font-semibold text-gray-500">
                                                {produc_Details.slice(0, 234)}
                                            </h3>
                                        </td>
                                        <td className="p-4 border-b">
                                            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                                                {product_stock}
                                            </span>
                                        </td>
                                        <td className="p-4 border-b">
                                            <h3 className="text-sm font-semibold text-gray-500">
                                                Buy now
                                            </h3>
                                        </td>
                                        <td className="p-4 border-b">
                                            <button
                                                onClick={() =>
                                                    handleDeleteProduct(_id)
                                                }
                                                className="text-sm font-semibold text-red-400 bg-red-200 bg-opacity-60 px-2 py-1 rounded-lg"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Compare;

export async function getServerSideProps() {
    // load all compare products
    const compare_res = await fetch("http://localhost:3000/api/compare");
    const compareProducts = await compare_res.json();
    return {
        props: { compareProducts },
    };
}
