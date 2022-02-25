import { ArrowSmRightIcon, LocationMarkerIcon, StarIcon } from '@heroicons/react/solid';
import React from "react";

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
        <div className="py-10">
            <h1 className="text-3xl font-semibold text-center mb-4">FoodMart Vendors</h1>
            <div className="w-3/4 md:w-1/3 relative mx-auto text-gray-600 mb-10">
                <input className="border-2 border-gray-300 bg-white h-10 w-full px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search vendors" />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className='flex flex-col my-2 justify-between  md:flex-row lg:flex-row p-4 '>
                    <h2 className="" >We have found <span className="font-semibold text-green-700">{vendors.length}</span> Vendors </h2>

                    <div className="">
                        <form className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row" action="">
                            <div>
                                <label htmlFor="">Show:</label>
                                <select className="mx-2" name="Sort by" id="cars">
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="200">200</option>

                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Category:</label>
                                <select className="mx-2" name="cars" id="cars">
                                    <option value="snacks">snacks</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            {/* <input className='bg-orange-600 px-2 text-white' type="submit" value="Submit" /> */}
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
                                <div className="flex justify-between mb-3">
                                    <div>
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{vendor.name}</h5>
                                        </a>
                                        <div className="flex">
                                            <StarIcon className="h-5 w-5 text-yellow-500" />
                                            <StarIcon className="h-5 w-5 text-yellow-500" />
                                            <StarIcon className="h-5 w-5 text-yellow-500" />
                                            <StarIcon className="h-5 w-5 text-yellow-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="bg-green-200 p-2 text-green-600 rounded-md">{vendor.products_added}</p>
                                    </div>
                                </div>
                                <p className="mb-3 font-normal text-gray-500 ">
                                    <LocationMarkerIcon className="inline-block mb-2 mr-2 h-5 w-5 text-orange-500" />
                                    Address: {vendor.address}</p>
                                <p className="mb-3 font-normal text-gray-500 ">Call Us: {vendor.contact}</p>
                                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-blue-300 ">
                                    Visit Store
                                    <ArrowSmRightIcon className="h-5 w-5 text-white" />
                                </a>
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    );
};

export default AllVendors ;