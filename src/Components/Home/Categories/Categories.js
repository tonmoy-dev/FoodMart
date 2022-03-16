import { HomeIcon, EyeIcon } from "@heroicons/react/outline";
import Image from "next/image";

const categoriess = [
  {
    id: 101,
    title: "Organic",
    pic: "https://i.ibb.co/cw0VpGt/banner-1.png",
  },
  {
    id: 102,
    title: "Soft Drinks",
    pic: "https://i.ibb.co/C6MfFd1/banner-2.png",
  },
  {
    id: 103,
    title: "Vegetables",
    pic: "https://i.ibb.co/Phpf5Tq/banner-3.png",
  },
  {
    id: 104,
    title: "Fishes",
    pic: "https://i.ibb.co/yBCzL0P/banner-4.jpg",
  },
  {
    id: 105,
    title: "Fruits",
    pic: "https://i.ibb.co/DtF2HdL/banner-5.jpg",
  },
  {
    id: 106,
    title: "Pea-Nuts",
    pic: "https://i.ibb.co/jf6gb5Y/banner-6.jpg",
  },
  {
    id: 107,
    title: "Snaks",
    pic: "https://i.ibb.co/GWF0G5b/banner-7.jpg",
  },
  {
    id: 108,
    title: "Breverages",
    pic: "https://i.ibb.co/0CfmJjL/banner-8.jpg",
  },
  {
    id: 109,
    title: "Breakfasts",
    pic: "https://i.ibb.co/FmpgH9q/banner-9.jpg",
  },
];
const Categories = () => {
  return (
    <>
      <style>
        {`
            .catagory-overlay{
                background: rgba(0 , 0, 0, 0.1);
            }
            `}
      </style>
      <div className="py-16">
        <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-2 mb-8 justify-between items-center container mx-auto">
          <h1 className="text-center text-black font-bold text-3xl">
            Shop by Categories
          </h1>
          <p className="text-center capitalize text-gray-700 text-sm">
            All neccessary products are catagoriezed
          </p>
        </div>
        <div className="md:flex justify-center items-center md:mx-8">
          <div className="relative h-50 md:h-full md:w-1/4 md:mr-5 mb-7 md:mb-0 rounded-lg">
            <div className="md:text-left mx-4 md:mx-0 text-center">
              <Image
                src="https://i.ibb.co/7pBhLjq/d6db1486aac8e639c817d8a8388f31ba.jpg"
                width="400"
                height="700"
                alt="catagori image"
                layout="responsive"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div className="flex md:w-3/4">
            <div className="grid grid-cols-2 mx-4 md:mx-0 md:grid-cols-3 gap-5 drop-shadow-md">
              {categoriess.map((category) => (
                <div
                  key={category.id}
                  className="relative overflow-hidden w-full h-full rounded-lg"
                >
                  <div>
                    <Image
                      src={category.pic}
                      alt="Avatar"
                      width="400"
                      height="220"
                      className="object-cover w-full h-full rounded-lg"
                    />
                    <p className="absolute overflow-hidden w-full h-full top-0 left-0 flex items-center justify-start pl-8 text-gray-700 catagory-overlay font-semibold md:text-xl text-md">
                      {category.title}
                    </p>
                  </div>
                  <div className="absolute overflow-hidden hover:overflow-hidden w-full h-full top-0 left-0 bg-gray-100 text-white text-xs flex flex-col justify-center items-center transition-all duration-500 -translate-x-12 hover:translate-x-0 opacity-0 hover:opacity-90">
                    <button className="text-xl text-gray-200 bg-orange-400 py-2 px-4 rounded opacity-100 hover:text-white hover:bg-orange-500">
                      <EyeIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
