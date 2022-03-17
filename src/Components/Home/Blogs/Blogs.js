// import Image from "next/image";
import React from "react";
import Blog from '../../Blogs/Blog';

const Blogs = ({ blogs }) => {
    const latestBlogs = blogs.slice(-3);
    return (
        <div className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-none">
                    <h2 className="text-3xl mb-3 text-center font-semibold text-gray-900">Latest Blogs</h2>
                    {/* blogs */}
                    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">

                        {/* single blogs */}
                        {latestBlogs.map((blog) => (
                            <Blog key={blog._id} blog={blog}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
