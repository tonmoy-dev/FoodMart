import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faYoutube,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
    faPhoneVolume,
    faEnvelope,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../../public/logo2.png";
import card from "../../../assets/payment.png";

const Footer = () => {
    const router = useRouter();
    if (!router?.pathname?.includes("dashboard"))
        return (
            <div>
                <div className="bg-gray-50 py-12">
                    <div className="container py-4 mx-4 md:mx-auto lg:mx-auto">
                        <div className="lg:flex">
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
                                    <h2 className="text-xl font-semibold mt-4 ml-2 md:ml-0">
                                        Get in touch
                                    </h2>
                                    <div className="flex mt-4">
                                        <FontAwesomeIcon
                                            icon={faFacebook}
                                            className="text-2xl text-gray-500 hover:text-orange-500 ml-2 mr-3"
                                        />
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            className="text-2xl text-gray-500 hover:text-orange-500 mr-3"
                                        />
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                            className="text-2xl text-gray-500 hover:text-orange-500 mr-3"
                                        />
                                        <FontAwesomeIcon
                                            icon={faYoutube}
                                            className="text-2xl text-gray-500 hover:text-orange-500 mr-3"
                                        />
                                        <FontAwesomeIcon
                                            icon={faInstagram}
                                            className="text-2xl text-gray-500 hover:text-orange-500 mr-3"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 lg:mt-0 lg:flex-1">
                                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                                    <div className="pt-6">
                                        <h3 className="text-green-500 font-bold capitalize  text-left ">
                                            information
                                        </h3>
                                        <button className="block mt-4 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/contents/about-us">
                                                What is FoodMart?
                                            </Link>
                                        </button>

                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/contents/about-us">
                                                About Us
                                            </Link>
                                        </button>
                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/contents/contact-us">
                                                Contact Us
                                            </Link>
                                        </button>
                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/login">Login</Link>
                                        </button>
                                    </div>

                                    <div className="pt-6">
                                        <h3 className="text-green-500 font-bold capitalize  text-left ">
                                            services
                                        </h3>
                                        <button className="block mt-4 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/">Categories</Link>
                                        </button>
                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/products/all-products">
                                                Products
                                            </Link>
                                        </button>
                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/vendors">Vendors</Link>
                                        </button>
                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/blogs">Blogs</Link>
                                        </button>
                                    </div>

                                    <div className="pt-6">
                                        <h3 className="text-green-500 font-bold capitalize text-left ">
                                            help & faqs
                                        </h3>
                                        <button className="block mt-4 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/">Payment Policy</Link>
                                        </button>

                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/contents/faq">Faqs</Link>
                                        </button>

                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/">
                                                Privacy & Policy
                                            </Link>
                                        </button>
                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/">
                                                Terms & Conditions
                                            </Link>
                                        </button>
                                    </div>

                                    <div className="pt-6">
                                        <h3 className="text-green-500 font-bold capitalize">
                                            contact info
                                        </h3>
                                        <div className="flex items-center mt-4">
                                            <FontAwesomeIcon
                                                icon={faPhoneVolume}
                                                className="text-xl text-gray-500 hover:text-orange-500 mr-3"
                                            />
                                            <span className="block text-sm text-black   hover:underline">
                                                +1 235 7859 2525
                                            </span>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <FontAwesomeIcon
                                                icon={faEnvelope}
                                                className="text-xl text-gray-500 hover:text-orange-500 mr-3"
                                            />
                                            <span className="block text-sm text-green-500 font-semibold   hover:underline">
                                                foodmart@gmail.com
                                            </span>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <FontAwesomeIcon
                                                icon={faLocationDot}
                                                className="text-xl text-gray-500 hover:text-orange-500 mr-3"
                                            />
                                            <span className="block text-sm text-green-500 font-semibold   hover:underline">
                                                33-Dhanmondi, Dhaka, Bangladesh
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex flex-row items-center my-8">
              <div className="border-b-0 border-green-700 opacity-20 w-3/6 mr-4"></div>
              <div className="flex flex-row gap-2">
                <div className="text-right">
                  <Image src={card} alt="" width={500} height={50} />
                </div>
              </div>
              <div className="border-b-0 border-green-700 opacity-20 w-3/6 ml-4"></div>
            </div> */}
                    </div>
                </div>
                <div>
                    <div className="flex md:flex-row flex-col justify-between items-center px-6 primary-bg-color border-t-2 py-4">
                        <div className="flex md:flex-row flex-col">
                            <p className="text-center text-sm text-white">
                                Copyright© FoodMart 2022 - All rights reserved
                            </p>
                            <h3 className="text-center text-sm text-white font-semibold md:pl-3 mb-4 md:mb-0">
                                <span className="pr-2">||</span> Powered by{" "}
                                <span className="text-white">
                                    FoodMart Team
                                </span>
                            </h3>
                        </div>
                        <Image
                            src={card}
                            alt="payment image"
                            width={400}
                            height={35}
                        />
                    </div>
                </div>
            </div>
        );
    return null;
};

export default Footer;
