import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdCancel } from 'react-icons/md';
import { useSelector } from "react-redux";

const Cart = () => {
    const [items, setItems] = useState([]);
    const [control, setControl] = useState(false);
    const [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.states.user);
  
    // cart data
    useEffect(() => {
      setLoading(true);
    //   setControl(true);
        axios.get(`/api/cart?email=${user.email}`).then(response => {
          setItems(response.data);
          setLoading(false);
        });
    }, [user.email]);
    return (
        <div className="mx-auto">
            <div className="p-5">
                <h1 className="text-xl font-medium mb-2 text-center">Shopping Cart</h1>
                <div className="py-2 border-t">
                    {
                        loading ? 'please wait' : (
                            items.map(item => (
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
                                        <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded  px-2 mx-2" value="1" />
                                        <span className="">+</span>
                                    </div>
                                    <p className="w-2/12 text-sm text-center font-semibold">${item.price}</p>
                                    <button className="w-1/12">
                                        <MdCancel className="block mx-auto text-center w-4 h-4 text-gray-400 hover:text-red-500" />
                                    </button>
                                </div>
                            ))
                        )
                    }

                    <div className="flex justify-between items-center pt-2 border-t">
                        <div className="flex items-center">
                            <button className="text-md font-medium text-white hover:bg-orange-500 primary-bg-color px-3 py-2 rounded-md">Proceed to checkout</button>
                        </div>
                        <div className="flex justify-center items-end">
                            <span className="text-sm font-medium text-gray-600 mr-1">Subtotal:</span>
                            <span className="text-lg font-medium text-gray-800 "> $24.90</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
  
