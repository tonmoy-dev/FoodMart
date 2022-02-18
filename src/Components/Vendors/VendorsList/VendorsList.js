import Image from 'next/image';
import React from 'react';



const VendorsList = () => {
    // hello
    let Allvendors = require("../../../assets/Api/Vendors.json");
    return (
        <div>
            <div className=" py-5  ">
                <div>
                    {/* <h1 className='text-gray-700 text-center font-bold text-4xl '>Vendor List</h1> */}
                </div>
                <div className='flex flex-col my-2 justify-between  md:flex-row lg:flex-row p-4 '>
                    <h2 className="" >We have found <span className="font-semibold text-green-700">{Allvendors.length}</span> Vendors </h2>

                    <div className="">
                        <form className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row" action="">
                            <div>
                                <label htmlFor="">Show:</label>
                                <select className="mx-2" name="Sort by" id="cars">
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="200">200</option>

                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Category:</label>
                                <select className="mx-2" name="cars" id="cars">
                                    <option value="snacks">snacks</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            {/* <input className='bg-orange-600 px-2 text-white' type="submit" value="Submit" /> */}
                        </form>
                    </div>

                </div>
                {/* 
                <div className='flex items-center justify-center min-h-screen p-5 bg-slate-400'>
                    <div className='grid grid-cols-2 xl:grid-cols-1  2xl:grid-cols-2 gap-5'>

                        <h1>1</h1>
                        <h1>2</h1>
                        <h1>3</h1>
                        <h1>4</h1>
                        <h1>5</h1>
                        <h1>6</h1>
                        <h1>7</h1>
                        <h1>8</h1>
                        <h1>9</h1>
                        <h1>10</h1>
                        <h1>11</h1>
                    </div>
                </div> */}

                <div className="mx-5 vendors-grid-style p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5 ">


                    {
                        Allvendors.map(vendor => {

                            const { vendor_id, vendor_name, imageUrl, vendor_phone, vendor_email, vendor_address, total_products, vendor_rating, vendor_rating_count, vendor_details } = vendor;
                            const { thumbnail, banner, logo } = imageUrl;

                            return (<div key={vendor_id} className="p-5 ">
                                <a href="#" className="bg-white flex flex-col md:items-center  2xl:items-center xl:items-center lg:items-center items-start   rounded-lg border shadow-lg md:flex-col lg:flex-row xl:flex-row 2xl:flex-row  hover:bg-gray-100 ">
                                    <div className="p-4 mx-auto ">
                                        <Image className="object-cover   rounded-t-lg md:h-auto  md:rounded-none md:rounded-l-lg" src={logo} alt="product image" height="300" width="300" />
                                    </div>
                                    <div className="flex flex-col justify-center   p-4 text-start md:items-start md:justify-start  leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-dark ">{vendor_name}</h5>
                                        <ul className="flex items-center mt-2.5 mb-1">
                                            <li>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                </svg>
                                            </li>
                                            <li>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                </svg>
                                            </li>
                                            <li>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                </svg>
                                            </li>
                                            <li>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                </svg>
                                            </li>

                                            <li>
                                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                                </svg>
                                            </li>
                                            <span className=" text-blue-800 text-xs font-semibold mr-2  py-0.5 rounded dark:bg-white dark:text-black ml-1">({vendor_rating_count})</span>
                                        </ul>
                                        <h5>
                                            Phone: <span>  {vendor_phone}</span>
                                        </h5>
                                        <h5 className="break-words   flex flex-row sm:flex-col ">
                                            Email: <p className="  ">  naturefood@foodmart.com</p>
                                        </h5>
                                        <h5>
                                            Address: <span>  {vendor_address}</span>
                                        </h5>
                                        <div className=" ">

                                            <button className="px-3 py-2 mt-5 rounded-lg bg-green-600 text-white ">Visit Store</button>
                                        </div>
                                    </div>
                                </a>
                            </div>)

                        })
                    }





                </div>

            </div>
        </div>
    );
};

export default VendorsList;