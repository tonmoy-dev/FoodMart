import React from "react";
import Product from "../../Products/Product/Product";

const PopularProducts = ({ products }) => {
  const allProducts = products.slice(0, 5);
  return (
    <div className="container mx-auto px-4 md:px-0 py-10">
      <div className="flex md:flex-row flex-col md:items-center justify-between pb-5">
        <div>
          <h1 className="md:text-3xl lg:text-3xl text-3xl font-bold mb-4">
            Popular Products
          </h1>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-3 gap-2">
          <p className="border rounded-full text-center py-1 md:px-2 hover:bg-green-500 hover:text-white cursor-pointer transition">
            Breverge
          </p>
          <p className="border rounded-full text-center py-1 md:px-2 hover:bg-green-500 hover:text-white cursor-pointer transition">
            Snacks
          </p>
          <p className="border rounded-full text-center py-1 md:px-2 hover:bg-green-500 hover:text-white cursor-pointer transition">
            Breakfast
          </p>
          <p className="border rounded-full text-center py-1 md:px-2 hover:bg-green-500 hover:text-white cursor-pointer transition">
            Meats
          </p>
          <p className="border rounded-full text-center py-1 md:px-2 hover:bg-green-500 hover:text-white cursor-pointer transition">
            Vegetables
          </p>
          <p className="border rounded-full text-center py-1 md:px-2 hover:bg-green-500 hover:text-white cursor-pointer transition">
            Fruits
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {allProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
