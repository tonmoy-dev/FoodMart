import React from "react";
import Product from "../../Products/Product/Product";
import { EyeIcon, HeartIcon, RefreshIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const RelatedProducts = ({ related }) => {
  const allProducts = related.slice(0, 5);
  return (
    <div className="container mx-auto px-4 md:px-0 py-10">
      <div className="flex justify-between pb-5">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Related Products
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {
          allProducts.map((product) => (
            <Product key={product._id} product={product} />
          ))
        }
      </div>
    </div>
  );
};
export default RelatedProducts;

