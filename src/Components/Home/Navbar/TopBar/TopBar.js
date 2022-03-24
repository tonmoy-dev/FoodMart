import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import i18nConfig from '../../../../../i18n.json';
import Link from "next/link";
import { useRouter } from 'next/router'

const TopBar = () => {
    const { locales } = i18nConfig;
    const router = useRouter();

    return (
        <div className="py-2 md:py-1.5 primary-bg-color">
            <div className="flex flex-col md:flex-row justify-between items-center md:mx-10">
                <p className="hidden md:block text-sm text-white animate-pulse">Welcome to FoodMart Shop!</p>
                <div className="text-white text-center text-xs md:text-sm font-normal">Get Special Deal today! Get 3 products for 2. Limited offer.
                <Link href="/products/all-products"><a className="ml-2 underline">Read More</a></Link>
                </div>
                <div className="hidden md:flex text-sm text-white items-center gap-x-2">
                    <div className="flex gap-x-1.5">
                        <a href=""> <FaFacebookSquare /> </a>
                        <a href=""> <FaTwitterSquare /> </a>
                        <a href=""> <FaLinkedin /> </a>
                        <a href=""> <FaInstagram /> </a>
                    </div>
                    {/* language dropdown */}
                    <div className="topbar-dropdown relative inline-block">
                        <button className="topbar-dropbtn p-1 border-none flex items-center">
                            <span>Languages</span>
                            <MdKeyboardArrowDown />
                        </button>
                        <div className="topbar-dropdown-content shadow-lg w-32 absolute hidden top-7 right-0 rounded bg-white">
                            <div  className="flex flex-col gap-y-2 text-sm items-end py-2 px-3 text-gray-600">
                            {locales.map(lng => {
                            return (
                                <Link href={router.asPath} locale={lng} key={lng}>
                                <a className="text-black border-b hover:bg-green-100 w-full px-2 py-1 no-underline"> {lng == 'en' ? "English" : "Bangla"} - {`${lng}`}</a>
                                </Link>
                            );
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;