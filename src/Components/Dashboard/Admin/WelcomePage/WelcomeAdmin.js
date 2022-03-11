import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Pie, defaults } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import axios from "axios";
import { css } from "@emotion/react";
import {
    ArchiveIcon,
    ArrowLeftIcon,
    ClipboardIcon, LogoutIcon,
    RefreshIcon
} from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import DotLoader from "react-spinners/DotLoader";
import swal from "sweetalert";




const WelcomeAdmin = () => {
    // Hello
    const user = useSelector((state) => state.states.user);
    console.log(user);
    const [products, setProducts] = useState([]);
    const [vendors, setVendors] = useState([]);
    const [control, setControl] = useState(false);
    const [loading, setLoading] = useState(true);

    // products
    useEffect(() => {
        setLoading(true);
        setControl(true);
        axios.get("/api/products").then(response => {

            setProducts(response?.data);
            console.log(response.data);
            setLoading(false);
        });
    }, [control]);



    // top products

    const topProducts = products?.slice(0, 5);



    // top vendors
    useEffect(() => {
        setLoading(true);
        setControl(true);
        axios.get("/api/vendors").then(response => {
            setVendors(response.data);
            setLoading(false);
        });
    }, [control]);



    // top products

    const topVendors = vendors?.slice(0, 5);
    console.log(topVendors);



    return (
        <div>
            <h1 className="text-center text-3xl font-bold py-5">Welcome to Admin dashboard</h1>
            {/* Simple data */}
            <div className='grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center '>
                <div className='bg-green-400  rounded-xl'>
                    <div className='p-2 flex flex-col justify-center py-5 text-white  '>
                        {/* Title */}
                        <h1 className='text-xl font-bold text-center  pb-2'>Total products</h1>
                        {/* total products */}
                        <h1 className='text-4xl text-center '>50</h1>
                    </div>
                </div>
                <div className='bg-red-400  rounded-xl'>
                    <div className='p-2 flex flex-col justify-center py-5 text-white  '>
                        {/* Title */}
                        <h1 className='text-xl font-bold text-center  pb-2'>Total sales</h1>
                        {/* total products */}
                        <h1 className='text-4xl text-center '>100k</h1>
                    </div>
                </div>
                <div className='bg-orange-400  rounded-xl'>
                    <div className='p-2 flex flex-col justify-center py-5 text-white  '>
                        {/* Title */}
                        <h1 className='text-xl font-bold text-center  pb-2'>Total revenue (mn)</h1>
                        {/* total products */}
                        <h1 className='text-4xl text-center '>100</h1>
                    </div>
                </div>
                <div className='bg-pink-400  rounded-xl'>
                    <div className='p-2 flex flex-col justify-center py-5 text-white  '>
                        {/* Title */}
                        <h1 className='text-xl font-bold text-center  pb-2'>Total Growth</h1>
                        {/* total products */}
                        <h1 className='text-4xl text-center '>20%</h1>
                    </div>
                </div>
            </div>


            {/* top product and vendors */}

            <div className='py-5'>
                <div className="flex flex-warp justify-around">
                    <div>


                        <div className="" >
                            <div>
                                <h1 className='text-xl font-bold text-center  pb-2'>Top products</h1>
                            </div>
                            <div className="col-span-2 bg-gray-100 rounded-lg border">


                                {/* Cart is empty */}

                                {/* Cart is not empty */}

                                <div>

                                    <div className="flex flex-col">
                                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="inline-block min-w-full sm:px-6 lg:px-8">
                                                <div className="overflow-hidden">
                                                    <table className="min-w-full">
                                                        <thead className="bg-gray-100">
                                                            <tr>
                                                                <th
                                                                    scope="col"
                                                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                                                                >
                                                                    Product
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                                                                >
                                                                    Unit Price
                                                                </th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {topProducts.map((product) => {

                                                                const { _id, product_badge, product_title, product_category, product_imageUrl, vendor_name, user_rating, product_price, produc_Details, product_stock } = product;
                                                                const title = product_title;
                                                                // const image = product_imageUrl;


                                                                return (
                                                                    <tr
                                                                        key={_id}
                                                                        className="border-b odd:bg-white even:bg-gray-50"
                                                                    >
                                                                        <td className="flex flex-row gap-2 items-center px-6 text-sm font-medium text-gray-900 whitespace-nowrap">

                                                                            <div className="border ">
                                                                                <Image
                                                                                    width={80}
                                                                                    height={80}
                                                                                    src={product?.product_imageUrl}
                                                                                    alt="image"
                                                                                ></Image>
                                                                            </div>
                                                                            <h1>{product_title}</h1>
                                                                        </td>
                                                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                                                            <span>{product_price}</span>
                                                                        </td>
                                                                    </tr>
                                                                )

                                                            }

                                                            )}
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

                    <div>
                        <div className="" >
                            <div>
                                <h1 className='text-xl font-bold text-center  pb-2'>Top Vendors</h1>
                            </div>
                            <div className="col-span-2 bg-gray-100 rounded-lg border">


                                {/* Cart is empty */}

                                {/* Cart is not empty */}

                                <div>

                                    <div className="flex flex-col">
                                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="inline-block min-w-full sm:px-6 lg:px-8">
                                                <div className="overflow-hidden">
                                                    <table className="min-w-full">
                                                        <thead className="bg-gray-100">
                                                            <tr>
                                                                <th
                                                                    scope="col"
                                                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                                                                >
                                                                    Vendor
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                                                                >
                                                                    Total Products
                                                                </th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {topVendors.map((vendor) => {

                                                                const { _id, name, icon, products_added } = vendor;

                                                                const image = icon;

                                                                console.log(_id,icon);
                                                                return (
                                                                    <tr
                                                                        key={_id}
                                                                        className="border-b odd:bg-white even:bg-gray-50"
                                                                    >
                                                                        <td className="flex flex-row gap-2 items-center px-6 text-sm font-medium text-gray-900 whitespace-nowrap">

                                                                            <div className="border z-0">
                                                                                <Image
                                                                                    className='z-0'
                                                                                    width={80}
                                                                                    height={80}
                                                                                    src={image}
                                                                                    alt="image"
                                                                                ></Image>
                                                                            </div>
                                                                            <h1>{name}</h1>
                                                                        </td>
                                                                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                                                            $ <span>{products_added}</span>
                                                                        </td>
                                                                    </tr>
                                                                )

                                                            }

                                                            )}
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
                </div>
            </div>


        </div>




    );
};

export default WelcomeAdmin;

