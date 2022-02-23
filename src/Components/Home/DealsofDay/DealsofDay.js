import Image from "next/image";
import React from "react";
const DealsofDay = () => {
  const fakeArr = [
    {
      id: "1",
      title: " Seeds of Change Organic Quinoa, Brown, & Red Rice",
      days: "1122",
      hours: "02",
      mins: "42",
      sec: "12",
      img: "https://i.ibb.co/K2mBP3k/banner-5.png",
    },
    {
      id: "21",
      title: " Seeds of Change Organic Quinoa, Brown, & Red Rice",
      days: "1122",
      hours: "02",
      mins: "42",
      sec: "12",
      img: "  https://i.ibb.co/xjJbLTR/banner-6.png",
    },
    {
      id: "13",
      title: " Seeds of Change Organic Quinoa, Brown, & Red Rice",
      days: "1122",
      hours: "02",
      mins: "42",
      sec: "12",
      img: "https://i.ibb.co/cTsQ8zG/banner-7.png",
    },
    {
      id: "15",
      title: " Seeds of Change Organic Quinoa, Brown, & Red Rice",
      days: "1122",
      hours: "02",
      mins: "42",
      sec: "12",
      img: "https://i.ibb.co/6W4Bjdf/banner-8.png",
    },
  ];
  return (
    <div>
      <div className="container mx-auto pt-10 px-4 md:px-0">
        <p className="text-3xl font-bold text-left mb-4">
          Deals of the Day
        </p>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mb-10 py-4">
          {fakeArr.map((card) => (
            <div
              style={{ height: "auto" }}
              id="deals-card"
              key={card.id}
              className="relative rounded-2xl"
            >
              <div id="deals-card-image-wrap" className="relative z-2">
                <div className="deals-card-image relative">
                  <Image
                    layout="responsive"
                    width={700}
                    height={500}
                    src={card.img}
                    alt="Avatar"
                    className="rounded-2xl"
                  />
                </div>
              </div>

              <div
                style={{ marginTop: "-90px", zIndex: 3 }}
                id="card-content"
                className="relative px-2 w-full"
              >
                <div
                  style={{ top: "-80px" }}
                  id="deals-count-down"
                  className="absolute w-full left-0 right-0"
                >
                  <div className="flex flex-row gap-2 justify-center">
                    <div className="bg-white px-2 shadow-md py-2 text-center text-green-500 font-semibold rounded-lg">
                      1136 <br /> <span className="text-gray-400">Days</span> 
                    </div>
                    <div className="bg-white px-2 shadow-md py-2 text-center text-green-500 font-semibold rounded-lg">
                      01 <br /> <span className="text-gray-400">Hours</span>
                    </div>
                    <div className="bg-white px-2 shadow-md py-2 text-center text-green-500 font-semibold rounded-lg">
                      47 <br /> <span className="text-gray-400">Mins</span>
                    </div>
                    <div className="bg-white px-3 shadow-md py-2 text-center text-green-500 font-semibold rounded-lg">
                      42 <br /> <span className="text-gray-400">Sec</span>
                    </div>
                  </div>
                </div>
                <div
                  id="deals-details"
                  className="bg-white shadow-md rounded-2xl px-4 mt-4"
                >
                  <h4 className="text-base font-semibold pt-2">{card.title.slice(0,30)}</h4>
                  <ul className="flex items-center py-2">
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-300 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-300 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-300 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-300 mr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>

                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="star"
                      className="w-4 text-yellow-300"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                      ></path>
                    </svg>
                  </li>
                </ul>
                  <div className="flex items-center  justify-between py-6">
                    <h4 className="text-lg font-semibold text-green-500">
                      $32.85
                      <sub className="pl-2 text-gray-500">
                        <strike>$32.85</strike>
                      </sub>
                    </h4>
                    <button className="bg-green-500 text-white rounded py-1 font-semibold px-2 text-sm">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsofDay;
