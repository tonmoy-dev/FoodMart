import { ArrowSmRightIcon, ChevronRightIcon, HomeIcon, LocationMarkerIcon, PhoneIcon, StarIcon } from '@heroicons/react/solid';
import Image from "next/image";
import Link from 'next/link';
import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';


const VendorShop = () => {
    const products = [
        {
            _id: "62056b0651bf759ee9a55b71",
    product_badge: "Hot",
    product_title: "Black Grapes",
    product_category: "Fruits",
    product_imageUrl: "https://i.ibb.co/jDTnwFq/f-black-grapes-250-gm.webp",
    product_price: "25.50",
    vendor_name: "Nature Food",
    user_rating: "4"
        },
        {
            _id: "6205b0651bf759ee9a55b71",
    product_badge: "Hot",
    product_title: "Lal Angur (Red Grapes) ",
    product_category: "Fruits",
    product_imageUrl: "https://i.ibb.co/XSZ0F14/f-red-grapes.webp",
    product_price: "25.50",
    vendor_name: "Nature Food",
    user_rating: "5"
        },
        {
            _id: "62056b0651bf59ee9a55b71",
    product_badge: "Hot",
    product_title: "Narikel (Coconut)",
    product_category: "Fruits",
    product_imageUrl: "https://i.ibb.co/6w2jdkz/f-narikel-coconut-1-pcs.webp",
    product_price: "25.50",
    vendor_name: "Nature Food",
    user_rating: "4"
        },
        {
            _id: "62056b0651bf759ee9a5b71",
    product_badge: "Hot",
    product_title: "Sour Jujube (Tok Boroi)",
    product_category: "Fruits",
    product_imageUrl: "https://i.ibb.co/WttprKM/f-sour-jujube-tok-boroi-500-gm.webp",
    product_price: "25.50",
    vendor_name: "Nature Food",
    user_rating: "4"
        },
    ]

    return (
        <div className="container mx-auto px-10 pt-10">
            <style jsx>
                {`
        .dbs-style{
            background-color: red ;
        }
        `}
            </style>

            <div className="py-8">
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
                        <li aria-current="page">
                            <div className="flex items-center">
                                <ChevronRightIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 ">
                                    <Link href="/vendors">Vendors</Link>
                                </span>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <ChevronRightIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 ">
                                    Vendor Shop
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className=" pb-5">
                <h1 className="text-3xl text-center font-semibold mb-4">Nature Food Store</h1>
                <div className="w-3/4 md:w-1/3 relative mx-auto text-gray-600 mb-10">
                    <input className="border-2 border-gray-300 bg-white h-10 w-full px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search in this store" />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                        <AiOutlineSearch className="h-5 w-5" />
                    </button>
                </div>

            </div>
            <div className="flex gap-x-6 flex-col md:flex-row">
                <div className="flex flex-col items-center gap-y-2 bg-green-100 rounded-lg p-6 w-full md:w-2/6">
                    <Image
                        src="https://i.ibb.co/PtzJCPp/vendor-2.png"
                        alt="Picture of the author"
                        width={100}
                        height={100} />
                    <p className="text-gray-500">Since 2012</p>
                    <h1 className="text-xl font-bold">Nature Food</h1>
                    <div className="flex">
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                    </div>
                    <p className="inline-block text-gray-600">Got a smooth, buttery spread in your fridge? Chances are good that it is Good Chef. This brand made Lionto list of the most popular grocery brands across the country.</p>
                    <p className=" font-normal text-gray-500 ">
                        <LocationMarkerIcon className="inline-block mb-2 mr-2 h-5 w-5 text-orange-500" />
                        Address:  5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                    <p className="font-normal text-gray-500 ">
                        <PhoneIcon className="inline-block mb-2 mr-2 h-5 w-5 text-orange-500" />
                        Call Us: (+91) - 540-025-124553</p>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-blue-300 ">
                        Contact Us
                        <ArrowSmRightIcon className="h-5 w-5 text-white" />
                    </a>
                </div>
                <div className="w-full">
                    <p className="text-gray-600 mb-4">We found <span className="text-green-600 font-bold">30</span> items for you!</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        {
                            products.map((product) => {
                                const { _id, product_badge, product_title, product_category, product_imageUrl, vendor_name, user_rating, product_price } = product;
                                return (<div key={_id}>

                                    <div className=" max-w-sm bg-white border-gray-300 border rounded-lg hover:drop-shadow-lg dark:bg-white-800 dark:border-gray-300">
                                        <span className="inline-block px-2 py-1  bg-red-500 text-white rounded-full font-semibold uppercase tracking-wide text-xs">{product_badge}</span>
                                        <a href="./">
                                            <Image className="p-8 rounded-t-lg" src={product_imageUrl} alt="product image" height="250" width="250" />
                                        </a>
                                        <div className="px-5 pb-5">
                                            <span className="text-xs  font-bold text-slate-400 hover:text-sky-400 ">{product_category}</span>
                                            <a href="./">
                                                <h3 className="md:text-lg font-semibold tracking-tight text-gray-900 dark:text-black">{product_title.slice(0, 10)}..</h3>
                                            </a>
                                            <ul className="flex items-center mt-2.5 mb-1">
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                    </svg>
                                                </li>

                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                                    </svg>
                                                </li>
                                                <span className=" text-blue-800 text-xs font-semibold mr-2  py-0.5 rounded dark:bg-white dark:text-black ml-1">({user_rating})</span>
                                            </ul>

                                            <div className="mb-2 text-xs font-semibold">
                                                <span>By </span>
                                                <span className="text-green-600">{vendor_name}</span>
                                            </div>
                                            <div className="flex justify-between items-center">

                                                <div className="flex justify-between items-center">
                                                    <span className="text-xl font-bold text-green-500 dark:text-dark">${product_price}</span>
                                                    {/* <span className="text-base line-through font-bold text-slate-400 hover:text-sky-400 pl-2">$35.50</span> */}
                                                </div>
                                                <a href="#" className="text-green-600 bg-green-200 hover:bg-green-500 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-green-200 dark:hover:bg-green-500 dark:focus:ring-green-600 hover:text-white">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </div>
                
                <div>
                </div>
            </div>
        </div>
    );
};

export default VendorShop;

