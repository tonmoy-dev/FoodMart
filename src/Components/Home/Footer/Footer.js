import {
    faFacebook, faInstagram, faLinkedin, faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faLocationDot, faPhoneVolume
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import logo from "../../../../public/logo2.png";
import card from "../../../assets/payment.png";

const Footer = () => {
    const router = useRouter();
    if (!router?.pathname?.includes("dashboard"))
        return (
            <div>
                <div className="bg-gray-50 py-12">
                    <div className="container py-4 mx-auto">
                        <div className="px-4 md:px-0 lg:flex">
                            <div className="w-full -mx-6 lg:w-2/6">
                                <div className="px-4">
                                    <div className="text-left md:pr-6 pr-0">
                                        <div className="flex flex-row gap-2 mb-4 ml-1 md:ml-0">
                                            <Image
                                                src={logo}
                                                alt="Picture of the author"
                                                width="190px"
                                                height="60px"
                                                priority
                                            />
                                        </div>
                                        <p className="max-w-md ml-2 md:ml-0 md:pr-10 mt-2 text-black ">
                                            With more than 15 years of
                                            experience we can proudly say we are
                                            one of the best in business, a
                                            trusted supplier for more than 1000
                                            companies...
                                        </p>
                                    </div>
                                    
                                    <div className="flex mt-4">
                                        <a className="md:ml-0 ml-2 mr-3" href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                                className="text-2xl w-5 h-5 text-blue-600 hover:text-orange-500"
                                            />
                                        </a>
                                        <a className="mr-3" href="https://www.linkedin.com/" rel="noreferrer" target="_blank"> <FontAwesomeIcon
                                            icon={faLinkedin}
                                            className="text-2xl w-5 h-5 text-gray-600 hover:text-orange-500"
                                        />
                                        </a>
                                        <a className="mr-3" href="https://twitter.com/" rel="noreferrer" target="_blank">
                                            <FontAwesomeIcon
                                                icon={faTwitter}
                                                className="text-2xl w-5 h-5 text-blue-400 hover:text-orange-500"
                                            />
                                        </a>
                                        <a className="mr-3" href="https://www.instagram.com/" rel="noreferrer" target="_blank">
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                                className="text-2xl w-5 h-5 text-red-500 hover:text-orange-500"
                                            />
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 lg:mt-0 lg:flex-1">
                                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                                    <div className="pt-6">
                                        <h3 className="primary-color font-bold capitalize  text-left ">
                                            information
                                        </h3>
                                        <button className="block mt-4 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/contents/about-us">
                                                What is FoodMart?
                                            </Link>
                                        </button>

                                        <button className="block mt-3 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/contents/about-us">
                                                About Us
                                            </Link>
                                        </button>
                                        <button className="block mt-3 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/contents/contact-us">
                                                Contact Us
                                            </Link>
                                        </button>
                                        <button className="block mt-3 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/login">Login</Link>
                                        </button>
                                    </div>

                                    <div className="pt-6">
                                        <h3 className="primary-color font-bold capitalize  text-left ">
                                            services
                                        </h3>
                                        <button className="block mt-4 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/">Categories</Link>
                                        </button>
                                        <button className="block mt-3 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/products/all-products">
                                                Products
                                            </Link>
                                        </button>
                                        <button className="block mt-3 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/vendors">Vendors</Link>
                                        </button>
                                        <button className="block mt-3 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/blogs">Blogs</Link>
                                        </button>
                                    </div>

                                    <div className="pt-6">
                                        <h3 className="primary-color font-bold capitalize text-left ">
                                            help & faqs
                                        </h3>
                                        <button className="block mt-4 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/contents/payment-policy">Payment Policy</Link>
                                        </button>

                                        <button className="block mt-3 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/contents/faq">Faqs</Link>
                                        </button>

                                        <button className="block mt-3 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/contents/privacy-policy">
                                                Privacy & Policy
                                            </Link>
                                        </button>
                                        <button className="block mt-3 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/contents/terms-conditions">
                                                Terms & Conditions
                                            </Link>
                                        </button>
                                    </div>

                                    <div className="pt-6">
                                        <h3 className="primary-color font-bold capitalize">
                                            contact info
                                        </h3>
                                        <div className="flex items-center mt-4">
                                            <FontAwesomeIcon
                                                icon={faPhoneVolume}
                                                className="text-xl w-4 h-4 text-gray-500 hover:text-orange-500 mr-3"
                                            />
                                            <span className="block text-sm text-black hover:underline">
                                                +1 235 7859 2525
                                            </span>
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <FontAwesomeIcon
                                                icon={faEnvelope}
                                                className="text-xl w-4 h-4 text-gray-500 hover:text-orange-500 mr-3"
                                            />
                                            
                                            <a href="mailto:food@exampl.com">
                                                <span className="block text-sm primary-color font-semibold   hover:underline">foodmart@gmail.com</span>
                                            </a>
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <FontAwesomeIcon
                                                icon={faLocationDot}
                                                className="text-xl w-5 h-5 text-gray-500 hover:text-orange-500 mr-3"
                                            />
                                            <span className="block text-sm primary-color font-semibold   hover:underline">
                                                Dhaka, Bangladesh
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex md:flex-row flex-col justify-between items-center px-6 primary-bg-color border-t-2 py-3">
                        <div className="flex md:flex-row flex-col">
                            <p className="text-center font-semibold text-xs text-white">
                                Copyright © FoodMart 2022 - All rights reserved
                            </p>
                            <h3 className="text-center text-xs text-white font-semibold md:pl-3 mb-4 md:mb-0">
                                <span className="pr-2">||</span> Powered by{" "}
                                <span className="text-white">
                                    FoodMart Team
                                </span>
                            </h3>
                        </div>
                        <Image
                            src={card}
                            alt="payment type image"
                            width={280}
                            height={22}
                            className="payment-image"
                        />
                    </div>
                </div>
            </div>
        );
    return null;
};

export default Footer;
