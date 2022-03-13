import Image from "next/image";
import React from "react";
import {
  ChevronRightIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

const AboutFoodMart = () => {
  return (
    <div className="mx-4 md:mx-0 lg:mx-0">
      <div className="head-banner">
        <div className="container mx-auto">
          <div className="banner-inner flex flex-col justify-center items-center">
            <h1 className="banner-title font-bold text-4xl text-gray-900 mb-4">
              <span className="">About Us</span>
            </h1>
            {/* nav */}
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
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
                      about-us
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex gap-6 px-2 py-10 md:flex-row flex-col items-center">
            <div className="w-full my-8 md:mb-0 shadow rounded-lg">
              <Image
                src="https://i.ibb.co/QYM19LC/cover-Capture.png"
                // src="https://i.ibb.co/mySfxJB/moc2.png"
                alt="Picture of the author"
                width={600}
                height={350}
                fill="responsive"
                priority
              />
            </div>
            <div className="lg:flex-grow w-full flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-green-500">
              What We Provide?
              </h1>
              <p className="mb-8 leading-relaxed text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate id est laborum.
                <br />
                Ius ferri velit sanctus cu, sed at soleat accusata. Dictas
                prompta et Ut placerat legendos interpre.Donec vitae sapien ut
                libero venenatis faucibus. Nullam quis ante Etiam sit amet orci
                eget. Quis commodo odio aenean sed adipiscing. Turpis massa
                tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit
                amet. Commodo consequat.
              </p>
              <div className="flex  mx-0 justify-center">
                <button className="inline-flex text-white bg-green-500 py-2 px-6 border-0 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Get Booking
                </button>
                {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Get Booking</button> */}
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutFoodMart;
