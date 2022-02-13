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
      <div className="container mx-auto py-10">
        <p className="text-4xl font-semibold text-center mb-4">
          Deals of the Day
        </p>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mb-10 p-4">
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
                  <h4 className="text-base font-semibold pt-2">{card.title}</h4>
                  <p className="py-2">star</p>
                  <p className="text-sm">by foodMart</p>
                  <div className="flex items-center  justify-between py-6">
                    <h4 className="text-lg font-semibold text-green-500">
                      $32.85
                      <sub className="pl-2 text-gray-500">
                        <strike>$32.85</strike>
                      </sub>
                    </h4>
                    <button className="bg-green-100 text-green-500 font-semibold px-2 text-sm">
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
