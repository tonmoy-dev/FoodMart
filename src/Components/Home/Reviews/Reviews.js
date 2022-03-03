import Image from "next/image";
import React from "react";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import reviewStyle from "../../../styles/Review.module.css";

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);
const Reviews = ({ reviews }) => {
  console.log(reviews);
  return (
    <>
      {/* {
      reviews.map((review) => {
        <div key={review._id}>
          <p>{review.userName}</p>
          <p>{review.reviewDate}</p>
        </div>
     })
    
  }; */}

      <p>Hello food mart</p>

      <section className={reviewStyle.slidecontain}>
        <div className={reviewStyle.heading}>
          <h2 className="text-black text-3xl">Customer Reviews</h2>
        </div>

        <Swiper
          navigation={false}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 58,
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
            {reviews.map((review) => {
              console.log(review)
              const {userName,userEmail,reviewDate,imageUrl,reviewTime,_id}=review;
              console.log(userName,userEmail,reviewDate,imageUrl,reviewTime,_id)
              return(
                <div  key={_id} className={reviewStyle.containers}>
                <div className={reviewStyle.profile}>
                  <div className={reviewStyle.imgBox}>
                    <Image
                      className={reviewStyle.avator}
                      src={imageUrl}
                      alt=""
                      height={80}
                      width={80}
                    />
                  </div>
                  <h2>Person 1</h2>
                </div>
                <div>
                  <p className={reviewStyle.reviewdetails}>
                    <div className="flex">
                      <div>
                        <p>{userName}</p>
                        <p>{userEmail}</p>
                      </div>
                      <div className="ml-auto">
                        <p>date</p>
                        <p>Time</p>
                      </div>
                    </div>
                    <b className={reviewStyle.qoute}>“</b> Thank you for letting
                    me be a part of such a fantastic event! Being a volunteer
                    for this race is much more than just work, it&apos;s an
                    unforgettable experience that will stay with me for the rest
                    of my life.
                    <b className={reviewStyle.qoute1}>“</b>
                  </p>
                </div>
              </div>
              )
            })}
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Reviews;
