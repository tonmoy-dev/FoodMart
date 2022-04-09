import axios from 'axios';
import Link from 'next/link';
import React, { useEffect } from "react";
import { MdCancel } from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { fetchProducts, loading, setloading } from '../../redux/slices/cartSlice';
import { fetchCartProducts } from '../../redux/slices/productSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.products.cartProducts);
    const user = useSelector((state) => state.states.user);
    
    useEffect(() => {
        dispatch(setloading(true));
        dispatch(fetchProducts(user));
    }, [dispatch, user?.email, loading]);
    
     // products filter & set quantity
    const newItem = {};
    items.forEach(item => {    
        const product =  newItem[item.title] = newItem[item.title] || {...item, quantity: 0}
        product.quantity += item.quantity
    })
    const cartAllProducts = Object.values(newItem)

    const handleDelete = async (id) => {
        axios.delete(`/api/cart?product_id=${id}`, {
        }).then(response => {
          if (response.data.deletedCount) {
            toast.warn('Removed a product.', {
              position: "bottom-left"
            });
            dispatch(fetchCartProducts(user));
          }
        });
        dispatch(setloading(false));
    };
    
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
          sum = parseInt(items[i].price) + sum;
    }
    
    const totalPrice = sum;

    
    return (
        <div className="mx-auto">
            <div className="p-5">
                <h1 className="text-xl font-medium mb-2 text-center">Shopping Cart</h1>
                <div className="py-2 border-t">
                    {
                        items.length === 0 && (
                            <p className="text-center py-3 text-base">Your cart is empty now.</p>
                        )
                    }
                    {
                        cartAllProducts.length !== 0 && (
                            cartAllProducts.map(item => (
                                <div key={item._id} className="flex items-center text-sm py-2 w-full border-b">
                                    <div className="w-6/12 flex gap-x-2 items-center">
                                        <img src={item.image} width="60" className="rounded-md " />
                                        <div className="">
                                            <p className="font-medium">{item.title}</p>
                                            <p className="text-sm text-gray-500 font-normal">${item.price} / kg</p>
                                        </div>
                                    </div>
                                    <div className="w-3/12 justify-center flex text-black">
                                        <span className="">-</span>
                                        <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded  px-2 mx-2" value={item.quantity} />
                                        <span className="">+</span>
                                    </div>
                                    <p className="w-2/12 text-sm text-center font-semibold">${item.price}</p>
                                    <button className="w-1/12">
                                        <MdCancel onClick={()=>handleDelete(item._id)} className="block mx-auto text-center w-4 h-4 text-gray-400 hover:text-red-500" />
                                    </button>
                                </div>
                            ))
                        )
                    }
                    {
                        items.length !== 0 && (
                            <div className="flex justify-between items-center pt-2 border-t">
                                    <div className="flex items-center">
                                        <button className="text-md font-medium text-white hover:bg-orange-500 primary-bg-color px-3 py-2 rounded-md">
                                            <Link href="/cart"><a>Proceed to checkout</a></Link>
                                        </button>
                                    </div>
                                    <div className="flex justify-center items-end">
                                        <span className="text-sm font-medium text-gray-600 mr-1">Subtotal:</span>
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
  
