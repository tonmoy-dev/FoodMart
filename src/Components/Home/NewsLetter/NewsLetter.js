import React from 'react';

const NewsLetter = () => {
    return (
        <div >
        <div className='bg-green-200 pt-3'>
             <div>
            <div>
             <h1 className='text-black mt-4  text-4xl font-semibold text-center'>Sign up for the NewsLetter</h1>
             </div>
        </div>
        <br/>
              <footer className="flex justify-center px-4 footer 
   dark:text-white bg-green-200">
        <div className="container py-6">
            <h1 className="text-lg text-gray-600  text-center lg:text-xl">
                Join 31,000+ other and never miss <br/> out on new tips, products, and more....
            </h1>

            <div className="flex justify-center  mt-6">
                <div className="bg-white border rounded-md focus-within:ring  dark:border-gray-600 focus-within:border-blue-400 focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:focus-within:border-blue-300">
                    <div className="flex  flex-wrap justify-between md:flex-row">
                        <input type="email" className="p-2 m-1 text-sm text-gray-700 bg-transparent appearance-none focus:outline-none focus:placeholder-transparent" placeholder="Enter your email address" aria-label="Enter your email address"/>
                        <button className="w-full px-3 py-2 m-1   text-sm font-medium tracking-wider text-white uppercase transition-colors duration-200 transform bg-green-800 rounded-md lg:w-auto hover:bg-gray-700">subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    </footer>
        </div>
        </div>
    );
};

export default NewsLetter;