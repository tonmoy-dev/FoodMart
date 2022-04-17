import axios from "axios";
import Image from "next/image";
// import { useRouter } from 'next/router';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { removeCompareItem } from "../../src/redux/slices/compareSlice";
import { fetchCartProducts } from "../../src/redux/slices/productSlice";

const Compare = () => {
    const [control, setControl] = useState(false);
    const user = useSelector((state) => state.states.user);
    const compareItems = useSelector((state) => state.compareList.compareList);
    const dispatch = useDispatch();


    // Add to cart a product
    const addToCartHandler = async (title, image, price) => {
        axios
            .post("/api/cart", {
                title: title,
                image: image,
                price: price,
                description: title,
                quantity: 1,
                email:user.email
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
        <div div className="py-16 mx-5 md:mx-20">
            <h2 className="pb-2 text-3xl font-semibold text-center text-black ">
                Products Compare
            </h2>

            <div className="w-full">
                {/* wishlist table */}
                <div className="pt-10 overflow-auto">
                    <table className="w-full">
                        
                        <tbody className="flex justify-center w-full py-2 overflow-auto rounded">
                            {compareItems.length !== 0 && (
                                <tr className="flex flex-col border w-28 md:w-36">
                                    <td className="p-3 border-b h-28 md:h-40">
                                        <p className="text-sm font-semibold text-gray-500">
                                            Preview
                                        </p>
                                    </td>
                                    <td className="h-24 p-4 border-b md:h-12">
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
                                    <td className="p-4 border-b h-36">
                                        <h3 className="text-sm font-semibold text-gray-500">
                                            Description
                                        </h3>
                                    </td>
                                    <td className="p-3 border-b h-14">
                                        <h3 className="text-sm font-semibold text-gray-500">
                                            Stock status
                                        </h3>
                                    </td>
                                    <td className="h-16 p-4 border-b">
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
                            )}
                            {compareItems == false && (
                                <h2 className="py-12 m-auto text-2xl text-center text-gray-400">
                                    You have no Compare Products! Please add
                                    Products.
                                </h2>
                            )}
                            {compareItems.map((product) => {
                                const {
                                    _id,
                                    product_imageUrl,
                                    product_title,
                                    product_price,
                                    user_rating,
                                    produc_Details,
                                    product_stock,
                                } = product;

                                return (
                                    <tr
                                        key={_id}
                                        className="flex flex-col text-center border w-36 md:w-1/4"
                                    >
                                        <td className="flex items-center justify-center border-b h-28 md:h-40">
                                            <Image
                                                src={product_imageUrl}
                                                alt="product image"
                                                className="object-cover"
                                                width="105px"
                                                height="100px"
                                            />
                                        </td>
                                        <td className="h-24 p-4 border-b md:h-12">
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
                                        <td className="p-4 overflow-scroll border-b h-36">
                                            <h3 className="text-xs font-semibold text-gray-500 md:sm">
                                                {produc_Details.slice(0, 180)}
                                            </h3>
                                        </td>
                                        <td className="p-4 border-b">
                                            <span className="p-1.5 text-xs font-medium uppercase tracking-wider primary-color bg-green-200 rounded-md bg-opacity-50">
                                                {product_stock}
                                            </span>
                                        </td>
                                        <td className="h-16 p-4 border-b">
                                            <button
                                                onClick={() =>
                                                    addToCartHandler(
                                                        product_title,
                                                        product_imageUrl,
                                                        product_price
                                                    )
                                                }
                                                className="p-2 text-xs font-semibold tracking-wider uppercase bg-green-300 bg-opacity-50 border border-green-300 rounded-md primary-color hover:bg-opacity-80 hover:text-green-600"
                                            >
                                                Add to cart
                                            </button>
                                        </td>
                                        <td className="p-4 border-b">
                                            <button
                                                onClick={() => dispatch(removeCompareItem(_id))}
                                                className="px-2 py-1 text-sm font-semibold text-red-400 bg-red-200 rounded-md bg-opacity-60"
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

            {/* Toast Notification */}
            <ToastContainer />
        </div>
    );
};

export default Compare;

export async function getServerSideProps() {
    // load all compare products
    const compare_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/compare`);
    const compareProducts = await compare_res.json();
    return {
        props: { compareProducts },
    };
}
