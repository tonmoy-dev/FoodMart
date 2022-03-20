import { MenuIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const catagorilist = [
  {
    catagory_id: 1,
    catagory_name: "Fruits & Vegetables",
    catagory_icon: "https://i.ibb.co/ZVJF7xP/cat7-25x25-crop-center.jpg",
  },
  {
    catagory_id: 2,
    catagory_name: "Snacks",
    catagory_icon: "https://i.ibb.co/BG2y3sV/noodles-src-https-eggyolk-chaldal.webp",
  },
  {
    catagory_id: 3,
    catagory_name: "Beverages",
    catagory_icon: "https://i.ibb.co/BftdYCG/juice-src-https-eggyolk-chaldal.webp",
  },
  {
    catagory_id: 4,
    catagory_name: "Breakfast",
    catagory_icon: "https://i.ibb.co/txMh3MW/local-breakfast-src-https-eggyolk-chaldal.webp",
  },
  {
    catagory_id: 5,
    catagory_name: "Frozen & Canned",
    catagory_icon: "https://i.ibb.co/k0q3d94/frozen-snacks-src-https-eggyolk-chaldal.webp",
  },
];

const AllCatagories = () => {
  const [openCatagori, setOpenCatagroi] = useState(false);

  const handleAllCatagories = () => {
    setOpenCatagroi(!openCatagori);
  };
  return (
    <>
      <style>
        {`
              .down-icon-rotate{
                transform: rotate(180deg);
                margin-top:1px;
              }
            `}
      </style>
      <div
        id="allCatagories"
        onClick={handleAllCatagories}
        className="transition primary-bg-color flex flex-row justify-between items-center cursor-pointer w-44 relative text-white px-2 py-2"
      >
        <MenuIcon className="w-4 h-4" />
        <h1 className="text-sm"> All Catagories</h1>
        <FiChevronDown
          className={`pt-1 w-5 h-5 ${openCatagori ? "down-icon-rotate" : ""} `}
        />
        <div
          id="catagoriesList"
          className={`bg-white rounded mt-10 top-0 h-auto py-4 ${openCatagori ? "visible" : "invisible"
            } z-10 shadow-lg  absolute w-full left-0 text-black flex flex-col`}
        >
          
          {catagorilist.map((catagori) => (
            <div
              key={catagori.catagory_id}
              className="hover:bg-gray-100 flex items-center gap-4 hover:cursor-pointer pl-4 py-2"
            >
              <Image
                width={30}
                height={30}
                src={catagori.catagory_icon}
                alt="catagory icon"
              />
              <span>
                <Link href={`/category/${catagori.catagory_name}`}>
                  <a>
                    {catagori.catagory_name}
                  </a>
                </Link>
              </span>
            </div>
          ))}
            
        </div>
      </div>
      {/* all catagories end */}
    </>
  );
};

export default AllCatagories;
