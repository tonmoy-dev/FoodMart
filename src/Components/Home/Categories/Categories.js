import { HomeIcon, EyeIcon } from "@heroicons/react/outline";
import Image from "next/image";

const categoriess = [
    {
        id: 101,
        title: "Fruits and Vegetables",
        pic: "https://i.ibb.co/cw0VpGt/banner-1.png",
    },
    {
        id: 102,
        title: "Fruits and Vegetables",
        pic: "https://i.ibb.co/C6MfFd1/banner-2.png",
    },
    {
        id: 103,
        title: "Fruits and Vegetables",
        pic: "https://i.ibb.co/Phpf5Tq/banner-3.png",
    },
    {
        id: 104,
        title: "Fruits and Vegetables",
        pic: "https://i.ibb.co/yBCzL0P/banner-4.jpg",
    },
    {
        id: 105,
        title: "Fruits and Vegetables",
        pic: "https://i.ibb.co/DtF2HdL/banner-5.jpg",
    },
    {
        id: 106,
        title: "Fruits and Vegetables",
        pic: "https://i.ibb.co/jf6gb5Y/banner-6.jpg",
    },
    {
        id: 107,
        title: "Fruits and Vegetables",
        pic: "https://i.ibb.co/GWF0G5b/banner-7.jpg",
    },
    {
        id: 108,
        title: "Fruits and Vegetables",
        pic: "https://i.ibb.co/0CfmJjL/banner-8.jpg",
    },
    {
        id: 109,
        title: "Fruits and Vegetables",
        pic: "https://i.ibb.co/FmpgH9q/banner-9.jpg",
    },
];
const Categories = () => {
    return (
        <>
            <div className="py-16">
                <h1 className="text-center text-black font-bold text-3xl pb-2">
                    Shop by Categories
                </h1>
                <p className="text-center text-gray-600 text-xl pb-7">
                    Trusted and powerful eCommerce store for all
                </p>
                <div className="md:flex justify-center items-center md:mx-10">
                    <div className="relative h-50 md:h-full md:w-1/4 md:mr-5 mb-7 md:mb-0 rounded-lg">
                        <div className="">
                            <Image
                                src="https://i.ibb.co/BcvkYph/category-Banner.jpg"
                                width="400"
                                height="700"
                                alt=""
                                className="object-cover w-full h-full rounded-lg"
                            />
                        </div>
                        <div className="absolute top-60 md:top-52 left-20 bg-green-700 inline-block w-28 h-28 md:w-36 md:h-36 border-4 border-slate-400 rounded-full text-center ">
                            <p className="pt-3">
                                <span className="text-sm md:text-lg text-white">
                                    Get
                                </span>
                                <br />
                                <span className="text-3xl md:text-5xl font-semibold text-gray-200">
                                    20%
                                </span>
                                <br />
                                <span className="md:text-2xl font-semibold text-white">
                                    OFF
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex md:w-3/4">
                        <div className="grid grid-cols md:grid-cols-3 gap-5 drop-shadow-md">
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
                                        <p className="absolute overflow-hidden w-full h-full top-7 left-10 flex  text-gray-600 text-xl">
                                            {category.title}
                                        </p>
                                    </div>
                                    <div className="absolute overflow-hidden hover:overflow-hidden w-full h-full top-0 left-0 bg-orange-300 text-white text-xs flex flex-col justify-center items-center transition-all duration-500 -translate-x-12 hover:translate-x-0 opacity-0 hover:opacity-90">
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
