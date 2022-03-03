import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <style jsx>
        {`
          .newsletter {
            background: #f3f4f6 ;
            // background: url("https://i.ibb.co/82j6Rvf/banner-1-f884a64d-39d6-44a8-882e-dc7e15c332aa.jpg");
            background-size: cover;
          }
        `}
      </style>
      <div className="newsletter py-3 border-b">
        <div>
          <div>
            <h1 className="text-green-500 mt-4  text-3xl font-semibold text-center">
              Sign up for the NewsLetter
            </h1>
          </div>
        </div>

        <div className="flex justify-center px-4 footer">
          <div className="container py-6">
            <h1 className="text-lg text-gray-600  text-center">
              Join 31,000+ other and never miss out on new tips, products, and
              more....
            </h1>

            <div className="flex justify-center mt-6">
              <div className="bg-white border rounded-full focus:ring-0">
                <div className="flex justify-between flex-row">
                  <input
                    type="email"
                    className="p-2 m-1 text-sm rounded-full text-gray-700 bg-transparent border-0 appearance-none focus:outline-none focus:ring-gray-300"
                    placeholder="Enter your email address"
                    aria-label="Enter your email address"
                  />
                  <button className="w-full px-3 py-2 m-1  text-sm font-medium tracking-wider text-white uppercase transition-colors duration-200 transform bg-green-500 rounded-full lg:w-auto hover:bg-green-600">
                    subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
