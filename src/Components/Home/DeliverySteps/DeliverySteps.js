import Image from "next/image";
import React from "react";
import shipping from "./DeliveryImages/shipping.png";
import pay from "./DeliveryImages/pay.png";
import moneback from "./DeliveryImages/back.png";
import choose from "./DeliveryImages/choose.png";

const DeliverySteps = () => {
  return (
    <div>
      <div className="container mx-auto py-2 pb-4">
        <div id="delivery-title">
          <p className="text-2xl text-gray-700 font-semibold capitalize text-center pb-6">Four steps delivery</p>
        </div>
        <div className="grid mx-2 lg:mx-0 md:mx-0 bg-red-00 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="block  shadow-lg bg-gray-100 max-w-sm text-center">
            <div className="p-6">
              <Image
                width={50}
                height={50}
                src={shipping}
                alt="shipping"
              ></Image>
              <h5 className="text-green-500 text-lg font-medium mb-2 rounded- ">
                Free Shipping
              </h5>
              <p className="text-gray-700 text-sm mb-4">
                On Order Over 100%
              </p>
            </div>
          </div>
          <div className="block  shadow-lg bg-gray-100 max-w-sm text-center">
            <div className="p-6">
              <Image width={50} height={50} src={choose} alt="pay"></Image>
              <h5 className="text-green-500 text-lg font-medium mb-2">
               Choose your food
              </h5>
              <p className="text-gray-700 text-base mb-4">
                Your favourite food
              </p>
            </div>
          </div>
          <div className="block  shadow-lg bg-gray-100 max-w-sm text-center">
            <div className="p-6">
              <Image width={50} height={50} src={pay} alt="pay"></Image>
              <h5 className="text-green-500 text-lg font-medium mb-2">
                Pay your bill
              </h5>
              <p className="text-gray-700 text-base mb-4">
                With supporting text below 
              </p>
            </div>
          </div>
          <div className="block  shadow-lg bg-gray-100 max-w-sm text-center">
            <div className="p-6">
              <Image width={50} height={50} src={moneback} alt="pay"></Image>
              <h5 className="text-green-500 text-lg font-medium mb-2">
               Money back 100%
              </h5>
              <p className="text-gray-700 text-sm mb-4">
                With in 30days after delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySteps;
