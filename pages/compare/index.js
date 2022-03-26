import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    fetchCartProducts,
    fetchCompareProducts,
} from "../../src/redux/slices/productSlice";

const Compare = () => {
    const [control, setControl] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.states.user);
    const dispatch = useDispatch();

    // private routing
    const router = useRouter();
    if (!user?.email) {
        router.push("/login");
    }

    useEffect(() => {
        setControl(true);
        setLoading(true);
        axios.get(`/api/compare?email=${user.email}`).then((response) => {
            setProducts(response.data);
            setLoading(false);
        });
    }, [control, products]);

    // Add to cart a product
    const addToCartHandler = async (title, image, price) => {
        axios
            .post("/api/cart", {
                title: title,
                image: image,
                price: price,
                description: title,
                quantity: 1,
                email: user.email,
            })
            .then((response) => {
                if (response.data.insertedId) {
                    setControl(!control);
                    dispatch(fetchCartProducts(user));
                    toast.success("Wow! Added to your cart.", {
                        position: "bottom-left",
                    });
                } else {
                    setControl(false);
                }
            });
    };

    const handleDeleteProduct = async (id) => {
        axios.delete(`/api/compare?_id=${id}`, {}).then((response) => {
            if (response.data.deletedCount) {
                setControl(!control);
                dispatch(fetchCompareProducts(user));
                toast.warn("Removed a product.", {
                    position: "bottom-left",
                });
            } else {
                setControl(false);
            }
        });
    };

    return (
        <div div className="py-16 mx-5 md:mx-20">
            <h2 className=" text-black font-semibold text-2xl md:text-3xl text-center pb-2">
                Products Compare
            </h2>

            <div className="w-full">
                {/* wishlist table */}
                <div className="pt-10 overflow-auto">
                    <table className="w-full">
                        <tbody className="flex justify-center rounded py-2 overflow-auto w-full">
                            {products.length !== 0 && (
                                <tr className="flex flex-col w-28 md:w-36  border">
                                    <td className="p-3 h-28 md:h-40 border-b">
                                        <p className="text-sm font-semibold text-gray-500">
                                            Preview
                                        </p>
                                    </td>
                                    <td className="h-24 md:h-12 p-4 border-b">
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
                                    <td className="h-36 p-4 border-b">
                                        <h3 className="text-sm font-semibold text-gray-500">
                                            Description
                                        </h3>
                                    </td>
                                    <td className="p-3 h-14 border-b">
                                        <h3 className="text-sm font-semibold text-gray-500">
                                            Stock status
                                        </h3>
                                    </td>
                                    <td className="h-16 p-4 border-b">
                                        <h3 className="text-sm font-semibold text-gray-500">
                                            Buy now
                                        </h3>
                                    </td>
                                    <td className="p-4">
                                        <h3 className="text-sm font-semibold text-gray-500">
                                            Action
                                        </h3>
                                    </td>
                                </tr>
                            )}
                            {products == false && (
                                <h2 className="text-2xl text-gray-400 text-center m-auto py-12">
                                    You have no Compare Products! Please add
                                    Products.
                                </h2>
                            )}
                            {products?.slice(0, 3).map((product) => {
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
                                        className="flex flex-col w-36 md:w-1/4  border text-center"
                                    >
                                        <td className="flex justify-center items-center h-28 md:h-40 border-b">
                                            <Image
                                                src={product_imageUrl}
                                                alt="product image"
                                                className="object-cover"
                                                width="105px"
                                                height="100px"
                                            />
                                        </td>
                                        <td className="h-24 md:h-12 p-4 border-b">
                                            <p className="text-sm font-semibold text-gray-500">
                                                {product_title.slice(0,30)}
                                            </p>
                                        </td>
                                        <td className="p-4 border-b">
                                            <p className="text-sm font-semibold text-gray-500">
                                                $ {product_price}
                                            </p>
                                        </td>
                                        <td className="p-4 border-b">
                                            <h3 className="text-sm font-semibold text-gray-500">
                                                {user_rating}
                                            </h3>
                                        </td>
                                        <td className="h-36 p-4 border-b overflow-scroll">
                                            <h3 className="text-xs md:sm font-semibold text-gray-500">
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
                                                className="p-2 text-xs font-semibold uppercase tracking-wider primary-color bg-green-300 rounded-md bg-opacity-50 border border-green-300 hover:bg-opacity-80 hover:text-green-600"
                                            >
                                                Add to cart
                                            </button>
                                        </td>
                                        <td className="p-4 border-b">
                                            <button
                                                onClick={() =>
                                                    handleDeleteProduct(
                                                        product._id
                                                    )
                                                }
                                                className="text-sm font-semibold text-red-400 bg-red-200 bg-opacity-60 px-2 py-1 rounded-md"
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
