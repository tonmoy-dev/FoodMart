import Image from 'next/image';
import React from "react";
import { FiChevronDown } from 'react-icons/fi';

const DropdownNavMenu = () => {
    return (
        <>
            <style jsx>{`
        .megaMenu {
            display: none;
            left: 0;
            position: absolute;
            text-align: left;
            width: 100%;
            margin-top: -12px;
        }

        .hoverable {
            position: static;
            display: block;
        }

        .hoverable:hover .megaMenu {
            display: block;
        }
        .deals:hover .deals-text {
            color: orange;
        }
        .right-nav:hover .nav-icon-btn{
            color: black;
        }
    `}</style>
            <div className="hoverable hoverable-menu transition">
                <a
                    href="#"
                    className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-semibold"
                >
                    <div className='flex flex-row items-center'>Menu <FiChevronDown className='pt-1 w-5 h-5' /></div>
                </a>

                <div className="megaMenu transition px-5 bg-white mb-16 rounded-lg shadow-md">
                    <div className="container w-full flex flex-wrap justify-between sm:mb-0 bg-white ">
                        <div className="w-full text-green-500 mb-2">
                            <h2 className=" hidden font-semibold text-3xl">
                                FoodMart Mega Menu
                            </h2>
                        </div>
                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 pb-6 pt-6 lg:pt-3">
                            <div className="flex items-center">
                                <h3 className="text-xl text-green-500 hover:text-orange-400 font-semibold mb-2"> Fruit &amp; Vegetables
                                </h3>
                            </div>
                            <div className="grid grid-rows-5 grid-flow-col gap-3 py-3 font-medium">
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Fresh Fruits
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Fresh Vegetables
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Fresh Fruits
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Fresh Vegetables
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Fresh Fruits
                                    </a>
                                </div>
                            </div>
                        </ul>
                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 pb-6 pt-6 lg:pt-3">
                            <div className="flex items-center">
                                <h3 className="text-xl text-green-500 hover:text-orange-400 font-semibold mb-2">
                                Beverages
                                </h3>
                            </div>
                            <div className="grid grid-rows-5 grid-flow-col gap-3 py-3 font-medium">
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Coffee
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Juice
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Soft Drinks
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Coffee
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Soft Drinks
                                    </a>
                                </div>
                            </div>
                        </ul>
                        <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 pb-6 pt-6 lg:pt-3">
                            <div className="flex items-center">
                                <h3 className="text-xl text-green-500 hover:text-orange-400 font-semibold mb-2">
                                Snacks 
                                </h3>
                            </div>
                            <div className="grid grid-rows-5 grid-flow-col gap-3 py-3 font-medium">
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Noodles
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Candy &amp; Chocolate
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Noodles
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Candy &amp; Chocolate
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-green-500"
                                    >
                                        Candy &amp; Chocolate
                                    </a>
                                </div>
                            </div>
                        </ul>
                        <ul className=" flex items-center px-4 sm:w-1/2 lg:w-auto pb-6 pt-6 lg:pt-3">
                            <div className="w-full relative">
                                <div className="deals z-10 absolute top-0 left-0 p-6 w-full">
                                    <div className="flex items-center justify-between w-full">
                                        <h2 className="deals-text text-2xl font-semibold text-green-500 ">
                                            Hot Deals
                                        </h2>
                                        <div className="text-lg text-white  w-20 h-20 mx-4 rounded-full flex items-center justify-center font-semibold bg-orange-500">
                                            70% <br />{" "}
                                            Off
                                        </div>
                                    </div>
                                    <p className="w-32 text-2xl text-gray-600 font-semibold mb-5">
                                        Dont miss
                                        trending
                                    </p>
                                    <button className="deals-button bg-green-500 hover:bg-orange-500 text-white font-semibold text-xl rounded-lg px-4 py-2 ">
                                        Shop Now
                                    </button>
                                </div>
                                <Image
                                    className="z-0"
                                    src="https://i.ibb.co/sPmgYLZ/banner-menu.png"
                                    alt="Picture of the author"
                                    width="420px"
                                    height="260px"
                                />
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DropdownNavMenu;