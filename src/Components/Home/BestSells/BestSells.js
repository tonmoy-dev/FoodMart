import React from "react";
import Product from "../../Products/Product/Product";

const BestSells = ({ products }) => {
  const allProducts = products.slice(6, 10);
  return (
    <div className="container mx-auto pt-10 px-4 md:px-0">
      <div className="flex md:flex-row flex-col justify-between">
        <h1 className="text-3xl font-bold mb-8">Daily Best Sells</h1>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 mb-8">
          <p className="border py-1 rounded-full flex items-center justify-center px-3 hover:bg-green-500 hover:text-white cursor-pointer transition">
            Featured
          </p>
          <p className="border py-1 rounded-full flex items-center justify-center px-3 hover:bg-green-500 hover:text-white cursor-pointer transition">
            Popular
          </p>
          <p className="border py-1 rounded-full flex items-center justify-center px-3 hover:bg-green-500 hover:text-white cursor-pointer transition">
            New
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div>
          <div
            style={{
              backgroundImage: `url('https://i.ibb.co/SxmdMRx/photo-1524222835726-8e7d453fa83c.jpg')`,
              height: "26rem",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="rounded-lg border-1"
          >
            <div className="py-10 px-10">
              <p className="text-3xl font-semibold text-gray-600">
                Buy your goods{" "}
                <span>
                  <br />
                </span>{" "}
                from our{" "}
                <span>
                  <br />
                </span>{" "}
                Shop
              </p>
            </div>
            <div className="px-10">
              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                See more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 pr-2 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {allProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default BestSells;
