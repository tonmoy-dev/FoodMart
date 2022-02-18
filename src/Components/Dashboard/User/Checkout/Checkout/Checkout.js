import React from 'react';
import Address from '../Address/Address';
import CheckoutProductList from '../CheckoutProductList/CheckoutProductList';
import Payment from '../Payment/Payment';

const Checkout = ({ products }) => {
    return (
        <div>
            <div className=" min-w-screen min-h-screen bg-gray-200 flex flex-col text-center justify-center align-middle mx-auto px-10">
                <div className="my-10">

                    <h1 className='text-gray-700 font-bold text-4xl '>Checkout Payment Page</h1>

                    <div className=" flex xl:flex-row lg:flex-row md:flex-col justify-center">
                        {/* <div className='m-4 flex flex-row bg-white'> */}
                        <div className="w-76 mt-16 flex items-center justify-center px-5 pt-5">
                            <div className="flex sm:flex-col md:flex-row w-full mx-auto  bg-white rounded-lg shadow-lg p-5 text-gray-700" >
                            <Address products={products}></Address>
                            <Payment></Payment>
                            </div>
                        </div>
                        <div className='m-4'>
                            <CheckoutProductList products={products}></CheckoutProductList>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Checkout;