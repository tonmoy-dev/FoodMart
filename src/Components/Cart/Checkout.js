import { css } from "@emotion/react";
import {
  ArchiveIcon,
  ArrowLeftIcon,
  ClipboardIcon, LogoutIcon,
  RefreshIcon
} from "@heroicons/react/solid";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DotLoader from "react-spinners/DotLoader";
import swal from "sweetalert";

const Cart = ({ createCheckoutSession, items, control, setControl, loading, setLoading}) => {
  const [color, setColor] = useState("green");
  const user = useSelector((state) => state.states.user);
  const products = items;

  const handleDelete = async (id) => {
    axios.delete(`/api/cart?product_id=${id}`, {
    }).then(response => {
        if (response.data.deletedCount) {
          setControl(!control);
          setLoading(false);
            swal("Oh!", "You removed a product from your cart", "success");
        } else {
          setControl(false);
          setLoading(false);
        } 
    })
  };

  // send items to the orders
  const handleAddOrders = async (items,total,email) => {
    axios.post("/api/orders", {
      email:email,
      items,
      price:total,
    }).then((response) => {
    });
  };
  
  let sum = 0;
    for (let i = 0; i < products.length; i++) {
          sum = parseInt(products[i].price) + sum;
  }
  const totalPrice = sum;

  const override = css`
  display: block;
  margin: 0 auto;
  `;  

  return (
    <div>
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-2 bg-gray-100 rounded-lg border">
            <h1 className="text-2xl text-center font-semibold py-4">
              Shopping Cart
            </h1>
            <hr />
            {
              loading && (
                <DotLoader color={color} loading={loading} css={override} size={60} />
              )
            }
            {/* Cart is empty */}
            {
              !loading && (products.length === 0)  && (
                <div className="py-10 px-5">
                  <p className="text-center text-orange-500 font-semibold text-2xl">You have no product to your cart. Please add a product!</p>
                </div>
              )
            }
            {/* Cart is not empty */}
            {
              !loading && (products.length !== 0)  && (
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
                              {products.map((product) => (
                                <tr
                                  key={product._id}
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
                                        src={product.image}
                                        alt="image"
                                      ></Image>
                                    </div>
                                    <h1>{product.title}</h1>
                                  </td>
                                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                    $ <span>{product.price}</span>
                                  </td>
                                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                    <span>1</span>
                                  </td>
                                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                    $ <span>{product.price}</span>
                                  </td>
                                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                                    <button onClick={() => handleDelete(product._id)}><ArchiveIcon className="w-5 mt-1 text-red-500 mx-auto" /></button>
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
             )
            }
                <div className="flex flex-row justify-between items-center py-4 px-4">
                  <button className="bg-green-500 flex flex-row gap-1 items-center hover:bg-green-600 text-white px-2 py-2 rounded">
                    <ArrowLeftIcon className="w-4" />
                    <Link href="/products/all-products">
                      Continue Shopping
                    </Link>
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
                  Items <span>{products.length}</span>
                </h2>
                <h2>
                  $ <span>{totalPrice}</span>
                </h2>
              </div>
              <div className="flex flex-row justify-between">
                <h2 className="text-lg font-semibold">Shipping</h2>
                <h2 className="font-semibold uppercase">$ 6</h2>
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
                    <ClipboardIcon className="w-4" /> Apply
                  </button>
                </div>
              </div>
              <hr />
              <div className="flex flex-row justify-between pt-4">
                <h2 className="text-lg font-semibold">Total Cost</h2>
                <h2>
                  $ <span>{totalPrice + 6}</span>
                </h2>
              </div>
              <div className="py-4 mb-2">
                {
                  products.length === 0 ? (
                    <button disabled className="bg-green-500 flex flex-row gap-2 justify-center items-center w-full hover:bg-green-600 text-white font-semibold py-2 px-4">
                  Proceed To Checkout
                    </button>
                  ) : (
                    <button onClick={()=>[createCheckoutSession(),handleAddOrders(products,totalPrice,user.email)]} role="link" type="submit" className="bg-green-500 flex flex-row gap-2 justify-center items-center w-full hover:bg-green-600 text-white font-semibold py-2 px-4">
                  Proceed To Checkout
                  <LogoutIcon className="w-4" />
                      </button>
                    )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
