// import Image from "next/image";
import { ArrowRightIcon, StarIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from "react";
import { AiOutlineEye } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';

const Blogs = ({ blogs }) => {
    const latestBlogs = blogs.slice(0, 3);
    return (
        <div className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-none">
                    <h2 className="text-3xl mb-3 text-center font-semibold text-gray-900">Latest Blogs</h2>
                    {/* blogs */}
                    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">

                        {/* single blogs */}
                        {latestBlogs.map((blog) => (
                            <div key={blog._id} className="group relative flex-col shadow-md rounded-lg">
                                <div className="relative w-full bg-white rounded-t-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 h-56 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src={blog?.thumbnail}
                                        alt={blog?.image_alt}
                                        className="w-full h-56 object-center object-cover"
                                    />
                                    {/* top items */}
                                    <div className="px-3 py-3 flex items-start justify-between w-full absolute top-0 left-0">
                                        <div>
                                            <span className="inline-block py-2 px-2 rounded bg-green-700 text-white text-sm font-medium tracking-widest">{blog?.category}</span>
                                        </div>
                                        <div className="w-12 py-1 flex-shrink-0 flex flex-col text-center bg-white rounded shadow-lg">
                                            <span className="text-gray-700 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                            <span className="font-medium text-lg text-gray-800 title-font ">18</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 h-60 grid content-between">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 inset-0 mb-3">
                                            {blog?.title.slice(0, 20)}..
                                            <a href={blog?.href}>
                                            </a>
                                        </h3>
                                        <p className="text-base text-gray-500">{blog?.description.slice(0, 175)}..</p>
                                    </div>
                                    <Link href={`/blogs/${encodeURIComponent(blog._id)}`}>
                                        <a className="text-green-500 font-semibold flex items-center mt-2">
                                            <span>Learn More</span> <ArrowRightIcon className="ml-1 w-4" />
                                        </a>
                                    </Link>
                                    <div className="flex align-items justify-between w-full pt-2">
                                        <div className="py-1 flex text-yellow-500">
                                            <StarIcon className="h-5 w-5 text-yellow-500" />
                                            <StarIcon className="h-5 w-5 text-yellow-500" />
                                            <StarIcon className="h-5 w-5 text-yellow-500" />
                                            <StarIcon className="h-5 w-5 text-yellow-500" />
                                            <StarIcon className="h-5 w-5 text-yellow-500" />
                                        </div>
                                        <div>
                                            <span className="text-gray-400 mr-3 inline-flex items-center  text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                <AiOutlineEye className="w-5 h-5 mr-1" />
                                                1.2K
                                            </span>
                                            <span className="text-gray-400 inline-flex items-center  text-sm">
                                                <FiMessageCircle className="w-4 h-4 mr-1" />
                                                6
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
    );
};

export default Blogs;
