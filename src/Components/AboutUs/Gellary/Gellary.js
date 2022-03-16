
import React from "react";

const Gellary = () => {
  return (
    <div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div className="relative overflow-hidden mx-4 md:mx-0 ld:mx-0">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-2 sm:static">
            <div className="sm:max-w-lg">
              <h3 className="text-green-600 text-2xl">Foodmart Gallery</h3>
              <h1 className="font font-bold  text-3xl">
                Your Partner for e-commerce grocery solution
              </h1>
              <p className="mt-4 text-lg text-gray-500 text-justify" >
              Food First envisions a world in which all people have access to healthy, ecologically produced, and culturally appropriate food. After 40 years of analysis of the global food system, we know that making this vision a reality involves more than technical solutions—it requires political transformation. That’s why Food First supports activists, social movements, alliances, and coalitions working for systemic change.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* <!-- Decorative image grid --> */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img src="https://i.ibb.co/Chc2j3J/food-background-fruits-collection-portrait-2912840.jpg" className="w-full h-full object-center object-cover" alt="image gellary"/>
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="https://i.ibb.co/bdRZVmT/photo-1547514701-42782101795e.jpg" alt="" className="w-full h-full object-center object-cover" /> 
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="https://i.ibb.co/M1nWCcT/photo-1543076659-9380cdf10613.jpg" alt="" className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="https://i.ibb.co/mC43tKs/photo-1582284540020-8acbe03f4924.jpg" alt="" className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="https://i.ibb.co/tQkQTqq/photo-1594282486756-06f49bb34c05.jpg" alt="" className="w-full h-full object-center object-cover" />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img src="https://i.ibb.co/PNgKYgh/photo-1550411294-b3b1bd5fce1b.jpg" alt="" className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="w-44 h-72 rounded-lg overflow-hidden">
                          <img src="https://i.ibb.co/fSj5dYv/photo-1609842947419-ba4f04d5d60f.jpg" alt="" className="w-full h-full object-center object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block text-center bg-green-500 border border-transparent rounded-md py-2 px-6 font-medium text-white hover:bg-green-700"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gellary;

/* https://i.ibb.co/fSj5dYv/photo-1609842947419-ba4f04d5d60f.jpg
https://i.ibb.co/PNgKYgh/photo-1550411294-b3b1bd5fce1b.jpg
https://i.ibb.co/tQkQTqq/photo-1594282486756-06f49bb34c05.jpg
https://i.ibb.co/mC43tKs/photo-1582284540020-8acbe03f4924.jpg
https://i.ibb.co/M1nWCcT/photo-1543076659-9380cdf10613.jpg
https://i.ibb.co/bdRZVmT/photo-1547514701-42782101795e.jpg */