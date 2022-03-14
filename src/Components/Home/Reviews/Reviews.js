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
                    src="https://i.ibb.co/5BTm8d4/photo-profil-301783868.jpg"
                    alt=""
                    height={80}
                    width={80}
                  />
                </div>
                <h2></h2>
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
                    src="https://i.ibb.co/J2z1yM6/18dbd99c8f8166cb175c39506e15aa643856f4f0.jpg"
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
                    src="https://i.ibb.co/xFfmcMN/Emotional-headshot-of-aspiring-actress-on-white-background-made-by-Headshots-Prague-1-1.jpg"
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