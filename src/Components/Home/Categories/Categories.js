import { EyeIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const categoriess = [
  {
    id: 101,
    title: "Bread & Bakery",
    pic: "https://i.ibb.co/jbg96VS/bread-bakery.jpg",
  },
  {
    id: 102,
    title: "Baking",
    pic: "https://i.ibb.co/zR2cpk5/baking.jpg",
  },
  {
    id: 103,
    title: "Fruits & Vegetables",
    pic: "https://i.ibb.co/3vmKZFY/fruites-vegetables.jpg",
  },
  {
    id: 104,
    title: "Cooking",
    pic: "https://i.ibb.co/wWjJmNC/cooking.jpg",
  },
  {
    id: 105,
    title: "Dairy",
    pic: "https://i.ibb.co/4wqP4fv/dairy.jpg",
  },
  {
    id: 106,
    title: "Frozen & Canned",
    pic: "https://i.ibb.co/Gs8k0Fn/frozen-canned.jpg",
  },
  {
    id: 107,
    title: "Snacks",
    pic: "https://i.ibb.co/7Y9kd6q/snaks.jpg",
  },
  {
    id: 108,
    title: "Breverages",
    pic: "https://i.ibb.co/gw8K13x/beveages.jpg",
  },
  {
    id: 109,
    title: "Breakfasts",
    pic: "https://i.ibb.co/R7ZtDVN/breakfast.jpg",
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
          <div className="relative h-50 md:h-full md:w-1/4 md:mr-5 mb-7 md:mb-0 rounded-md">
            <div className="md:text-left mx-4 md:mx-0 text-center">
              <Image
                src="https://i.ibb.co/7pBhLjq/d6db1486aac8e639c817d8a8388f31ba.jpg"
                width="400"
                height="700"
                alt="catagori image"
                layout="responsive"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          </div>
          <div className="flex md:w-3/4">
            <div className="grid grid-cols-2 mx-4 md:mx-0 md:grid-cols-3 gap-5 drop-shadow-md">
              {categoriess.map((category) => (
                <div
                  key={category.id}
                  className="relative overflow-hidden w-full h-full rounded-md"
                >
                  <div>
                    <Image
                      src={category.pic}
                      alt="Avatar"
                      width="400"
                      height="220"
                      className="object-cover w-full h-full rounded-md"
                    />
                    <p className="absolute overflow-hidden h-full top-0 left-0 flex items-center justify-start pl-8 text-gray-700 catagory-overlay font-semibold md:text-base text-md w-full">
                      {category.title}
                    </p>
                  </div>
                  <div className="absolute overflow-hidden hover:overflow-hidden w-full h-full top-0 left-0 bg-gray-100 text-white text-xs flex flex-col justify-center items-center transition-all duration-500 -translate-x-12 hover:translate-x-0 opacity-0 hover:opacity-90">
                    <Link href={`/category/${category.title}`}>
                    <a className="text-xl text-gray-200 bg-orange-400 py-2 px-4 cursor-pointer rounded opacity-100 hover:text-white hover:bg-orange-500">
                      <EyeIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </a>
                    </Link>
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
