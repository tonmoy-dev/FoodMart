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
import logo from "../../../../public/Logo.png";
import card from "../../../../public/card.png";
//import img1 from '../../../../public/'

const Footer = () => {
    const router = useRouter();
    if (!router?.pathname?.includes("dashboard"))
        return (
            <div>
                <div className="bg-gray-100 pt-5">
                    <div className="container px-6 py-4 mx-auto">
                        <div className="lg:flex">
                            <div className="w-full -mx-6 lg:w-2/6">
                                <div className="px-6">
                                    <div className="text-left md:pr-6 pr-0">
                                        <div className="flex flex-row gap-2">
                                            <Image
                                                src={logo}
                                                alt="Picture of the author"
                                                width={230}
                                                height={90}
                                                priority
                                            />
                                        </div>
                                        <p className="max-w-md md:pr-10 mt-2 text-black ">
                                            With more than 15 years of
                                            experience we can proudly say we are
                                            one of the best in business, a
                                            trusted supplier for more than 1000
                                            companies...
                                        </p>
                                    </div>
                                    <div className="flex mt-4 -mx-2">
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
                                        <h3 className="text-green-500 font-bold uppercase  text-left ">
                                            INFORMATION
                                        </h3>
                                        <button className="block mt-4 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/contents/about-us">
                                                What is FoodMart?
                                            </Link>
                                        </button>
                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            Requisites
                                        </button>
                                        <button className="block mt-2 text-sm text-black   hover:underline">
                                            <Link href="/vendors">Vendors</Link>
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
                                    </div>

                                    <div className="pt-6">
                                        <h3 className="text-green-500 font-bold uppercase  text-left ">
                                            SERVICES
                                        </h3>
                                        <button className="block mt-4 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/">Delivery</Link>
                                        </button>
                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/checkout">
                                                Payment
                                            </Link>
                                        </button>
                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/">Public offer</Link>
                                        </button>
                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/">
                                                Purchase returns
                                            </Link>
                                        </button>
                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/">Booking</Link>
                                        </button>
                                    </div>

                                    <div className="pt-6">
                                        <h3 className="text-green-500 font-bold uppercase text-left ">
                                            HELP & FAQS
                                        </h3>
                                        <button className="block mt-4 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/">Customer care</Link>
                                        </button>
                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/">Store Location</Link>
                                        </button>
                                        <button className="block mt-2 text-sm text-black hover:text-green-500  hover:underline">
                                            <Link href="/">Faqs</Link>
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
                                        <h3 className="text-green-500 font-bold uppercase ">
                                            CONTACT INFO
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
                        <div className="flex flex-row items-center my-8">
                            <div className="border-b-2 border-green-700 opacity-20 w-3/6 mr-4"></div>
                            <div className="flex flex-row gap-2">
                                <div className="text-right">
                                    <Image
                                        src={card}
                                        alt=""
                                        width={590}
                                        height={35}
                                    />
                                </div>
                                {/* <div className="text-right">
                                    <Image
                                        src={card}
                                        alt=""
                                        width={590}
                                        height={35}
                                    />
                                </div> */}
                            </div>
                            <div className="border-b-2 border-green-700 opacity-20 w-3/6 ml-4"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="md:flex justify-center bg-gray-800 py-4">
                        <p className="text-center text-sm text-gray-400">
                            Copyright© FoodMart 2022 - All rights reserved
                        </p>
                        <h3 className="text-center text-sm text-gray-400 font-semibold md:pl-3">
                            <span className="pr-2">||</span> Powered by{" "}
                            <span className="text-gray-300">FoodMart Team</span>
                        </h3>
                    </div>
                </div>
            </div>
        );
    return null;
};

export default Footer;
