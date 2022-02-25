import Image from "next/image";
import React from 'react';
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import reviewStyle from "../../../styles/Review.module.css";

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);
const Reviews = () => {
    return (
        <>
       <section className={reviewStyle.slidecontain}>
       <div className={reviewStyle.heading}><h2 className="text-black text-3xl">Customer Reviews</h2></div>
       
       <Swiper
        navigation={false}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className={reviewStyle.swiper}
      >
        <SwiperSlide className={reviewStyle.swiperslide}>
            <div className={reviewStyle.containers}>
                <div className={reviewStyle.profile}>
                    <div className={reviewStyle.imgBox}>
                            <Image className={reviewStyle.avator} src="https://i.ibb.co/w77SX8J/ijsi5fzb1nbkbhxa2gc1.png"
                            alt="" height={100} width={100}/>
                    </div>
                            <h2>Person 1</h2>
                </div>
                    <div>
                        <p  className={reviewStyle.reviewdetails}> <b className={reviewStyle.qoute}>“</b> Quis eiusmod aliquip laborum non anim culpa Lorem mollit ut non nulla dolor mollit aliqua. Nisi velit consectetur sunt quis officia enim aliqua occaecat ullamco. Ex labore ad nisi pariatur eu culpa et reprehenderit.dolor mollit aliqua. Nisi velit consectetur sunt quis officia enim aliqua occaecat ullamco. Ex labore ad nisi pariatur eu culpa et reprehenderit. <b className={reviewStyle.qoute1}>“</b></p>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={reviewStyle.swiperslide}>
            <div className={reviewStyle.containers}>
                <div className={reviewStyle.profile}>
                    <div className={reviewStyle.imgBox}>
                            <Image className={reviewStyle.avator} src="https://i.ibb.co/0F7zH74/images-q-tbn-ANd9-Gc-Sk-FD7r-VDIsj77-R6-CBhfwmiido-HUQY76-Ze4-Sh-ORlo-VE-ECfb-Yn-DCVri9odp-In-T7e-HX.jpg"
                            alt="" height={100} width={100}/>
                    </div>
                            <h2>Person 2</h2>
                </div>
                    <div>
                        <p className={reviewStyle.reviewdetails}> <b className={reviewStyle.qoute}>“</b> Quis eiusmod aliquip laborum non anim culpa Lorem mollit ut non nulla dolor mollit aliqua. Nisi velit consectetur sunt quis officia enim aliqua occaecat ullamco. Ex labore ad nisi pariatur eu culpa et reprehenderit.dolor mollit aliqua. Nisi velit consectetur sunt quis officia enim aliqua occaecat ullamco. Ex labore ad nisi pariatur eu culpa et reprehenderit. <b className={reviewStyle.qoute1}>“</b></p>

                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={reviewStyle.swiperslide}>
            <div className={reviewStyle.containers}>
                <div className={reviewStyle.profile}>
                    <div className={reviewStyle.imgBox}>
                            <Image className={reviewStyle.avator} src="https://i.ibb.co/4V0Jrk4/avatar-1606914-340.png"
                            alt="" height={100} width={100}/>
                    </div>
                            <h2>Person 3</h2>
                </div>
                    <div>
                        <p className={reviewStyle.reviewdetails}> <b className={reviewStyle.qoute}>“</b> Quis eiusmod aliquip laborum non anim culpa Lorem mollit ut non nulla dolor mollit aliqua. Nisi velit consectetur sunt quis officia enim aliqua occaecat ullamco. Ex labore ad nisi pariatur eu culpa et reprehenderit.dolor mollit aliqua. Nisi velit consectetur sunt quis officia enim aliqua occaecat ullamco. Ex labore ad nisi pariatur eu culpa et reprehenderit. <b className={reviewStyle.qoute1}>“</b></p>
                    </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
       </section>
        </>
    );
};

export default Reviews ;