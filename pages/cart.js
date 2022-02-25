import {
  ArchiveIcon,
  ArrowLeftIcon,
  ClipboardIcon,
  LogoutIcon,
  RefreshIcon
} from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const Cart = ({createCheckoutSession}) => {
  const fakeCart = [
    {
      id: "1",
      title: "Field Roast Chao Cheese Creamy Original",
      img: "https://i.ibb.co/5T05pBT/product-1-1.jpg",
    },
    {
      id: "12",
      title: "Field Roast Chao Cheese Creamy Original",
      img: "https://i.ibb.co/5T05pBT/product-1-1.jpg",
    },
    {
      id: "13",
      title: "Field Roast Chao Cheese Creamy Original",
      img: "https://i.ibb.co/5T05pBT/product-1-1.jpg",
    },
  ];
  return (
    <div>
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-2 bg-gray-100 rounded-lg border">
            <h1 className="text-2xl text-center font-semibold py-4">
              Shopping Cart
            </h1>
            <hr />
            <div>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Product
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Unit Price
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Total
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
                            >
                              Remove
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {fakeCart.map((cart) => (
                            <tr
                              key={cart.id}
                              className="border-b odd:bg-white even:bg-gray-50"
                            >
                              <td className="flex flex-row gap-2 items-center py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                <input
                                  id="checkbox"
                                  type="checkbox"
                                  className="w-4 h-4"
                                />
                                <div className="border">
                                  <Image
                                    width={80}
                                    height={80}
                                    src="https://i.ibb.co/5T05pBT/product-1-1.jpg"
                                    alt="image"
                                  ></Image>
                                </div>
                                <h1>Field Roast Chao Cheese Creamy Original</h1>
                              </td>
                              <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                $ <span>2.51</span>
                              </td>
                              <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                <span>1</span>
                              </td>
                              <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                $ <span>299</span>
                              </td>
                              <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                <ArchiveIcon className="w-4 text-red-500 mx-auto" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center py-4 px-4">
              <button className="bg-green-500 flex flex-row gap-1 items-center hover:bg-green-600 text-white px-2 py-2 rounded">
                <ArrowLeftIcon className="w-4" /> Continue Shopping
              </button>
              <button className="bg-green-500 flex flex-row gap-1 items-center  hover:bg-green-600 text-white px-2 py-2 rounded">
                {" "}
                <RefreshIcon className="w-4 " />
                Update Cart
              </button>
            </div>
          </div>
          <div className="bg-gray-100 px-4 rounded-lg border">
            <h1 className="text-2xl text-center font-semibold py-4">
              Order Summery
            </h1>
            <hr />
            <div>
              <div className="flex flex-row justify-between py-4">
                <h2 className="text-lg font-semibold">
                  Items <span>3</span>
                </h2>
                <h2>
                  $ <span>000</span>
                </h2>
              </div>
              <div className="flex flex-row justify-between">
                <h2 className="text-lg font-semibold">Shipping</h2>
                <h2 className="font-semibold uppercase">free</h2>
              </div>
              <div className="flex flex-row justify-between pt-4">
                <h2 className="text-lg font-semibold">Estimated For</h2>
                <h2>Bangladesh</h2>
              </div>
              <div className="py-4">
                <h2 className="text-lg font-semibold">Coupon Code</h2>
                <div className="flex flex-row items-center py-4">
                  <input
                    className="bg-white border focus:border-green-600 w-full outline-none py-2 px-4"
                    type="text"
                    placeholder="Give coupon code"
                  />
                  <button className="bg-green-500 flex flex-row items-center gap-2 hover:bg-green-600 text-white font-semibold py-2 px-4">
                    <ClipboardIcon className="w-4 " /> Apply
                  </button>
                </div>
              </div>
              <hr />
              <div className="flex flex-row justify-between pt-4">
                <h2 className="text-lg font-semibold">Total Cost</h2>
                <h2>
                  $ <span>000</span>
                </h2>
              </div>
              <div className="py-4 mb-2">
                <button onClick={createCheckoutSession} role="link" type="submit" className="bg-green-500 flex flex-row gap-2 justify-center items-center w-full hover:bg-green-600 text-white font-semibold py-2 px-4">
                  Proceed To Checkout
                  <LogoutIcon className="w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
