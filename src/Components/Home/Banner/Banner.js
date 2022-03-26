import { ArrowRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import MessengerCustomerChat from "react-messenger-customer-chat";
// import required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import required images
import slider1 from "../../../assets/bannerImage/slider-1.jpg";
import slider3 from "../../../assets/bannerImage/slider-3.jpg";
import side1 from "../../../assets/bannerImage/slider-33.jpg";
import side2 from "../../../assets/bannerImage/slider9 (1).jpg";
import slider2 from "../../../assets/bannerImage/slider9.jpg";
import bannerStyle from "../../../styles/Banner.module.css";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const Banner = () => {
  return (
    <div className="banner">
      <style jsx>{`
        .swiper-pagination-bullet-active {
          background-color: red !important;
        }
      `}</style>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2">
          <div
            id="carousel-part"
            className="col-span-2 bg-green px-2 lg:px-0 md:px-0 z-0"
          >
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className={bannerStyle.swiper}
            >
              <SwiperSlide className={bannerStyle.swiperSlide}>
                <Image
                  className={bannerStyle.slideImg}
                  src={slider1}
                  alt="slider1"
                ></Image>
                <div className="absolute left-6">
                  <p className="lg:text-lg text-md primary-color">
                    Top Selling!
                  </p>
                  <p className="lg:text-4xl text-2xl text-gray-500 font-semibold py-3">
                    Natural Vegetables <br /> from $19
                  </p>
                  <div className="mt-2">
                    <Link href="/products/all-products">
                      <a className="flex items-center gap-1 py-1 lg:py-2 md:py-2 rounded-md text-md capitalize primary-color font-medium">
                        Shop now <ArrowRightIcon className="w-4 mt-1" />
                      </a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={bannerStyle.swiperSlide}>
                <Image
                  className={bannerStyle.slideImg}
                  src={slider2}
                  alt="slider2"
                ></Image>
                <div className="absolute left-6">
                  <p className="lg:text-lg text-md primary-color">
                    Top Selling!
                  </p>
                  <p className="lg:text-4xl text-2xl text-gray-500 font-semibold py-3">
                    Fishes with vegetable <br /> from $10
                  </p>
                  <div className="mt-2">
                    <Link href="/products/all-products">
                      <a className="flex items-center gap-1 py-1 lg:py-2 md:py-2 rounded-md text-md capitalize primary-color font-medium">
                        Shop now <ArrowRightIcon className="w-4 mt-1" />
                      </a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={bannerStyle.swiperSlide}>
                <Image
                  className={bannerStyle.slideImg}
                  src={slider3}
                  alt="slider3"
                ></Image>
                <div className="absolute left-6">
                  <p className="lg:text-lg text-md primary-color">
                    Top Selling!
                  </p>
                  <p className="lg:text-4xl text-2xl text-gray-500 font-semibold py-3">
                    Organic Nooddles <br /> from $11
                  </p>
                  <div className="mt-2">
                    <Link href="/products/all-products">
                      <a className="flex items-center gap-1 py-1 lg:py-2 md:py-2 rounded-md text-md capitalize primary-color font-medium">
                        Shop now <ArrowRightIcon className="w-4 mt-1" />
                      </a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            id="right-part"
            className="grid grid-rows-2 gap-2 ml-2 lg:ml-0 md:ml-0"
          >
            <div className="relative flex justify-center items-center">
              <Image src={side2} alt="banner1"></Image>
              <div className="absolute left-6">
                <p className="text-sm capitalize text-gray-400 mb-1">
                  Fresh Snacks
                </p>
                <p className="text-lg font-bold text-gray-700">Nestle Maggi</p>
                <p className="text-lg text-gray-500 font-medium">
                  Start from $10
                </p>
                <Link href="/products/all-products">
                <a className="mt-2 text-sm capitalize primary-color hover:text-green-600 font-medium flex flex-row items-center gap-1">
                  Shop now <ArrowRightIcon className="w-4" />
                </a>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <Image src={side1} alt="banner1"></Image>
              <div className="absolute left-6">
                <p className="text-sm capitalize text-gray-400 mb-1">
                Our Breverge
                </p>
                <p className="text-lg font-bold text-gray-700">Nestle Nescafe</p>
                <p className="text-lg text-gray-500 font-medium">
                  Start from $12
                </p>
                <Link href="/products/all-products">
                <a className="mt-2 text-sm capitalize primary-color hover:text-green-600 font-medium flex flex-row items-center gap-1">
                  Shop now <ArrowRightIcon className="w-4" />
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MessengerCustomerChat
        // className="bg-green-700"
        pageId="4077509485697177"
        appId="361045412549261"
        // htmlRef="<REF_STRING>"
      /> */}
      ,
    </div>
  );
};

export default Banner;
