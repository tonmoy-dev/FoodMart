import { ChevronRightIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import DashAdminMenu from "../DashMenu/DashAdminMenu";
import swal from "sweetalert";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DashVendorMenu from "../DashMenu/DashVendorMenu";
import DashUserMenu from "../DashMenu/DashUserMenu";
import DotLoader from "react-spinners/DotLoader"
import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import {
    BellIcon, HomeIcon, LogoutIcon, MenuIcon, SearchIcon, UserCircleIcon, XIcon
} from "@heroicons/react/solid";
import Link from "next/link";


const AddProduct = () => {
    const [addProduct, setAddProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [control, setControl] = useState(false);
    const notify = () => toast("Product added successfully!");

    const handleInputOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newAddData = { ...addProduct };
        newAddData[field] = value;
        setAddProduct(newAddData);
        console.log(addProduct);
    };


    const handleSubmission = async (e) => {
        e.preventDefault();
        const newAddProduct = { ...addProduct };
        setAddProduct(newAddProduct);
        console.log(addProduct);
        console.log(newAddProduct);

        axios.post("/api/products", addProduct)
            .then((response) => {
                if (response.data.insertedId) {
                    setControl(!control);
                    swal("Wow!", "Product is added to your shop", "success");
                    e.target.reset();
                } else {
                    setControl(false);
                }
            });


    };


    const [color, setColor] = useState("green");


    const user = useSelector((state) => state.states.user);

    // const [control, setControl] = useState(false);
    // const [loading, setLoading] = useState(true);

    // users
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setLoading(true);
        setControl(true);
        axios.get("/api/users").then(response => {
            setUsers(response.data);
            setLoading(false);
        });
    }, [control]);



    const email = user?.email


    const userNow = users.filter(user => user?.email === email)[0]
    console.log(userNow?.role);
    let role = userNow?.role

    const override = css`
  display: block;
  margin: 0 auto;
  `;

    return (
        <div>
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
            <div>
                {
                    loading && (
                        <DotLoader color={color} loading={loading} css={override} size={60} />
                    )
                }
            </div>
            {!loading && userNow && (

                <div >


                    <div id="dashboard-container" className="">
                        {/* top bar */}
                        {/* {userNow?.role === 'admin' && <DashAdminMenu />}
                        {userNow?.role === 'vendor' && <DashVendorMenu />}
                        {userNow?.role === 'user' && <DashUserMenu />} */}
                        <DashVendorMenu />
                        {/* main content */}

                        <div id="main-content" className="pt-24 pr-8 pl-8 lg:pl-72">
                            <div className="">
                                <div className="pb-16 mx-5">
                                    <h1 className=" text-black font-semibold text-4xl pb-2 ml-4">
                                        Add Product
                                    </h1>
                                    {/* breadcrumb */}
                                    <div className="pb-10 ml-4">
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
                                                            Add Product
                                                        </span>
                                                    </div>
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                    {/* <h1 className="text-xl pb-3 font-semibold">Add New Product</h1> */}
                                    <div className="md:flex flex-wrap items-center justify-center ">
                                        <div className="md:w-full bg-white rounded-lg p-8 md:m-8">
                                            <form onSubmit={handleSubmission}>
                                                <div className="flex flex-col mb-2">
                                                    <label
                                                        className="font-semibold text-lg text-gray-700"
                                                        htmlFor="product_badge"
                                                    >
                                                        Product badge{" "}
                                                        <span className="text-red-500 font-semibold">
                                                            {" "}
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                                        required
                                                        type="text"
                                                        name="product_badge"
                                                        id="product_badge"
                                                        onBlur={handleInputOnBlur}
                                                    />
                                                </div>

                                                <div className="flex flex-col mb-2">
                                                    <label
                                                        className="font-semibold text-lg text-gray-700"
                                                        htmlFor="product_title"
                                                    >
                                                        Product Title{" "}
                                                        <span className="text-red-500 font-semibold">
                                                            {" "}
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                                        required
                                                        type="text"
                                                        name="product_title"
                                                        id="product_title"
                                                        onBlur={handleInputOnBlur}
                                                    />
                                                </div>
                                                <div className="flex flex-col mb-2">
                                                    <label
                                                        className="font-semibold text-lg text-gray-700"
                                                        htmlFor="product_subTitle"
                                                    >
                                                        Product Sub-Title{" "}
                                                        <span className="text-red-500 font-semibold">
                                                            {" "}
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                                        required
                                                        type="text"
                                                        name="product_subTitle"
                                                        id="product_subTitle"
                                                        onBlur={handleInputOnBlur}
                                                    />
                                                </div>
                                                <div className="flex flex-col mb-2">
                                                    <label
                                                        className="font-semibold text-lg text-gray-700"
                                                        htmlFor="product_category"
                                                    >
                                                        Product Category{" "}
                                                        <span className="text-red-500 font-semibold">
                                                            {" "}
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                                        required
                                                        type="text"
                                                        name="product_category"
                                                        id="product_category"
                                                        onBlur={handleInputOnBlur}
                                                    />
                                                </div>
                                                <div className="flex flex-col mb-2">
                                                    <label
                                                        className="font-semibold text-lg text-gray-700"
                                                        htmlFor="product_sub_category"
                                                    >
                                                        Product Sub-Category{" "}
                                                        <span className="text-red-500 font-semibold">
                                                            {" "}
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                                        required
                                                        type="text"
                                                        name="sub_category"
                                                        id="sub_category"
                                                        onBlur={handleInputOnBlur}
                                                    />
                                                </div>

                                                <div className="flex flex-col mb-2">
                                                    <label
                                                        className="font-semibold text-lg text-gray-700"
                                                        htmlFor="product_imageUrl"
                                                    >
                                                        Thumbnail{" "}
                                                        <span className="text-red-500 font-semibold">
                                                            {" "}
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                                        required
                                                        type="text"
                                                        name="product_imageUrl"
                                                        id="product_imageUrl"
                                                        onBlur={handleInputOnBlur}
                                                    />
                                                </div>
                                                <div className="flex flex-col mb-2">
                                                    <label
                                                        className="font-semibold text-lg text-gray-700"
                                                        htmlFor="product_category_img"
                                                    >
                                                        Product-Category-Img{" "}
                                                        <span className="text-red-500 font-semibold">
                                                            {" "}
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                                        required
                                                        type="text"
                                                        name="product_category_img"
                                                        id="product_category_img"
                                                        onBlur={handleInputOnBlur}
                                                    />
                                                </div>

                                                <div className="flex flex-col mb-2">
                                                    <label
                                                        className="font-semibold text-lg text-gray-700"
                                                        htmlFor="product_price"
                                                    >
                                                        Product Price{" "}
                                                        <span className="text-red-500 font-semibold">
                                                            {" "}
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                                        required
                                                        type="number"
                                                        name="product_price"
                                                        id="product_price"
                                                        onBlur={handleInputOnBlur}
                                                    />
                                                </div>
                                                <div className="flex flex-col mb-2">
                                                    <label
                                                        className="font-semibold text-lg text-gray-700"
                                                        htmlFor="weight"
                                                    >
                                                        Product Weight{" "}
                                                        <span className="text-red-500 font-semibold">
                                                            {" "}
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                                        required
                                                        type="text"
                                                        name="weight"
                                                        id="weight"
                                                        onBlur={handleInputOnBlur}
                                                    />
                                                </div>
                                                <div className="flex flex-col mb-2">
                                                    <label
                                                        className="font-semibold text-lg text-gray-700"
                                                        htmlFor="product_stock"
                                                    >
                                                        Product Stock{" "}
                                                        <span className="text-red-500 font-semibold">
                                                            {" "}
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                                        required
                                                        type="number"
                                                        name="product_stock"
                                                        id="product_stock"
                                                        onBlur={handleInputOnBlur}
                                                    />
                                                </div>
                                                <div className="flex flex-col mb-2">
                                                    <label
                                                        className="font-semibold text-lg text-gray-700"
                                                        htmlFor="vendor_name"
                                                    >
                                                        Vendor Name{" "}
                                                        <span className="text-red-500 font-semibold">
                                                            {" "}
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                                        required
                                                        type="text"
                                                        name="vendor_name"
                                                        id="vendor_name"
                                                        onBlur={handleInputOnBlur}
                                                    />
                                                </div>
                                                <div className="flex flex-col mb-2">
                                                    <label
                                                        className="font-semibold text-lg text-gray-700"
                                                        htmlFor="vendor_name"
                                                    >
                                                        User Rating
                                                        <span className="text-red-500 font-semibold">
                                                            {" "}
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                                        required
                                                        type="number"
                                                        name="user_rating"
                                                        id="user_rating"
                                                        onBlur={handleInputOnBlur}
                                                    />
                                                </div>

                                                <div className="flex flex-col mb-2">
                                                    <label
                                                        className="font-semibold text-lg text-gray-700"
                                                        htmlFor="productDetails"
                                                    >
                                                        Product Details
                                                        <span className="text-red-500 font-semibold">
                                                            {" "}
                                                            *
                                                        </span>
                                                    </label>
                                                    <textarea
                                                        className="border rounded-lg border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 text-slate-700"
                                                        type="productDetails"
                                                        name="produc_Details"
                                                        id="produc_Details"
                                                        rows="6"
                                                        onBlur={handleInputOnBlur}
                                                    ></textarea>
                                                </div>
                                                <div className="pt-3">
                                                    <button
                                                        className="w-full block font-semibold rounded-lg bg-green-500 hover:bg-green-600 text-white uppercase text-lg mx-auto px-4 py-2"
                                                        type="submit"
                                                    >
                                                        Add Product
                                                    </button>
                                                    <ToastContainer
                                                        position="top-right"
                                                        autoClose={5000}
                                                        hideProgressBar={false}
                                                        newestOnTop={false}
                                                        closeOnClick
                                                        rtl={false}
                                                        pauseOnFocusLoss
                                                        draggable
                                                        pauseOnHover
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>

    );
};

export default AddProduct;
