import React from "react";
import Product from "../../Products/Product/Product";

const PopularProducts = ({ products }) => {
    const allProducts = products.slice(0, 5);
    return (
        <div className="container mx-auto px-4 md:px-0 py-10">
            <div className="flex justify-between pb-5">
                <div>
                    <h1 className="text-3xl font-bold mb-4">
                        Popular Products
                    </h1>
                </div>
                <div>
                    <p className=" inline-block ">All</p>
                    <p className=" inline-block px-2 ">Milk & Dairies</p>
                    <p className=" inline-block px-2 ">Coffe & Teas</p>
                    <p className=" inline-block px-2 ">Pet Foods</p>
                    <p className=" inline-block px-2 ">Meats</p>
                    <p className=" inline-block px-2 ">Vegetables</p>
                    <p className=" inline-block px-2 ">Fruits</p>
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

export default PopularProducts;
