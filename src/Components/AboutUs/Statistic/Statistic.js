import React from "react";
import CountUp from "react-countup";
import CounterStyle from "../../../styles/Statistic.module.css";
const Statistic = () => {
  return (
    <div className="">
      <div>
        <h1 className="sm:text-3xl text-center text-2xl font-bold title-font mb-4 text-black">
          Our honorable Statistic
        </h1>
      </div>
      <div className={CounterStyle.counter}>
        <section className="text-gray-800 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h1 className="title-font font-bold sm:text-4xl text-6xl text-white">
                  <CountUp end={100} duration={3} />
                  K+{" "}
                </h1>
                <p className="leading-relaxed text-white text-2xl">
                  Our vendors
                </p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h1 className="title-font font-bold sm:text-4xl text-6xl text-white">
                  <CountUp end={57} duration={3} />
                  K+
                </h1>
                <p className="leading-relaxed text-white text-2xl">
                  Team advisor
                </p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h1 className="title-font font-bold sm:text-4xl text-6xl text-white">
                  <CountUp end={77} duration={3} />
                  k+
                </h1>
                <p className="leading-relaxed text-white text-2xl">
                  Happy clients
                </p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h1 className="title-font font-bold sm:text-4xl text-6xl text-white">
                  <CountUp end={250} duration={3} />
                  k+
                </h1>
                <p className="leading-relaxed text-white text-2xl">
                  Products Sale
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
};

export default Statistic;
