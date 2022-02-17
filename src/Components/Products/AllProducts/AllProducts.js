import React from 'react';
import Products from '../Products/Products';
import SideBar from '../SideBar/SideBar/SideBar';

const AllProducts = ({ products }) => {
    return (
        <div className=' flex flex-col justify-center align-middle items-center bg-gray-100 '>
            {/* <div className='grid grid-cols-2 p-2 bg-red-400 justify-center '> */}
            <div className=' AllProducts-style grid  lg:grid-flow-col xl:grid-flow-col md:grid-flow-row sm:grid-flow-row grid-flow-row justify-center '>
                {/* <div className='container mx-auto  grid grid-flow-col grid-cols-2 justify-center px-10 min-h-screen  '> */}

                {/* <h1 className="my-5 text-center">All Products</h1> */}                
                <div className=" mx-auto ">

                    <Products products={products}></Products>
                </div>
                <div className="mx-auto px-4">
                    <SideBar ></SideBar>
                </div>
                {/* <div className=' relative'> */}
                {/* top-0 right-0 */}
                {/* <div className="absolute"> */}

                {/* <SideBar ></SideBar> */}
                {/* </div> */}

                {/* </div> */}


            </div>
        </div>
    );
};

export default AllProducts;