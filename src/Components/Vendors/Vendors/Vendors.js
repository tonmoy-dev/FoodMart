import React from 'react';
import SideBar from '../../Products/SideBar/SideBar/SideBar';
import VendorsList from '../VendorsList/VendorsList';

const Vendors = () => {
    return (
        <div>
            <div className='bg-gray-200'>


                <div className="pt-10">
                    <h1 className='text-gray-700 text-center font-bold text-4xl '>Vendor List</h1>
                </div>
                {/* <div className='flex flex-wrap  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex-col-reverse'> */}
                <div className=''>
                    <div>
                        <VendorsList></VendorsList>
                    </div>
                    {/* <div>
                        <div className="mx-auto px-4">
                            <SideBar ></SideBar>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Vendors;