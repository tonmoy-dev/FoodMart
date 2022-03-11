import React from 'react';

const OfferModal = ({handleModal}) => {
    return (
        <div className='absolute left-0 right-0 z-50'>
            <style>
                {`
               .modal-card{
                background: linear-gradient(to right, #f1f1f1 , rgba(255,255,255,0.2)), url("https://i.ibb.co/pjDVZf2/hero-img-1-1.jpg");
                background-repeat: "no-repeat";
                background-size:"cover";
                width:700px;
            }
               .modal-subtitle{
                   letter-spacing: 14px;
               }
                `}
            </style>
            <div className="modal-container h-screen flex justify-center items-center mx-4 lg:mx-0 md:mx-0">
                <div  className="modal-card relative w-3/6 h-96 flex flex-col justify-center pl-6 md:pl-20 lg:pl-20 rounded shadow-lg">
                    <div onClick={handleModal} className='absolute top-0 right-0 px-4 py-2 m-4 cursor-pointer text-2xl hover:text-lime-600 rounded'>x</div>
                    <p className='text-lg modal-subtitle text-black'>Top SELLING</p>
                    <h1 className='text-5xl my-4'>ORGANIC FOOD <br /><span className='text-orange-500 font-semibold'>20%</span> OFF</h1>
                    {/* <div className='pt-2'><button className='bg-lime-600 text-white px-6 rounded-full py-2'>Purchase</button></div> */}
                   <p className='w-3/4'>Join over 1,000 people who get free and fresh content delivered automatically each time we publish.</p>
                   <div className='py-4 flex flex-row'><input className='bg-transparent w-1/2 text-lime-600 border focus:border-lime-600 focus:ring-0' type="text" placeholder='Type your email here' />
                   <button className='bg-lime-600 transition hover:bg-lime-700 font-semibold text-white px-6 py-2'>Subscribe</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default OfferModal;