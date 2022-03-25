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
          <h6 className="primary-color text-xs uppercase">Testimonials</h6>
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
          {
            reviews.map((r) => (
              <SwiperSlide key={r._id} className={reviewStyle.swiperslide}>
            <div className={reviewStyle.containers}>
              <div className={reviewStyle.profile}>
                <div className={reviewStyle.imgBox}>
                  <Image
                    className={reviewStyle.avator}
                    src={r.imageUrl}
                    alt=""
                    height={80}
                    width={80}
                  />
                </div>
                <h2>{r.userName}</h2>
              </div>
              <div>
                <p className={reviewStyle.reviewdetails}>
                  {" "}
                  <b className={reviewStyle.qoute}>“</b> {r.description}
                  <b className={reviewStyle.qoute1}>“</b>
                </p>
              </div>
            </div>
          </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
    </>
  );
};

export default Reviews;