import React from "react";
import CountUp from "react-countup";
import CounterStyle from "../../../styles/Statistic.module.css";
const Statistic = () => {
  return (
    <div className="container mx-auto py-4 my-6">
      <div className="text-center py-4 mt-4 mx-4 md:mx-0">
        <h1 className="sm:text-3xl text-center text-3xl font-bold title-font mb-4 text-green-500">
          Our Site Statistic
        </h1>
        <p className="max-w-2xl mt-4 mb-6 mx-auto text-center text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
      </div>
      <div>
        <style>
          {`
          .counter-card{
            width: 180px ;
            height: 180px;
          }
          `}
        </style>
        <section className="text-gray-800">
            <div className="grid md:gap-y-0 lg:gap-y-0 gap-y-6 md:grid-cols-4 grid-cols-2">
              <div className="p-2 bg-white border-2 border-green-500 counter-card mx-auto rounded-r-full rounded-b-full flex flex-col items-center justify-center">
                <h1 className="title-font font-bold sm:text-4xl text-3xl text-green-500">
                  <CountUp end={100} duration={3} />
                  K+{" "}
                </h1>
                <p className="leading-relaxed text-black text-xl">
                  Our vendors
                </p>
              </div>
              <div className="p-2 bg-white border-2 border-orange-500 counter-card mx-auto rounded-l-full rounded-t-full flex flex-col items-center justify-center">
                <h1 className="title-font font-bold sm:text-4xl text-3xl text-orange-500">
                  <CountUp end={57} duration={3} />
                  K+
                </h1>
                <p className="leading-relaxed text-black text-xl">
                  Team advisor
                </p>
              </div>
              <div className="p-2 bg-white border-2 border-green-500 counter-card mx-auto rounded-r-full rounded-b-full flex flex-col items-center justify-center">
                <h1 className="title-font font-bold sm:text-4xl text-3xl text-green-500">
                  <CountUp end={77} duration={3} />
                  k+
                </h1>
                <p className="leading-relaxed text-black text-xl">
                  Happy clients
                </p>
              </div>
              <div className="p-2 bg-white border-2 border-orange-500 counter-card mx-auto rounded-l-full rounded-t-full flex flex-col items-center justify-center">
                <h1 className="title-font font-bold sm:text-4xl text-3xl text-orange-500">
                  <CountUp end={250} duration={3} />
                  k+
                </h1>
                <p className="leading-relaxed text-black text-xl">
                  Products Sale
                </p>
              </div>
            </div>
        </section>
      </div>
    </div>

  );
};

export default Statistic;
