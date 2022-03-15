import React, { useState } from "react";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const catagorilist = [
  {
    catagory_id: 1,
    catagory_name: "Fruits",
    catagory_icon: "https://i.ibb.co/ZVJF7xP/cat7-25x25-crop-center.jpg",
  },
  {
    catagory_id: 2,
    catagory_name: "Fishes",
    catagory_icon: "https://i.ibb.co/3kBKFh7/cat6.jpg",
  },
  {
    catagory_id: 3,
    catagory_name: "Breverage",
    catagory_icon: "https://i.ibb.co/vQQwGcQ/breverege.png",
  },
  {
    catagory_id: 4,
    catagory_name: "Drinks",
    catagory_icon: "https://i.ibb.co/2qgKQ22/driks.png",
  },
  {
    catagory_id: 5,
    catagory_name: "Snacks",
    catagory_icon: "https://i.ibb.co/qrKDV3t/snacks.png",
  },
  {
    catagory_id: 6,
    catagory_name: "Vegetable",
    catagory_icon: "https://i.ibb.co/tZjWBdz/cat5.jpg",
  },
  {
    catagory_id: 6,
    catagory_name: "Breakfast",
    catagory_icon: "https://i.ibb.co/4FHXP3B/cat9.jpg",
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
            #aallCatagories:hover #catagoriesList {
                visibility: visible;
              }
              .down-icon-rotate{
                transform: rotate(180deg);
                margin-top:4px;
              }
            `}
      </style>
      <div
        id="allCatagories"
        onClick={handleAllCatagories}
        className="transition bg-green-500 flex flex-row justify-between items-center cursor-pointer w-44 relative text-white px-2 rounded-t-lg py-2"
      >
        <MenuIcon className="w-5 h-5" />
        <h1> All Catagories</h1>
        <FiChevronDown
          className={`pt-1 w-5 h-5 ${openCatagori ? "down-icon-rotate" : ""} `}
        />
        <div
          id="catagoriesList"
          className={`bg-white rounded mt-10 top-0 h-auto py-4 ${
            openCatagori ? "visible" : "invisible"
          } z-10 shadow-lg  absolute w-full left-0 text-black flex flex-col`}
        >
          <Link href="/products/all-products">
            <a>
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
                  <span>{catagori.catagory_name}</span>
                </div>
              ))}
            </a>
          </Link>
        </div>
      </div>
      {/* all catagories end */}
    </>
  );
};

export default AllCatagories;
