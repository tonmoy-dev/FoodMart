import Image from "next/image";
import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/components/navigation/navigation.min.css";
//import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import brandStyle from "../../../styles/Brand.module.css";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const allbrand = [
    {
        id: "b1",
        brandimg: "https://i.ibb.co/31d22S1/menufacture-1-225x150.png",
    },
    {
        id: "b2",
        brandimg: "https://i.ibb.co/J7fGPmK/menufacture-5-225x150.png",
    },
    {
        id: "b3",
        brandimg: "https://i.ibb.co/YDmLpzw/menufacture-3-225x150.png",
    },
    {
        id: "b4",
        brandimg: "https://i.ibb.co/J5FmyZP/menufacture-2-225x150.png",
    },
    {
        id: "b5",
        brandimg: "https://i.ibb.co/qrn7Qcv/menufacture-4-225x150.png",
    },
    {
        id: "b6",
        brandimg: "https://i.ibb.co/X5WG4xP/menufacture-8-225x150.png",
    },
];
const Brands = () => {
    return (
        <div className="py-10 mb-2">
            <div className="banner">
                <style jsx>{`
                    .swiper-pagination-bullet-active {
                        background-color: red !important;
                    }
                `}</style>
                <div className="container mx-auto">
                    <div className="">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            breakpoints={{
                                
                                368: {
                                    slidesPerView: 2,
                                    spaceBetween: 3,
                                },
                                575: {
                                    slidesPerView: 3,
                                    spaceBetween: 5,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            effect={"coverflow"}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={false}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className={brandStyle.swiper}
                        >
                            {allbrand.map((brand) => (
                                <SwiperSlide
                                    key={brand.id}
                                    className={brandStyle.swiperSlide}
                                >
                                    <Image
                                        className={brandStyle.slideImg}
                                        src={brand.brandimg}
                                        alt="Picture of the brand"
                                        width="120px"
                                        height="80px"
                                    ></Image>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;
