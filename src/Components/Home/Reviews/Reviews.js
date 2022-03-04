import Image from "next/image";
import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import reviewStyle from "../../../styles/Review.module.css";

SwiperCore.use([ Navigation, Pagination]);
const Reviews = ({reviews}) => {
  return (
    <>
      <section className={reviewStyle.slidecontain}>
        <div className={reviewStyle.heading}>
          <h6 className="text-green-500 text-xs uppercase">Testimonials</h6>
          <h2 className="text-black text-3xl my-2">What Clients Say</h2>
        </div>

        <Swiper
          navigation={false}
          spaceBetween={40}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className={reviewStyle.swiper}
        >
          <SwiperSlide className={reviewStyle.swiperslide}>
            <div className={reviewStyle.containers}>
              <div className={reviewStyle.profile}>
                <div className={reviewStyle.imgBox}>
                  <Image
                    className={reviewStyle.avator}
                    src="https://i.ibb.co/w77SX8J/ijsi5fzb1nbkbhxa2gc1.png"
                    alt=""
                    height={80}
                    width={80}
                  />
                </div>
                <h2>Person 1</h2>
              </div>
              <div>
                <p className={reviewStyle.reviewdetails}>
                  {" "}
                  <b className={reviewStyle.qoute}>“</b> Thank you for letting me be a part of such a fantastic event! Being a volunteer for this race is much more than just
             work, it&apos;s an unforgettable experience that will stay with me for the rest of my life.{" "}
                  <b className={reviewStyle.qoute1}>“</b>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={reviewStyle.swiperslide}>
            <div className={reviewStyle.containers}>
              <div className={reviewStyle.profile}>
                <div className={reviewStyle.imgBox}>
                  <Image
                    className={reviewStyle.avator}
                    src="https://i.ibb.co/0F7zH74/images-q-tbn-ANd9-Gc-Sk-FD7r-VDIsj77-R6-CBhfwmiido-HUQY76-Ze4-Sh-ORlo-VE-ECfb-Yn-DCVri9odp-In-T7e-HX.jpg"
                    alt=""
                    height={80}
                    width={80}
                  />
                </div>
                <h2>Person 2</h2>
              </div>
              <div>
                <p className={reviewStyle.reviewdetails}>
                  {" "}
                  <b className={reviewStyle.qoute}>“</b> Thank you for letting me be a part of such a fantastic event! Being a volunteer for this race is much more than just
             work, it&apos;s an unforgettable experience that will stay with me for the rest of my life.{" "}
                  <b className={reviewStyle.qoute1}>“</b>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={reviewStyle.swiperslide}>
            <div className={reviewStyle.containers}>
              <div className={reviewStyle.profile}>
                <div className={reviewStyle.imgBox}>
                  <Image
                    className={reviewStyle.avator}
                    src="https://i.ibb.co/4V0Jrk4/avatar-1606914-340.png"
                    alt=""
                    height={80}
                    width={80}
                  />
                </div>
                <h2>Person 3</h2>
              </div>
              <div>
                <p className={reviewStyle.reviewdetails}>
                  {" "}
                  <b className={reviewStyle.qoute}>“</b> Thank you for letting me be a part of such a fantastic event! Being a volunteer for this race is much more than just
             work, it&apos;s an unforgettable experience that will stay with me for the rest of my life.{" "}
                  <b className={reviewStyle.qoute1}>“</b>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Reviews;