import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import formStyle from "../../styles/AccountDetails.module.css";
import swal from "sweetalert";
import DashAdminMenu from "../../../pages/dashboard/DashMenu/DashAdminMenu";

const AccountDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        axios.post("/api/accountDetails", data).then((res) => {
            if (res.data.insertedId) {
                swal("WOW!!!  Your info Updated successfully");
            }
        });
        reset();
    };

    return (
        
           <div className="py-16 mx-5 md:mx-20">
                        <h2 className=" text-black font-semibold text-4xl pb-2">
                            Account Details
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
                                                Account Details
                                            </span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        {/* Account Details */}
                        <div className="py-10 px-8 md:px-16 mt-6 text-left bg-white shadow-lg  rounded-md">
                            <h3 className="text-3xl font-semibold">About You</h3>
                            <div className="mt-4">
                                <p className="text-sm font-bold text-gray-600">
                                    This information is associated with your account.
                                </p>
                                <p className="text-sm font-semibold text-gray-600">
                                    <span className="text-red-500 font-semibold">*</span>{" "}
                                    Required information
                                </p>
                            </div>

                            <div className={formStyle.accountform}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="w-full my-4">
                                        <div className="md:flex w-full gap-4">
                                            <div className="md:w-1/2 mb-2">
                                                <label htmlFor="">
                                                    Your First Name{" "}
                                                    <span className="text-red-500 font-semibold">
                                                        {" "}
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    className="w-full py-1"
                                                    {...register("firstName", {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                            <div className="md:w-1/2 mb-2">
                                                <label htmlFor="">
                                                    Your Last Name{" "}
                                                    <span className="text-red-500 font-semibold">
                                                        {" "}
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    className="w-full py-1"
                                                    {...register("lastName")}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="">
                                                Address Line 1{" "}
                                                <span className="text-red-500 font-semibold">
                                                    {" "}
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                className="w-full py-1"
                                                {...register("Address Line 1", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="">Address Line 2</label>
                                            <input
                                                className="w-full py-1"
                                                {...register("Address Line 2")}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="">
                                                City{" "}
                                                <span className="text-red-500 font-semibold">
                                                    {" "}
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                className="w-full py-1"
                                                {...register("city", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                        <div className="md:flex w-full gap-4">
                                            <div className="md:w-1/2 mb-2">
                                                <label htmlFor="">
                                                    State / Province{" "}
                                                    <span className="text-red-500 font-semibold">
                                                        {" "}
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    className="w-full py-1"
                                                    {...register("state", {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                            <div className="md:w-1/2 mb-2">
                                                <label htmlFor="">
                                                    Country{" "}
                                                    <span className="text-red-500 font-semibold">
                                                        {" "}
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    className="w-full py-1"
                                                    {...register("country")}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:flex w-full gap-4">
                                            <div className="md:w-1/2 mb-2">
                                                <label htmlFor="">
                                                    Postal Code{" "}
                                                    <span className="text-red-500 font-semibold">
                                                        {" "}
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    className="w-full py-1"
                                                    {...register("postalCode", {
                                                        required: true,
                                                    })}
                                                />
                                            </div>
                                            <div className="md:w-1/2 mb-2">
                                                <label htmlFor="">
                                                    Phone Number{" "}
                                                    <span className="text-red-500 font-semibold">
                                                        {" "}
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    className="w-full py-1"
                                                    {...register("phoneNumber")}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="">Email Number</label>
                                            <input
                                                className="w-full py-1"
                                                {...register("email")}
                                            />
                                        </div>

                                        <input
                                            type="submit"
                                            className="px-12 py-3 mt-4 text-white primary-bg-color rounded-md hover:bg-green-700 w-full md:w-1/4"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
    );
};

export default AccountDetails;