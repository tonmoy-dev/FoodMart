import Image from "next/image";
import React from "react";
import aboutImg from "../../../assets/aboutImg/fdlove.webp";
const AboutFoodMart = () => {
  return (
    <div>
      <div className="">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                src={aboutImg}
                alt="Picture of the author"
                width={1200}
                height={1000}
                priority
              />
              {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                Welcome to FoodMart
              </h1>
              <br className="hidden lg:inline-block" />
              <h2>
                <span className="text-green-600 font-bold  ">
                  What We Provide?
                </span>
              </h2>

              <p className="mb-8 leading-relaxed">
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
                <button className="inline-flex text-white bg-green-600 py-2 px-6 border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg">
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
