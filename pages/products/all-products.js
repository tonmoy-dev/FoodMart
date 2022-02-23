import React from "react";
import Products from "../../src/Components/Products/Products/Products";
import SideBar from "../../src/Components/Products/SideBar/SideBar/SideBar";

const AllProducts = () => {
let products = require("../../src/assets/Api/Products.json");
  return (
    <div className=" flex flex-col justify-center align-middle items-center bg-gray-100 ">
      <div className="pt-10">
        <h1 className="text-gray-700 font-bold text-4xl ">All Products</h1>
      </div>
      <div className=" AllProducts-style grid  lg:grid-flow-col xl:grid-flow-col md:grid-flow-row sm:grid-flow-row grid-flow-row justify-center ">
        <div className=" mx-auto ">
          <Products products={products}></Products>
        </div>
        <div className="mx-auto px-4">
          <SideBar></SideBar>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
