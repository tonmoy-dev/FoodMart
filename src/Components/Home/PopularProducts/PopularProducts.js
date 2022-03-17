import React from "react";
import Product from "../../Products/Product/Product";
import { useState } from "react";

const PopularProducts = ({ products }) => {
  const allProducts = products?.filter(
    (topProduct) => topProduct.user_rating == 5
  );

  const [filterProducts, setFilterProducts] = useState();
  const [loading, setLoading] = useState(true);

  // filter by catagories
  const filterHandler = (categoryName) => {
    const newProducts = products.filter(
      (product) => product.product_category == categoryName
    );
    setFilterProducts(newProducts);
    setLoading(false);
  };
  // filter by rating
  const ratingfilter = filterProducts?.filter(
    (topProduct) => topProduct.user_rating == 5
  );

  return (
    <div className="container mx-auto px-4 md:px-0 py-10">
      <div className="flex md:flex-row flex-col md:items-center justify-between pb-5">
        <div>
          <h1 className="md:text-3xl lg:text-3xl text-3xl font-bold mb-4">
            Popular Products
          </h1>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-3 gap-2">
          <button
            onClick={() => filterHandler("Fruits & Vegetables")}
            className="border rounded-full text-center py-1 md:px-2 hover:bg-green-500 hover:text-white cursor-pointer transition"
          >
            Fruits & Vegetables
          </button>
          <button
            onClick={() => filterHandler("Beverages")}
            className="border rounded-full text-center py-1 md:px-2 hover:bg-green-500 hover:text-white cursor-pointer transition"
          >
            Beverages
          </button>
          <button
            onClick={() => filterHandler("Snacks")}
            className="border rounded-full text-center py-1 md:px-2 hover:bg-green-500 hover:text-white cursor-pointer transition"
          >
            Snacks
          </button>
          <button
            onClick={() => filterHandler("Frozen & Canned")}
            className="border rounded-full text-center py-1 md:px-2 hover:bg-green-500 hover:text-white cursor-pointer transition"
          >
            Frozen & Canned
          </button>
          <button
            onClick={() => filterHandler("Breakfast")}
            className="border rounded-full text-center py-1 md:px-2 hover:bg-green-500 hover:text-white cursor-pointer transition"
          >
            Breakfast
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {loading
          ? allProducts
              .slice(1, 6)
              .map((product) => (
                <Product key={product._id} product={product}></Product>
              ))
          : ratingfilter
              .slice(0, 5)
              .map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
      </div>
    </div>
  );
};

export default PopularProducts;
