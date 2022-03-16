import axios from 'axios';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';


const Trending = () => {

  const [blogs, setBlogs] = useState([]);
    // console.log(blogs)
    // const popularBlogs = blogs.slice(8,12);
    // console.log(popularBlogs)
    
    useEffect(() => {
        axios.get('/api/blogs').then(response => {
            setBlogs(response.data);
        });
    }, []);
    const poularBlog = blogs.filter((p) => p.user_rating === "5");

    // const poularBlogs = poularBlog.slice(0, 3);



    return (
        <div className="bg-white shadow-sm rounded-sm p-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Popular Blogs
              </h3>
              {
                poularBlog.map((pBlog) => (
                  <div key={pBlog._id}>
                <a href="#" className="flex group mt-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={pBlog.thumbnail}
                      className="rounded object-cover"
                      alt=""
                      width={140}
                      height={80}
                    />
                  </div>
                  <div className="flex-grow pl-3">
                    <div className="flex text-gray-700 text-sm items-center">
                      {/* <span>
                      </span> */}
                      $99.50
                    </div>
                    <h5 className="text-md leading-5 font-semibold group-hover:text-green-500 transition">
                    <Link href={`/blogs/${encodeURIComponent(pBlog._id)}`}>
                    {pBlog.title}
                  </Link>
                      
                    </h5>
                  </div>
                </a>
              </div>
                ))
              }
            </div>
    );
};

export default Trending;