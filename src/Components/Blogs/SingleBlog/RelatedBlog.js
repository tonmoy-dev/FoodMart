import axios from 'axios';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const RelatedBlog = () => {

  const [blogs, setBlogs] = useState([]);
  // console.log(blogs)
  const relatedBlogs = blogs.slice(10,14);
  console.log(relatedBlogs)
  
  useEffect(() => {
      axios.get('/api/blogs').then(response => {
          setBlogs(response.data);
      });
  }, []);

    return (
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mt-4">
       {
                relatedBlogs.map((rBlog) => (
                  <div key={rBlog._Id} className="bg-white p-4 shadow-lg rounded-sm">
                  <a href="#" className="overflow-hidden block">
                    <Image
                      src={rBlog.thumbnail}
                      className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                      alt=""
                      width={400}
                      height={300}
                    />
                  </a>
                  <div className="mt-3">
                    <a href="#">
                      <h2 className="block text-xl font-semibold text-gray-700 hover:text-green-500 transition">
                        
                        <Link href={`/blogs/${encodeURIComponent(rBlog._id)}`}>
                        {rBlog.title}
                  </Link>
                      </h2>
                    </a>
                    <div className="mt-2 flex space-x-3">
                      <div className="flex text-gray-400 text-sm items-center">
                        <span className="mr-2 text-xs">
                          <i className="far fa-user"></i>
                        </span>
                        Blogging Tips
                      </div>
                      <div className="flex text-gray-400 text-sm items-center">
                        <span className="mr-2 text-xs">
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
                        {rBlog.date}
                      </div>
                    </div>
                  </div>
                </div>
                ))
              }
      </div>
    );
};

export default RelatedBlog;