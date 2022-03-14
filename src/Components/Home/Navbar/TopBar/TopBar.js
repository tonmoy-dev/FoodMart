import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const TopBar = () => {
    return (
        <div className="py-1.5 primary-bg-color">
            <div className="flex flex-col md:flex-row justify-between items-center md:mx-10">
                <p className="hidden md:block text-sm text-white animate-pulse">Welcome to FoodMart Shop!</p>
                <p className="text-white text-center text-sm font-normal">Get Special Deal today! Get 3 products for 2. Limited offer. <span className="underline">Read More</span> </p>
                <div className="hidden md:flex text-sm text-white items-center gap-x-2">
                    <div className="flex gap-x-1.5">
                        <a href=""> <FaFacebookSquare /> </a>
                        <a href=""> <FaTwitterSquare /> </a>
                        <a href=""> <FaLinkedin /> </a>
                        <a href=""> <FaInstagram /> </a>
                    </div>
                    {/* language dropdown */}
                    <div class="topbar-dropdown relative inline-block">
                        <button class="topbar-dropbtn p-1 border-none flex items-center">
                            <span>English</span>
                            <MdKeyboardArrowDown />
                        </button>
                        <div class="topbar-dropdown-content shadow-lg w-32 absolute hidden top-7 right-0 rounded bg-white">
                            <div className="flex flex-col gap-y-2 text-sm items-end py-2 px-3 text-gray-600">
                                <a className="hover:text-black no-underline" href="#">Bangla</a>
                                <a className="hover:text-black no-underline" href="#">English</a>
                                <a className="hover:text-black no-underline" href="#">French</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;