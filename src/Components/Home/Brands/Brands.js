import Image from "next/image";
import React from "react";
import brand1 from "../../../../src/assets/brandsImg/1.jpg";
import brand4 from "../../../../src/assets/brandsImg/10.png";
import brand2 from "../../../../src/assets/brandsImg/5.jpg";
import brand6 from "../../../../src/assets/brandsImg/6.png";
import brand5 from "../../../../src/assets/brandsImg/8.png";
import brand3 from "../../../../src/assets/brandsImg/9.jpg";
const Brands = () => {
  return (
    <div className="py-4">
      <div>
        <div>
          {/* <h1 className='text-black  text-3xl font-bold text-center'>Our Brands Partner</h1> */}
        </div>
      </div>
      <br />

      <div className="flex items-center justify-center">
        <br />
        <div className="mx-6  grayscale-[100%] hover:grayscale-[50%]">
          <Image
            src={brand1}
            alt="Picture of the author"
            width={250}
            height={120}
            priority
          />
        </div>

        <div className="mx-4  grayscale-[100%] hover:grayscale-[50%]">
          <Image
            src={brand2}
            alt="Picture of the author"
            width={150}
            height={100}
            priority
          />
        </div>

        <div className="mx-4  grayscale-[100%] hover:grayscale-[50%]">
          <Image
            src={brand3}
            alt="Picture of the author"
            width={150}
            height={100}
            priority
          />{" "}
        </div>

        <div className="mx-4  grayscale-[100%] hover:grayscale-[50%]">
          <Image
            src={brand4}
            alt="Picture of the author"
            width={150}
            height={100}
            priority
          />
        </div>
        <div className="mx-4  grayscale-[100%] hover:grayscale-[50%]">
          <Image
            src={brand5}
            alt="Picture of the author"
            width={150}
            height={100}
            priority
          />
        </div>

        <div className="mx-4  grayscale-[100%] hover:grayscale-[50%]">
          <Image
            src={brand6}
            alt="Picture of the author"
            width={250}
            height={150}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
