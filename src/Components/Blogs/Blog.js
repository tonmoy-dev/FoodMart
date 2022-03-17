import { ArrowRightIcon, StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import { AiOutlineEye } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';

const Blog = ({blog}) => {
    return (
        <>
            <style jsx>
                {`
                    .linear-bg{
                        background: linear-gradient(180deg, rgba(53, 66, 103, 0.0001) 0%, #1d1d1df0 95.04%);
                    }
                `}
            </style>
            <div key={blog._id} className="group relative flex-col shadow-md rounded-lg">
                <div className="relative w-full h-56 bg-white rounded-t-lg rounded-b-md overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                        src={blog?.thumbnail}
                        alt={blog?.image_alt}
                        className="w-full h-full object-center object-cover"
                    />
                    {/* top items */}
                    <div className="px-3 py-3 flex items-start justify-between w-full absolute top-0 left-0 text-sm">
                        <div>
                            <span className="inline-block py-2 px-2 rounded primary-bg-color text-white font-medium tracking-widest">{blog?.category}</span>
                        </div>
                        <div className="w-12 py-1 flex-shrink-0 flex flex-col text-center bg-white rounded shadow-lg font-medium">
                            <span className="text-gray-700 pb-2 mb-2 border-b-2 border-gray-200">{blog?.date.split(' ')[0].slice(0, 3)}</span>
                            <span className="text-gray-800 title-font">{blog?.date.split(' ')[1]}</span>
                        </div>
                    </div>
                    {/* bottom items */}
                    <div className=" px-3 py-3 flex items-center justify-between w-full absolute bottom-0 left-0 linear-bg">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <Image className="rounded-full"
                                    src={blog?.author_PhotoUrl}
                                    alt="Picture of the author"
                                    height="50"
                                    width="50"
                                />
                                <p className="mx-2 font-semibold text-white">{blog?.author_name}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold">{blog?.reading_time} to read</p>
                        </div>
                    </div>
                </div>
                <div className="p-5 h-64 grid content-between">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 inset-0 mb-3">
                            {blog?.title.slice(0, 20)}..
                            <a href={blog?.href}>
                            </a>
                        </h3>
                        <p className="text-base mb-3 text-gray-500">{blog?.description.slice(0, 170)}..</p>
                        <Link href={`/blogs/${encodeURIComponent(blog._id)}`}>
                            <a className="text-green-500 font-semibold flex items-center">
                                <span>Learn More</span> <ArrowRightIcon className="ml-1 w-4" />
                            </a>
                        </Link>
                    </div>
                    <div className="flex align-items justify-between w-full pt-4">
                        <div className="py-1 flex text-yellow-400">
                            <StarIcon className="h-5 w-5" />
                            <StarIcon className="h-5 w-5" />
                            <StarIcon className="h-5 w-5" />
                            <StarIcon className="h-5 w-5" />
                            <StarIcon className="h-5 w-5" />
                        </div>
                        <div className="flex items-center">
                            <span className="text-gray-400 mr-3 inline-flex items-center  text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <AiOutlineEye className="w-5 h-5 mr-1" />
                                {blog?.watch_count}
                            </span>
                            <span className="text-gray-400 inline-flex items-center  text-sm">
                                <FiMessageCircle className="w-4 h-4 mr-1" />
                                {blog?.comments_count}
                            </span>
                        </div>
                    </div>
                </div>
                                    
            </div>
        </>
    );
}

export default Blog;