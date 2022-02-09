import Image from "next/image";
import React from "react";
import apple from "./Images/apple.png"
const PopularProducts = () => {
    return (
        <div className="container mx-auto px-10">
            <div className="flex justify-between pb-5">
                <div>

                    <h1 className="text-2xl font-bold">Popular Products</h1>
                </div>
                <div>
                    <p className=" inline-block ">All</p>
                    <p className=" inline-block px-2 ">Milk & Dairies</p>
                    <p className=" inline-block px-2 ">Coffe & Teas</p>
                    <p className=" inline-block px-2 ">Pet Foods</p>
                    <p className=" inline-block px-2 ">Meats</p>
                    <p className=" inline-block px-2 ">Vegetables</p>
                    <p className=" inline-block px-2 ">Fruits</p>

                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">


                <div>
                    <div className=" max-w-sm bg-white rounded-lg shadow-md dark:bg-white-800 dark:border-gray-700">
                        <span className="inline-block px-2 py-1  bg-red-500 text-white rounded-full font-semibold uppercase tracking-wide text-xs">Hot</span>
                        <a href="./">
                            <Image className="p-8 rounded-t-lg" src={apple} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <span className="text-xs  font-bold text-slate-400 hover:text-sky-400 ">snack</span>
                            <a href="./">
                                <h3 className="md:text-lg font-semibold tracking-tight text-gray-900 dark:text-black">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h3>
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
                                <span className=" text-blue-800 text-xs font-semibold mr-2  py-0.5 rounded dark:bg-white dark:text-black ml-1">(4.0)</span>
                            </ul>

                         <div className="mb-2 text-xs font-semibold">
                                <span>By </span>
                                <span className="text-green-600">Stouffer</span>
                            </div>
                            <div className="flex justify-between items-center">

                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-green-500 dark:text-dark">$599</span>
                                    <span className="text-base line-through font-bold text-slate-400 hover:text-sky-400 pl-2">$600</span>
                                </div>
                                <a href="#" className="text-green-600 bg-green-200 hover:bg-green-500 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-green-200 dark:hover:bg-green-500 dark:focus:ring-green-600 hover:text-white">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-white-800 dark:border-gray-700">
                        <span className="inline-block px-2 py-1  bg-blue-500 text-white rounded-full font-semibold uppercase tracking-wide text-xs">Sale</span>
                        <a href="./">
                            <Image className="p-8 rounded-t-lg" src={apple} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <span className="text-xs  font-bold text-slate-400 hover:text-sky-400 ">snack</span>
                            <a href="./">
                                <h3 className="md:text-lg font-semibold tracking-tight text-gray-900 dark:text-black">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h3>
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
                                <span className=" text-blue-800 text-xs font-semibold mr-2  py-0.5 rounded dark:bg-white dark:text-black ml-1">(4.0)</span>
                            </ul>
                            <div className="mb-2 text-xs font-semibold">
                                <span>By </span>
                                <span className="text-green-600">Stouffer</span>
                            </div>
                            <div className="flex justify-between items-center">

                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-green-500 dark:text-dark">$599</span>
                                    <span className="text-base line-through font-bold text-slate-400 hover:text-sky-400 pl-2">$600</span>
                                </div>
                                <a href="#" className="text-green-600 bg-green-200 hover:bg-green-500 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-green-200 dark:hover:bg-green-500 dark:focus:ring-green-600 hover:text-white">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-white-800 dark:border-gray-700">
                        <span className="inline-block px-2 py-1 leading-none bg-green-500 text-white rounded-full font-semibold uppercase tracking-wide text-xs">New</span>
                        <a href="./">
                            <Image className="p-8 rounded-t-lg" src={apple} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <span className="text-xs  font-bold text-slate-400 hover:text-sky-400 ">snack</span>
                            <a href="./">
                                <h3 className="md:text-lg font-semibold tracking-tight text-gray-900 dark:text-black">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h3>
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
                                <span className=" text-blue-800 text-xs font-semibold mr-2  py-0.5 rounded dark:bg-white dark:text-black ml-1">(4.0)</span>
                            </ul>

                         <div className="mb-2 text-xs font-semibold">
                                <span>By </span>
                                <span className="text-green-600">Stouffer</span>
                            </div>
                            <div className="flex justify-between items-center">

                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-green-500 dark:text-dark">$599</span>
                                    <span className="text-base line-through font-bold text-slate-400 hover:text-sky-400 pl-2">$600</span>
                                </div>
                                <a href="#" className="text-green-600 bg-green-200 hover:bg-green-500 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-green-200 dark:hover:bg-green-500 dark:focus:ring-green-600 hover:text-white">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-white-800 dark:border-gray-700">
                        <span className="inline-block px-2 py-1  text-white rounded-full font-semibold uppercase tracking-wide text-xs"> </span>
                        <a href="./">
                            <Image className="p-8 rounded-t-lg" src={apple} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <span className="text-xs  font-bold text-slate-400 hover:text-sky-400 ">snack</span>
                            <a href="./">
                                <h3 className="md:text-lg font-semibold tracking-tight text-gray-900 dark:text-black">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h3>
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
                                <span className=" text-blue-800 text-xs font-semibold mr-2  py-0.5 rounded dark:bg-white dark:text-black ml-1">(4.0)</span>
                            </ul>

                         <div className="mb-2 text-xs font-semibold">
                                <span>By </span>
                                <span className="text-green-600">Stouffer</span>
                            </div>
                            <div className="flex justify-between items-center">

                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-green-500 dark:text-dark">$599</span>
                                    <span className="text-base line-through font-bold text-slate-400 hover:text-sky-400 pl-2">$600</span>
                                </div>
                                <a href="#" className="text-green-600 bg-green-200 hover:bg-green-500 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-green-200 dark:hover:bg-green-500 dark:focus:ring-green-600 hover:text-white">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-white-800 dark:border-gray-700">
                        <span className="inline-block px-2 py-1 leading-none bg-orange-500 text-white rounded-full font-semibold uppercase tracking-wide text-xs">-14%</span>
                        <a href="./">
                            <Image className="p-8 rounded-t-lg" src={apple} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <span className="text-xs  font-bold text-slate-400 hover:text-sky-400 ">snack</span>
                            <a href="./">
                                <h3 className="md:text-lg font-semibold tracking-tight text-gray-900 dark:text-black">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h3>
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
                                <span className=" text-blue-800 text-xs font-semibold mr-2  py-0.5 rounded dark:bg-white dark:text-black ml-1">(4.0)</span>
                            </ul>

                         <div className="mb-2 text-xs font-semibold">
                                <span>By </span>
                                <span className="text-green-600">Stouffer</span>
                            </div>
                            <div className="flex justify-between items-center">

                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-green-500 dark:text-dark">$599</span>
                                    <span className="text-base line-through font-bold text-slate-400 hover:text-sky-400 pl-2">$600</span>
                                </div>
                                <a href="#" className="text-green-600 bg-green-200 hover:bg-green-500 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-green-200 dark:hover:bg-green-500 dark:focus:ring-green-600 hover:text-white">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-white-800 dark:border-gray-700">
                        <a href="./">
                            <Image className="p-8 rounded-t-lg" src={apple} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <span className="text-xs  font-bold text-slate-400 hover:text-sky-400 ">snack</span>
                            <a href="./">
                                <h3 className="md:text-lg font-semibold tracking-tight text-gray-900 dark:text-black">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h3>
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
                                <span className=" text-blue-800 text-xs font-semibold mr-2  py-0.5 rounded dark:bg-white dark:text-black ml-1">(4.0)</span>
                            </ul>

                         <div className="mb-2 text-xs font-semibold">
                                <span>By </span>
                                <span className="text-green-600">Stouffer</span>
                            </div>
                            <div className="flex justify-between items-center">

                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-green-500 dark:text-dark">$599</span>
                                    <span className="text-base line-through font-bold text-slate-400 hover:text-sky-400 pl-2">$600</span>
                                </div>
                                <a href="#" className="text-green-600 bg-green-200 hover:bg-green-500 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-green-200 dark:hover:bg-green-500 dark:focus:ring-green-600 hover:text-white">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-white-800 dark:border-gray-700">
                        <a href="./">
                            <Image className="p-8 rounded-t-lg" src={apple} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <span className="text-xs  font-bold text-slate-400 hover:text-sky-400 ">snack</span>
                            <a href="./">
                                <h3 className="md:text-lg font-semibold tracking-tight text-gray-900 dark:text-black">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h3>
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
                                <span className=" text-blue-800 text-xs font-semibold mr-2  py-0.5 rounded dark:bg-white dark:text-black ml-1">(4.0)</span>
                            </ul>

                         <div className="mb-2 text-xs font-semibold">
                                <span>By </span>
                                <span className="text-green-600">Stouffer</span>
                            </div>
                            <div className="flex justify-between items-center">

                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-green-500 dark:text-dark">$599</span>
                                    <span className="text-base line-through font-bold text-slate-400 hover:text-sky-400 pl-2">$600</span>
                                </div>
                                <a href="#" className="text-green-600 bg-green-200 hover:bg-green-500 focus:ring-4 focus:ring-green-600 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-green-200 dark:hover:bg-green-500 dark:focus:ring-green-600 hover:text-white">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default PopularProducts;