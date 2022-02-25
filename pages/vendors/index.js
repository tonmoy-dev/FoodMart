import { ArrowSmRightIcon, ChevronRightIcon, HomeIcon, LocationMarkerIcon, PhoneIcon, StarIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';

const AllVendors = () => {
    const vendors = [
        {
            name: "Nature Food",
            subtitle:"2012",
            icon: "https://i.ibb.co/RTdBnft/nature-food-vendor-1.png",
            products_added: "380 products",
            address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
            contact: "(+91) - 540-025-124553",
            user_rating:"4" 
        },
        {
            name: "Red Baron",
            subtitle:"2015",
            icon: "https://i.ibb.co/hcHht4W/totino-pizza-vendor-9.png",
            products_added: "280 products",
            address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
            contact: "(+91) - 540-025-124553",
            user_rating:"4" 
        },
        {
            name: "TotinosPizza",
            subtitle:"2012",
            icon: "https://i.ibb.co/RTdBnft/nature-food-vendor-1.png",
            products_added: "380 products",
            address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
            contact: "(+91) - 540-025-124553",
            user_rating:"4" 
        },
        {
            name: "Nature Shop",
            subtitle:"2016",
            icon: "https://i.ibb.co/hcHht4W/totino-pizza-vendor-9.png",
            products_added: "500 products",
            address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
            contact: "(+91) - 540-025-124553",
            user_rating:"4" 
        },
        {
            name: "Nature Foods 5",
            subtitle:"2012",
            icon: "https://i.ibb.co/PtzJCPp/vendor-2.png",
            products_added: "380 products",
            address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
            contact: "(+91) - 540-025-124553",
            user_rating:"4" 
        },
        {
            name: "Nature Foods 6",
            subtitle:"2012",
            icon: "https://i.ibb.co/PtzJCPp/vendor-2.png",
            products_added: "380 products",
            address: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
            contact: "(+91) - 540-025-124553",
            user_rating:"4" 
        },
    ]
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-10">
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
                                <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                                    Vendors
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="py-3">
                <h2 className="text-4xl mb-4 text-center font-semibold text-gray-900">Vendors</h2>
                <div className="w-3/4 md:w-1/3 relative mx-auto text-gray-600 mb-10">
                    <input className="border-2 border-gray-300 bg-white h-10 w-full px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search vendors" />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                        <AiOutlineSearch className="h-5 w-5" />
                    </button>
                </div>
                <div className='flex flex-col my-2 justify-between  md:flex-row lg:flex-row p-4 '>
                    <h2 className="" >We have found <span className="font-semibold text-green-700">{vendors.length}</span> Vendors </h2>

                    <div>
                        <form className="flex justify-between my-3 md:my-0" action="">
                            <div>
                                <label htmlFor="">Show:</label>
                                <select className="mx-2" name="Sort by" id="numbers">
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="200">200</option>

                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Category:</label>
                                <select className="mx-2" name="category" id="category">
                                    <option value="Drinks">Drinks</option>
                                    <option value="Fruits">Fruits</option>
                                    <option value="Snacks">Snacks</option>
                                    <option value="Fastfood">Fastfood</option>
                                </select>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                
                    {
                        vendors.map(vendor => (
                    
                            <div vendor={vendor} kev={vendor.name} className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md ">
                                <a href="#">
                                    <img className="rounded-t-lg" src={vendor.icon} alt="" />
                                </a>
                                <div className="p-5">
                                    <p className="text-sm">Since {vendor.subtitle}</p>
                                    <div>
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{vendor.name}</h5>
                                        </a>
                                    </div>
                                    <div className="flex mb-3">
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                        <StarIcon className="h-5 w-5 text-yellow-500" />
                                    </div>
                                    
                                    <p className="mb-3 font-normal text-gray-500 ">
                                        <LocationMarkerIcon className="inline-block mb-2 mr-2 h-5 w-5 text-orange-500" />
                                        Address: {vendor.address}</p>
                                    <p className="mb-3 font-normal text-gray-500 ">
                                        <PhoneIcon className="inline-block mb-2 mr-2 h-5 w-5 text-orange-500" />
                                        Call Us: {vendor.contact}</p>
                                    <div className="flex justify-between items-center">
                                        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-blue-300 ">
                                            Visit Store
                                            <ArrowSmRightIcon className="h-5 w-5 text-white" />
                                        </a>
                                        <div>
                                            <p className="bg-green-200 p-2 text-green-600 rounded-md">{vendor.products_added}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllVendors ;