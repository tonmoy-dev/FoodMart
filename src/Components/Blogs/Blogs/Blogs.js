import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from "react";

const Blogs = ({blogs}) => {
    return (
        <div>
            
        <style jsx>
                {`
                    .linear-bg{
                        background: linear-gradient(180deg, rgba(53, 66, 103, 0.0001) 0%, #1d1d1df0 95.04%);
                    }
                `}
            </style>
            <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                    <h2 className="text-4xl font-semibold text-center text-gray-900">All Blogs</h2>
                    {/* blogs */}
                    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
                        {blogs.map((blog) => (
                            <div key={blog.title} className="group relative flex-col">
                                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src={blog.thumbnail}
                                        alt={blog.image_alt}
                                        className="w-full h-full object-center object-cover"
                                    />
                                    {/* top items */}
                                    <div className="px-3 py-3 flex items-start justify-between w-full absolute top-0 left-0">
                                        <div>
                                            <span className="inline-block py-2 px-2 rounded bg-green-700 text-white text-sm font-medium tracking-widest">{blog.category}</span>
                                        </div>
                                        <div className="w-12 py-1 flex-shrink-0 flex flex-col text-center bg-white rounded shadow-lg">
                                            <span className="text-gray-700 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                            <span className="font-medium text-lg text-gray-800 title-font ">18</span>
                                        </div>
                                    </div>
                                    {/* bottom items */}
                                    <div className=" px-3 py-3 flex items-center justify-between w-full absolute bottom-0 left-0 linear-bg">
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <Image className="rounded-full"
                                                    src={blog.author_PhotoUrl}
                                                    alt="Picture of the author"
                                                    height="50"
                                                    width="50"
                                                />
                                                <a href="#" className="mx-2 font-semibold text-white">{blog.author_name}</a>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-semibold">{blog.reading_time} to read</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 py-3">
                                    <h3 className="text-xl font-semibold text-gray-900 inset-0 mb-3">
                                        {blog.title.slice(0,20)}..
                                        <a href={blog.href}>
                                        </a>
                                    </h3>
                                    <p className="text-base text-gray-500">{blog.description.slice(0,190)}..</p>
                                    <div className="flex align-items justify-between w-full pt-4">
                                        <div className="py-1 flex text-yellow-500">
                                        <StarIcon className="h-5 w-5 text-yellow-500"/>
                                        <StarIcon className="h-5 w-5 text-yellow-500"/>
                                        <StarIcon className="h-5 w-5 text-yellow-500"/>
                                        <StarIcon className="h-5 w-5 text-yellow-500"/>
                                        <StarIcon className="h-5 w-5 text-yellow-500"/>
                                        </div>
                                        <div>
                                            <span className="text-gray-400 mr-3 inline-flex items-center  text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </span>
                                            <span className="text-gray-400 inline-flex items-center  text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            </div>
    );
};

export default Blogs;

  