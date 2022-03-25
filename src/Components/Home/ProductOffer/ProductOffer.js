import React from "react";
import Link from "next/link";

const ProductOffer = () => {
  return (
    <div className="py-10 mx-4 md:mx-8 overflow-hidden">
      <style jsx>{`
        .bgOffer {
          background: url("https://i.ibb.co/3pJRbYM/banner14.jpg");
          background-repeat: no-repeat;
          background-position: center;
        }
      `}</style>
      <style jsx>{`
        .bgOfferT {
          background: url(" https://i.ibb.co/fQP4dQ0/banner13.jpg");
          background-repeat: no-repeat;
          background-position: center;
        }
      `}</style>

      <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-2 mb-8 justify-between items-center container mx-auto">
        <h1 className="text-center text-black font-bold text-3xl">
          Best Offer Products
        </h1>
        <p className="text-center capitalize text-gray-700 text-sm">
          Trusted and powerful eCommerce store for all
        </p>
      </div>
      <div className="md:flex gap-6">
        <div className="bgOffer flex justify-start items-center h-56 overflow-hidden md:w-1/2 rounded-md shadow-md">
          <div className="p-2 md:px-6 md:py-6 w-2/3 overflow-hidden">
            <p className="text-sm primary-color capitalize">Prod of India</p>
            <a
              href="#"
              className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform hover:text-gray-600 hover:underline"
            >
              Fruit & Vegetables
            </a>
            <p>Get 30% off on your order</p>
            <Link href="/products/all-products">
              <a className="primary-color transition font-semibold uppercase">
                Buy Now
              </a>
            </Link>
          </div>
        </div>
        <div className="bgOfferT flex justify-start items-center mt-4 md:mt-0  h-56 overflow-hidden md:w-1/2 rounded-md shadow-md">
          <div className="p-2 md:px-6 md:py-6 w-2/3 overflow-hidden">
            <p className="text-sm primary-color capitalize">Winter Foods</p>
            <h2 className="block mt-2 text-2xl font-semibold text-gray-800">
              Orange & Monestera
            </h2>
            <p>Flat 25% Discount</p>
            <Link href="/products/all-products">
              <a className="primary-color transition font-semibold uppercase">
                Buy Now
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOffer;
