import Image from "next/image";
import React from "react";
import banner1 from "../../../assets/banner-1.png";
import banner2 from "../../../assets/banner-2.png";
import banner3 from "../../../assets/banner-3.png";
import banner4 from "../../../assets/banner-4.jpg";
import banner5 from "../../../assets/banner-5.jpg";
import banner6 from "../../../assets/banner-6.jpg";
import banner7 from "../../../assets/banner-7.jpg";
import banner8 from "../../../assets/banner-8.jpg";
import banner9 from "../../../assets/banner-9.jpg";
import ctBanner from "../../../assets/categoryBanner.jpg";

const Categories = () => {
    return (
        <>
            <div className="py-16 mx-5">
                <h1 className="text-center text-black font-bold text-3xl pb-2">
                    Shop by Categories
                </h1>
                <p className="text-center text-gray-600 text-xl pb-7">
                    Trusted and powerful eCommerce store for all
                </p>
                <div className="md:flex justify-center items-center md:mx-10">
                    <div className="flex h-56 md:h-full md:w-1/4 md:mr-5 mb-7 md:mb-0 rounded-lg">
                        <Image
                            src={ctBanner}
                            alt="category banner"
                            className="object-cover h-full rounded-lg"
                        />
                    </div>
                    <div className="flex md:w-3/4">
                        <div className="grid grid-cols md:grid-cols-3 gap-5 drop-shadow-md">
                            <div className="relative overflow-hidden w-full h-full rounded-lg">
                                <div>
                                    <Image
                                        src={banner1}
                                        alt="Avatar"
                                        className="object-cover w-full h-full rounded-lg"
                                    />
                                    <p className="absolute overflow-hidden w-full h-full top-7 left-10 flex  text-orange-600 text-xl">
                                        Fruit & Vegetables
                                    </p>
                                </div>
                                <div className="absolute overflow-hidden hover:overflow-hidden w-full h-full top-0 left-0 bg-orange-300 text-white text-xs flex flex-col justify-center items-center transition-all duration-500 -translate-x-12 hover:translate-x-0 opacity-0 hover:opacity-90">
                                    <button className="text-xl bg-orange-500 py-2 px-4 rounded opacity-100">
                                        Details
                                    </button>
                                    <p className="text-xl leading-5 text-gray-700 w-3/4 text-center pt-4">
                                        This is a text this is a text this is a
                                        text this is a text
                                    </p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden w-full h-full rounded-lg">
                                <Image
                                    src={banner2}
                                    alt="Avatar"
                                    className="object-cover w-full h-full transition-colors rounded-lg"
                                />
                                <p className="absolute overflow-hidden w-full h-full top-7 left-10 flex  text-orange-600 text-xl">
                                    Breakfast & Dairy
                                </p>
                                <div className="absolute overflow-hidden hover:overflow-hidden w-full h-full top-0 left-0 bg-orange-300 text-white text-xs flex flex-col justify-center items-center transition-all duration-500 -translate-x-12 hover:translate-x-0 opacity-0 hover:opacity-90">
                                    <button className="text-xl bg-orange-500 py-2 px-4 rounded opacity-100">
                                        Details
                                    </button>
                                    <p className="text-xl leading-5 text-gray-700 w-3/4 text-center pt-4">
                                        This is a text this is a text this is a
                                        text this is a text
                                    </p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden w-full h-full rounded-lg">
                                <Image
                                    src={banner4}
                                    alt="Avatar"
                                    className="object-cover w-full h-full transition-colors rounded-lg"
                                />
                                <p className="absolute overflow-hidden w-full h-full top-7 left-10 flex  text-orange-600 text-xl">
                                    Meat & Seafood
                                </p>
                                <div className="absolute overflow-hidden hover:overflow-hidden w-full h-full top-0 left-0 bg-orange-300 text-white text-xs flex flex-col justify-center items-center transition-all duration-500 -translate-x-12 hover:translate-x-0 opacity-0 hover:opacity-90">
                                    <button className="text-xl bg-orange-500 py-2 px-4 rounded opacity-100">
                                        Details
                                    </button>
                                    <p className="text-xl leading-5 text-gray-700 w-3/4 text-center pt-4">
                                        This is a text this is a text this is a
                                        text this is a text
                                    </p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden w-full h-full rounded-lg">
                                <Image
                                    src={banner3}
                                    alt="Avatar"
                                    className="object-cover w-full h-full transition-colors rounded-lg"
                                />
                                <p className="absolute overflow-hidden w-full h-full top-7 left-10 flex  text-orange-600 text-xl">
                                    Vegetables
                                </p>
                                <div className="absolute overflow-hidden hover:overflow-hidden w-full h-full top-0 left-0 bg-orange-300 text-white text-xs flex flex-col justify-center items-center transition-all duration-500 -translate-x-12 hover:translate-x-0 opacity-0 hover:opacity-90">
                                    <button className="text-xl bg-orange-500 py-2 px-4 rounded opacity-100">
                                        Details
                                    </button>
                                    <p className="text-xl leading-5 text-gray-700 w-3/4 text-center pt-4">
                                        This is a text this is a text this is a
                                        text this is a text
                                    </p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden w-full h-full rounded-lg">
                                <Image
                                    src={banner5}
                                    alt="Avatar"
                                    className="object-cover w-full h-full transition-colors rounded-lg"
                                />
                                <p className="absolute overflow-hidden w-full h-full top-7 left-10 flex  text-orange-600 text-xl">
                                    Vegetables
                                </p>
                                <div className="absolute overflow-hidden hover:overflow-hidden w-full h-full top-0 left-0 bg-orange-300 text-white text-xs flex flex-col justify-center items-center transition-all duration-500 -translate-x-12 hover:translate-x-0 opacity-0 hover:opacity-90">
                                    <button className="text-xl bg-orange-500 py-2 px-4 rounded opacity-100">
                                        Details
                                    </button>
                                    <p className="text-xl leading-5 text-gray-700 w-3/4 text-center pt-4">
                                        This is a text this is a text this is a
                                        text this is a text
                                    </p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden w-full h-full rounded-lg">
                                <Image
                                    src={banner6}
                                    alt="Avatar"
                                    className="object-cover w-full h-full transition-colors rounded-lg"
                                />
                                <p className="absolute overflow-hidden w-full h-full top-7 left-10 flex  text-orange-600 text-xl">
                                    Vegetables
                                </p>
                                <div className="absolute overflow-hidden hover:overflow-hidden w-full h-full top-0 left-0 bg-orange-300 text-white text-xs flex flex-col justify-center items-center transition-all duration-500 -translate-x-12 hover:translate-x-0 opacity-0 hover:opacity-90">
                                    <button className="text-xl bg-orange-500 py-2 px-4 rounded opacity-100">
                                        Details
                                    </button>
                                    <p className="text-xl leading-5 text-gray-700 w-3/4 text-center pt-4">
                                        This is a text this is a text this is a
                                        text this is a text
                                    </p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden w-full h-full rounded-lg">
                                <Image
                                    src={banner7}
                                    alt="Avatar"
                                    className="object-cover w-full h-full transition-colors rounded-lg"
                                />
                                <p className="absolute overflow-hidden w-full h-full top-7 left-10 flex  text-orange-600 text-xl">
                                    Vegetables
                                </p>
                                <div className="absolute overflow-hidden hover:overflow-hidden w-full h-full top-0 left-0 bg-orange-300 text-white text-xs flex flex-col justify-center items-center transition-all duration-500 -translate-x-12 hover:translate-x-0 opacity-0 hover:opacity-90">
                                    <button className="text-xl bg-orange-500 py-2 px-4 rounded opacity-100">
                                        Details
                                    </button>
                                    <p className="text-xl leading-5 text-gray-700 w-3/4 text-center pt-4">
                                        This is a text this is a text this is a
                                        text this is a text
                                    </p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden w-full h-full rounded-lg">
                                <Image
                                    src={banner8}
                                    alt="Avatar"
                                    className="object-cover w-full h-full transition-colors rounded-lg"
                                />
                                <p className="absolute overflow-hidden w-full h-full top-7 left-10 flex  text-orange-600 text-xl">
                                    Vegetables
                                </p>
                                <div className="absolute overflow-hidden hover:overflow-hidden w-full h-full top-0 left-0 bg-orange-300 text-white text-xs flex flex-col justify-center items-center transition-all duration-500 -translate-x-12 hover:translate-x-0 opacity-0 hover:opacity-90">
                                    <button className="text-xl bg-orange-500 py-2 px-4 rounded opacity-100">
                                        Details
                                    </button>
                                    <p className="text-xl leading-5 text-gray-700 w-3/4 text-center pt-4">
                                        This is a text this is a text this is a
                                        text this is a text
                                    </p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden w-full h-full rounded-lg">
                                <Image
                                    src={banner9}
                                    alt="Avatar"
                                    className="object-cover w-full h-full transition-colors rounded-lg"
                                />
                                <p className="absolute overflow-hidden w-full h-full top-7 left-10 flex  text-orange-600 text-xl">
                                    Vegetables
                                </p>
                                <div className="absolute overflow-hidden hover:overflow-hidden w-full h-full top-0 left-0 bg-orange-300 text-white text-xs flex flex-col justify-center items-center transition-all duration-500 -translate-x-12 hover:translate-x-0 opacity-0 hover:opacity-90">
                                    <button className="text-xl bg-orange-500 py-2 px-4 rounded opacity-100">
                                        Details
                                    </button>
                                    <p className="text-xl leading-5 text-gray-700 w-3/4 text-center pt-4">
                                        This is a text this is a text this is a
                                        text this is a text
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;
