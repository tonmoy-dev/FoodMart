import Link from 'next/link';
import React from "react";
import { MdCancel } from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from '../../redux/slices/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cartItems.cart);
    const user = useSelector((state) => state.states.user);
    
     // products filter & set quantity
    const newItem = {};
    items.forEach(item => {    
        const product =  newItem[item.title] = newItem[item.title] || {...item, quantity: 0}
        product.quantity += item.quantity
    })
    const cartAllProducts = Object.values(newItem);
    
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
          sum = parseInt(items[i].price) + sum;
    }
    
    const totalPrice = sum;

    
    return (
        <div className="mx-auto">
            <div className="p-5">
                <h1 className="mb-2 text-xl font-medium text-center">Shopping Cart</h1>
                <div className="py-2 border-t">
                    {
                        items.length === 0 && (
                            <p className="py-3 text-base text-center">Your cart is empty now.</p>
                        )
                    }
                    {
                        cartAllProducts.length !== 0 && (
                            cartAllProducts.map(item => (
                                <div key={item._id} className="flex items-center w-full py-2 text-sm border-b">
                                    <div className="flex items-center w-6/12 gap-x-2">
                                        <img src={item.image} width="60" className="rounded-md " />
                                        <div className="">
                                            <p className="font-medium">{item.title}</p>
                                            <p className="text-sm font-normal text-gray-500">${item.price} / kg</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-3/12 text-black">
                                        <span>{item.quantity}</span> 
                                        {/* <span className="">-</span> */}
                                        {/* <input readOnly type="text" className="w-8 h-6 px-2 mx-2 bg-gray-100 border rounded focus:outline-none" value={item.quantity} /> */}
                                        {/* <span className="">+</span> */}
                                    </div>
                                    <p className="w-2/12 text-sm font-semibold text-center">${item.price}</p>
                                    <button className="w-1/12">
                                        <MdCancel onClick={() => dispatch(removeCartItem(item._id))} className="block w-4 h-4 mx-auto text-center text-gray-400 hover:text-red-500" />
                                    </button>
                                </div>
                            ))
                        )
                    }
                    {
                        items.length !== 0 && (
                            <div className="flex items-center justify-between pt-2 border-t">
                                    <div className="flex items-center">
                                        <button className="px-3 py-2 font-medium text-white rounded-md text-md hover:bg-orange-500 primary-bg-color">
                                            <Link href="/cart"><a>Proceed to checkout</a></Link>
                                        </button>
                                    </div>
                                    <div className="flex items-end justify-center">
                                        <span className="mr-1 text-sm font-medium text-gray-600">Subtotal:</span>
                                    <span className="text-lg font-medium text-gray-800 "> ${totalPrice}</span>
                                    </div>
                                </div>
                        )
                    }

                    
                </div>
            </div>
        </div>
    );
}

export default Cart;
  
