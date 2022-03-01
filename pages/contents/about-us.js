import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';
import AboutFoodMart from '../../src/Components/AboutUs/AboutFoodMart/AboutFoodMart';
import Gellary from '../../src/Components/AboutUs/Gellary/Gellary';
import Statistic from '../../src/Components/AboutUs/Statistic/Statistic';
import Team from '../../src/Components/AboutUs/Team/Team';
const AboutUs = () => {
    return (
        <div>
            <div className="container px-10 py-10">
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
                                    About Us
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            <AboutFoodMart></AboutFoodMart>
            <Gellary></Gellary>
            <Statistic></Statistic>
            <Team></Team>
        </div>
    );
};

export default AboutUs;