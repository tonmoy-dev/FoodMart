import React from 'react';

const Address = ({ products }) => {
    return (
        <div>
            <div>
                <div>
                    {/* <h1>Address Form</h1> */}
                    {/* min-w-screen min-h-screen bg-gray-200 */}
                    {/* <div className='w-min min-h-screen  px-5 pb-10 pt-16'>
                        <div className='w-min-76 mx-auto rounded-lg  shadow-lg p-5'> */}
                    <div className='min-h-screen w-full pb-10 '>
                        <div className=' mx-auto  p-5'>
                            <h1 className=" font-bold text-center text-xl text-gray-700 uppercase">PLESAE ENTER YOUR ADDRESS</h1>

                            <form className=' text-gray-700' action="">

                                <div className=' my-2 flex flex-col text-left '>
                                    <label htmlFor="">First Name</label>
                                    <input className='py-2 px-3  w-full   border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-500' type="text" />
                                </div>
                                <div className=' my-2 flex flex-col text-left '>
                                    <label htmlFor="">Last Name</label>
                                    <input className='py-2 px-3  w-full border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-500' type="text" />
                                </div>
                                <div className='my-2 flex flex-col text-left '>
                                    <label htmlFor="">Email Address</label>
                                    <input className='py-2 px-3  w-full border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-500' type="text" />
                                </div>
                                <div className='my-2 flex flex-col text-left '>
                                    <label htmlFor="">Mobile Number</label>
                                    <input className='py-2 px-3  w-full border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-500' type="number" placeholder='88018XXXXXXX' />
                                </div>
                                {/* <div className='my-2 flex flex-col text-left '>
                                    <label htmlFor="">Email Address</label>
                                    <input className='py-2 px-3  w-full border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-500' type="text" />
                                </div> */}
                                <div className='my-2 flex flex-col text-left  '>
                                    <label htmlFor="">Shipping Address</label>
                                    <textarea className="w-fullrounded border-2 border-gray-200  focus:outline-none focus:border-green-500" type="text" rows="10" cols="4"/>
                                </div>
                                <div className='my-2 flex flex-row text-left justify-between '>
                                    <div className='flex flex-col '>
                                        <label htmlFor="">City</label>
                                        <input className='py-2 px-3      w-full border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-500' type="text" />
                                    </div>

                                    <div className='flex flex-col '>
                                        <label htmlFor="">Zip Code</label>
                                        <input className='py-2 px-3  w-full border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-500' type="number" />
                                    </div>
                                </div>
                                <div className='flex flex-col text-left m-1 '>
                                </div>
                                <div className="pt-10">
                                    <button className="block w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg px-3 py-3 font-semibold"> Cotinue to Payment</button>
                                </div>
                                {/* <button className="bg-blue-800 text-white font-bold  py-2 px-20" type="submit">
                                    Cotinue to Payment
                                </button> */}
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Address;