import React from "react";

const ManageProduct = () => {
  return (
    <div>
      <div className="md:p-10 bg-white md:shadow-lg  md:rounded-lg">
        <h2 className="text-2xl font-semibold">ss</h2>
        <div className="mt-6 overflow-auto rounded-lg shadow hidden md:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th
                  scope="col"
                  className="p-6 text-sm font-semibold tracking-wide text-left"
                >
                  <p className="">Select</p>
                </th>
                <th
                  scope="col"
                  colSpan="2"
                  className="p-6 text-sm font-semibold tracking-wide text-center"
                >
                  <p>Product</p>
                </th>
                <th
                  scope="col"
                  className="p-6 text-sm font-semibold tracking-wide text-center"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="p-6 text-sm font-semibold tracking-wide text-center"
                >
                  Stock Status
                </th>
                <th
                  scope="col"
                  className="p-6 text-sm font-semibold tracking-wide text-center"
                >
                  Action
                </th>
                <th
                  scope="col"
                  className="p-6 text-sm font-semibold tracking-wide text-center"
                >
                  Manage
                </th>
              </tr>
            </thead>
            {/* <div className="flex justify-center"><h3 className="text-2xl text-gray-600 m-auto py-10">You have no Wishlist product. Please add product in Wishlist.</h3></div> */}
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-4 whitespace-nowrap">
                  <input type="checkbox" className="ml-4" />
                </td>
                <td className="py-4 whitespace-nowrap">
                  <p className="w-36"></p>
                  {/* <Image
                                                                src={
                                                                    product_imageUrl
                                                                }
                                                                alt="product image"
                                                                className="object-cover"
                                                                width="120px"
                                                                height="90px"
                                                            /> */}
                </td>
                <td className="p-4 whitespace-nowrap"></td>
                <td className="p-4 whitespace-nowrap"></td>
                <td className="p-4 whitespace-nowrap text-center">
                  <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                    {" "}
                    In Stock
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap text-center">
                  <button className="p-2 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-300 rounded-lg bg-opacity-50 border border-green-300 hover:bg-opacity-80 hover:text-green-600">
                    Add to cart
                  </button>
                </td>
                <td className="p-4 whitespace-nowrap ">
                  <button className="flex justify-center items-center"></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Mobile Responsive  */}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                                    {wishlists.map((wish) => {
                                        const {
                                            product_title,
                                            product_price,
                                            user_rating,
                                            product_stock,
                                            product_imageUrl,
                                            _id,
                                        } = wish;
                                        return (
                                            <div
                                                key={_id}
                                                className="my-4 bg-indigo-100 bg-opacity-50 shadow-lg py-6 rounded-lg space-x-2 space-y-2"
                                            >
                                                <div className="flex">
                                                    <div className="flex px-2 border-r border-gray-300">
                                                        <Image
                                                            src={
                                                                product_imageUrl
                                                            }
                                                            alt="product image"
                                                            className="object-cover"
                                                            width="110px"
                                                            height="70px"
                                                        />
                                                    </div>
                                                    <div className="px-2">
                                                        <div className="text-sm text-gray-600">
                                                            <p className="text-center">
                                                                <a href="#">
                                                                    {
                                                                        product_title
                                                                    }
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div className="text-sm text-gray-600">
                                                            <div className="flex justify-center items-center">
                                                                <h6 className="pl-4">
                                                                    {
                                                                        user_rating
                                                                    }
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <div className="py-2 text-center">
                                                            <span className="p-1.5 text-xs  font-medium uppercase tracking-wider text-green-500 bg-green-200 rounded-lg bg-opacity-50">
                                                                {product_stock}{" "}
                                                                In Stock
                                                            </span>
                                                        </div>
                                                        <div className="text-base font-medium text-gray-600">
                                                            <p>
                                                                ${product_price}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-between items-center  text-sm pt-2">
                                                            <div className="text-center">
                                                            </div>
                                                            <div>
                                                                <button
                                                                    onClick={() =>
                                                                        addToCartHandler(
                                                                            product_title,
                                                                            product_imageUrl,
                                                                            product_price
                                                                        )
                                                                    }
                                                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-500 bg-green-300 rounded-lg bg-opacity-50 border border-green-300 hover:bg-opacity-80 hover:text-green-600"
                                                                >
                                                                    Add to cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div> */}
      </div>
    </div>
  );
};

export default ManageProduct;
