import React from 'react';

const AddProduct = () => {
    return (
        <div className="bg-gray-200 h-screen w-screen py-5">
            <div>
                <div className="flex flex-wrap items-center justify-center ">

                    {/* <div className="bg-slate-400">
                        <form action="">
                            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-start ">
                                <label className='px-2' htmlFor="title">Product Title </label>
                                <input className='w-96' type="text" />
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-start ">
                                <label className='px-2' htmlFor="title">Image Url </label>
                                <input className='w-96' type="text" />
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-start ">
                                <label className='px-2' htmlFor="title">Product Title </label>
                                <input className='w-96' type="text" />
                            </div>
                        </form>
                    </div> */}
                    <div className="flex justify-center items-center  w-full ">
                        <div className="w-1/2 bg-white rounded-lg p-8 m-4">
                            <div className="">
                                <h1 className='text-gray-700 text-center font-bold text-4xl '>Add New Product</h1>
                            </div>
                            {/* <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Register</h1> */}
                            <form className='pt-10' action="/" method="post">
                                <div className="flex flex-col mb-4">
                                    <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="product_title">Product Title:</label>
                                    <input className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="text" name="product_title" id="product_title" />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="product_category">Product Category:</label>
                                    <input className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="text" name="product_category" id="product_category" />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="image_url">Image Url:</label>
                                    <input className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="text" name="image_url" id="image_url" />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="product_price">Product Price:</label>
                                    <input className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="text" name="text" id="product_price" />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="product_stock">Product Stock:</label>
                                    <input className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="text" name="text" id="product_stock" />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="vendor_name">Vendor Name:</label>
                                    <input className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="text" name="text" id="vendor_name" />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="productDetails">Product Details:</label>
                                    <textarea className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800" type="productDetails" name="productDetails" id="productDetails" rows="10">
                                    </textarea>
                                </div>
                                <button className="block font-bold rounded-xl bg-green-600 hover:bg-green-800 text-white uppercase text-lg mx-auto p-4 " type="submit">Add Product</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;