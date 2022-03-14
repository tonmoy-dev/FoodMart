import React from "react";

const Cart = () => {
    return (
        <div class="container mx-auto p-3">
            <div class="p-5">
                <h1 class="text-xl font-medium ">Shopping Cart</h1>
                <div className="">
                    <div class="flex pt-4 border-t">
                        <div class="flex">
                            <img src="https://i.imgur.com/EEguU02.jpg" width="60" class="rounded-full " />
                            <div class="flex flex-col ml-3"> <p class="md:text-md font-medium">Chicken momo</p> <p class="text-xs font-light text-gray-400">#41551</p> </div>
                        </div>
                        <div class="flex">
                            <div class="flex"> <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1" /> <span class="font-semibold">+</span> </div>
                            <div class=""> <span class="text-xs font-medium">$10.50</span> </div>
                            <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center mt-6 pt-6 border-t">
                        <div class="flex items-center"> <i class="fa fa-arrow-left text-sm pr-2"></i> <span class="text-md font-medium text-blue-500">Continue Shopping</span> </div>
                        <div class="flex justify-center items-end"> <span class="text-sm font-medium text-gray-400 mr-1">Subtotal:</span> <span class="text-lg font-bold text-gray-800 "> $24.90</span> </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
  
