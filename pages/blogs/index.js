import { ChevronRightIcon } from '@heroicons/react/solid';
import axios from 'axios';
import Link from 'next/link';
import { React, useEffect, useState } from "react";
import Blog from '../../src/Components/Blogs/Blog';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        axios.get('/api/blogs').then(response => {
            setBlogs(response.data);
        });
    }, []);
    
    return (
        <div>
            <style jsx>
                {`
                    .linear-bg{
                        background: linear-gradient(180deg, rgba(53, 66, 103, 0.0001) 0%, #1d1d1df0 95.04%);
                    }
                `}
            </style>
            <div className="head-banner">
        <div className="container mx-auto">
          <div className="banner-inner flex flex-col justify-center items-center">
            <h1 className="banner-title font-bold text-4xl text-gray-900 mb-4">
              <span className="">Food Blogs</span>
            </h1>
            {/* nav */}
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <Link href="/">Home</Link>
                  </a>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                      blogs
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
            <div className="bg-white py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto lg:max-w-none">
                        {/* blogs */}
                        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">

                            {/* single blog */}
                            {blogs.map((blog) => (
                                <Blog key={blog._id} blog={blog}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;

export async function getServerSideProps() {
    // load all blogs
    const blogs_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/blogs`);
    const blogs = await blogs_res.json();
    return {
        props: { blogs },
    };
}
