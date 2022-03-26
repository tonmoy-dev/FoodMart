 import { ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { React, useState } from "react";
import Blog from '../../src/Components/Blogs/Blog';
import Pagination from '../../src/Components/Pagination/Pagination';

const blogsFilters = [
  // Tags
  [
    { name: "Salad"},{ name: "Cheese"},{ name: "Chicken"},{ name: "Soup"},{ name: "Shrimp"},{ name: "Egg"},
  ]
]

const Blogs = ({ blogs }) => {
    const [control, setControl] = useState(false);
    const [filterBlogs, setFilterBlogs] = useState();
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
  
  
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentAllBlogs = blogs?.slice(indexOfFirstPost, indexOfLastPost);
    const currentBlogs = filterBlogs?.slice(indexOfFirstPost, indexOfLastPost);
    
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // category wise filter
    const categoryFilterHandler = (categoryName) => {
        setCurrentPage(1);
        setControl(true);
        const allBlogs = blogs.filter((blog) => blog.category === categoryName);
        setFilterBlogs(allBlogs);
        setLoading(false);
        setControl(false);
    };
    // Rating wise filter
  const tagFilterHandler = (tag) => {
        setCurrentPage(1);
        setControl(true);
        const newBlogs = blogs.filter((blog) => blog.tags.toLowerCase() === tag.toLowerCase());
        setFilterBlogs(newBlogs);
        setLoading(false);
        setControl(false);
    };
  
    const arr =[]
    blogs.map(blog => arr.push(blog.category));
    const blogsCategories = [...new Set(arr)];
    
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
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[1fr,180px] gap-4">
          <div className="max-w-2xl mx-auto lg:max-w-none order-last md:order-first">
            {/* blogs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-4 md:gap-6">
              {/* single blog */}
              {loading
                  ? currentAllBlogs.map((blog) => (
                    <Blog key={blog._id} blog={blog} />
                  ))
                  : currentBlogs.map((blog) => (
                    <Blog key={blog._id} blog={blog} />
                  ))}
            </div>
          </div>
          <div className="order-first md:order-last">
            {/* category filter */}
            <div className="shadow w-full rounded-md ml-0 md:ml-2 p-2 mb-3">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Categories
            </h3>
            <div className="flex flex-row flex-wrap md:flex-col gap-x-2 gap-y-2">
              {
                blogsCategories.map((category => (
                  <div key={category} onClick={() => categoryFilterHandler(category)} className="w-20 h-16 md:h-auto md:w-auto px-3 py-2 text-sm border border-gray-200 rounded-md
                  bg-gray-100
                  hover:bg-green-500 hover:text-white transition flex justify-center md:justify-start items-center cursor-pointer">
                    <a href="#" className="">{category}</a>
                  </div>
                )))
              }
            </div>
            </div>
            {/* Tags filter */}
            <div className="bg-white shadow rounded-sm p-4 md:ml-2 w-full md:mt-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {
                  blogsFilters[0].map(item => (
                    <button key={item.name} onClick={() => tagFilterHandler(item.name)} className="px-3 py-1 text-sm border bg-gray-200 border-gray-200 rounded-sm
                hover:bg-green-500 hover:text-white transition">{item.name}</button>
                  ))
                }
              </div>
            </div>
            
          </div>
        </div>
        {/* pagination */}
        {
            loading && (
                <div className="container mt-2">
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={blogs.length}
                        paginate={paginate}
                    />
                </div>
            )
        }
        {
            !loading && (
                <div className="container mt-2">
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={filterBlogs.length}
                        paginate={paginate}
                    />
                </div>
            )
        }
        {/* pagination */}
      </div>
    </div>
  );
};
export default Blogs;

export async function getStaticProps() {
    // load all blogs
    const blogs_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/blogs`);
    const blogs = await blogs_res.json();
    return {
        props: { blogs },
    };
}
