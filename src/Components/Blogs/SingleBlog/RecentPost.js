import axios from 'axios';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';
const RecentPost = () => {
    const [blogs, setBlogs] = useState([]);
    // console.log(blogs)
    const latestBlogs = blogs.slice(-4);
    console.log(latestBlogs)
    
    useEffect(() => {
        axios.get('/api/blogs').then(response => {
            setBlogs(response.data);
        });
    }, []);
    

    return (
      <div>
        <div className="bg-white shadow-sm rounded-sm p-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Recent Blogs
              </h3>
              {
                latestBlogs.map((b) => (
                  <div key={b._id}>
                <a href="#" className="flex group mt-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={b.thumbnail}
                      className="rounded object-cover"
                      alt=""
                      width={140}
                      height={80}
                    />
                  </div>
                  <div className="flex-grow pl-3">
                    <div className="flex text-gray-700 text-sm items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      {b.date}
                    </div>
                    <h5 className="text-md leading-5 font-semibold group-hover:text-green-500 transition">
                      
                      <Link href={`/blogs/${encodeURIComponent(b._id)}`}>
                      {b?.title.slice(0, 20)}
                  </Link>
                    </h5>
                  </div>
                </a>
              </div>
                ))
              }
            </div>
            </div>




    );
};

export default RecentPost;