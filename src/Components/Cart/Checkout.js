// import { css } from "@emotion/react";
import {
  ArchiveIcon,
  ArrowLeftIcon,
  ClipboardIcon, LogoutIcon,
  RefreshIcon
} from "@heroicons/react/solid";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { removeCartItem } from "../../redux/slices/cartSlice";
import { fetchCartProducts, loading, setloading } from "../../redux/slices/productSlice";

const Cart = ({ createCheckoutSession}) => {
  const [color, setColor] = useState("green");
  const user = useSelector((state) => state.states.user);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartItems.cart);
  
  // products filter & set quantity
  const newItem = {};
  items.forEach(item => {    
     const product =  newItem[item.title] = newItem[item.title] || {...item, quantity: 0}
     product.quantity += item.quantity
  })
  const cartAllProducts = Object.values(newItem)
   // redux fetch
  useEffect(() => {
     dispatch(fetchCartProducts(user));
     dispatch(setloading(false));
  }, [dispatch, loading]);
  
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
    for (let i = 0; i < items.length; i++) {
          sum = parseInt(items[i].price) + sum;
  }
  const totalPrice = sum;

/*   const override = css`
  display: block;
  margin: 0 auto;
  `;  */ 

  return (
    <div>
      <div className="container py-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,550px] gap-3">
          <div className="bg-gray-100 border rounded-md">
            <h1 className="py-4 text-2xl font-semibold text-center">
              Shopping Cart
            </h1>
            <hr />
           {/*  {
              setloading(true) && (
                <DotLoader color={color} loading={loading} css={override} size={60} />
              )
            } */}
            {/* Cart is empty */}
            {
              !loading && (items.length === 0)  && (
                <div className="px-5 py-10">
                  <h2 className="py-12 m-auto text-2xl text-center">
                                    You have no Compare Products! Please add
                                    Products.
                  </h2>
                </div>
              )
            }
            {/* Cart is not empty */}
            {
              !loading && (items.length !== 0)  && (
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
                                  className="text-xs font-medium tracking-wider text-center text-gray-700 uppercase "
                                >
                                  Product
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-700 uppercase "
                                >
                                  Unit Price
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-700 uppercase "
                                >
                                  Quantity
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-700 uppercase "
                                >
                                  Total
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-700 uppercase "
                                >
                                  Remove
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {cartAllProducts.map((item) => (
                                <tr
                                  key={item._id}
                                  className="border-b odd:bg-white even:bg-gray-50"
                                >
                                  <td className="flex flex-row items-center gap-2 px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                    <div className="border">
                                      <Image
                                        width={80}
                                        height={80}
                                        src={item.image}
                                        alt="image"
                                      ></Image>
                                    </div>
                                    <h1>{item.title.slice(0,10)}..</h1>
                                  </td>
                                  <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
                                    $ <span>{item.price}</span>
                                  </td>
                                  <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
                                    <span>{item.quantity}</span>
                                  </td>
                                  <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
                                    $ <span>{(item.quantity)* parseInt(item.price)}</span>
                                  </td>
                                  <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
                                    <button onClick={() => dispatch(removeCartItem(item._id))}><ArchiveIcon className="w-5 mx-auto mt-1 text-red-500" /></button>
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
                <div className="flex flex-row items-center justify-between px-4 py-4">
                  <button className="flex flex-row items-center gap-1 px-2 py-2 text-white rounded primary-bg-color hover:bg-green-600">
                    <ArrowLeftIcon className="w-4" />
                    <Link href="/products/all-products">
                      <a>Continue Shopping</a>
                    </Link>
                  </button>
                  <button className="flex flex-row items-center gap-1 px-2 py-2 text-white rounded primary-bg-color hover:bg-green-600">
                {" "}
                    <RefreshIcon className="w-4 " />
                    <Link href="/products/all-products">
                      <a>Update Cart</a>
                    </Link>
                  </button>
                </div>
            
          </div>
          <div className="px-4 bg-gray-100 border rounded-md">
            <h1 className="py-4 text-2xl font-semibold text-center">
              Order Summery
            </h1>
            <hr />
            <div>
              <div className="flex flex-row justify-between py-4">
                <h2 className="text-lg font-semibold">
                  Items <span>{items.length}</span>
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
                    className="w-full px-4 py-2 bg-white border outline-none focus:border-green-600"
                    type="text"
                    placeholder="Give coupon code"
                  />
                  <button className="flex flex-row items-center gap-2 px-4 py-2 font-semibold text-white primary-bg-color hover:bg-green-600">
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
                  items.length === 0 ? (
                    <button disabled className="flex flex-row items-center justify-center w-full gap-2 px-4 py-2 font-semibold text-white primary-bg-color hover:bg-green-600">
                  Proceed To Checkout
                    </button>
                  ) : (
                    <button onClick={()=>[createCheckoutSession(),handleAddOrders(items,totalPrice,user.email)]} role="link" type="submit" className="flex flex-row items-center justify-center w-full gap-2 px-4 py-2 font-semibold text-white primary-bg-color hover:bg-green-600">
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
      {/* Toast Notification */}
      <ToastContainer/> 
    </div>
  );
};

export default Cart;
