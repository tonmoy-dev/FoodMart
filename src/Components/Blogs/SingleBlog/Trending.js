import Image from "next/image";
import React from 'react';

const Trending = () => {
    return (
        <div className="bg-white shadow-sm rounded-sm p-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Trending Now
              </h3>
              <div>
                <a href="#" className="flex group mt-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://i.ibb.co/pyGJxQ4/thumbnail-3.jpg"
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
                      Green onion knife and salad placed
                    </h5>
                  </div>
                </a>
                <a href="#" className="flex group mt-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://i.ibb.co/jW6QqhP/thumbnail-4.jpg"
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
                      $89.50
                    </div>
                    <h5 className="text-md leading-5 font-semibold group-hover:text-green-500 transition">
                      Green onion knife and salad placed
                    </h5>
                  </div>
                </a>
                <a href="#" className="flex group mt-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://i.ibb.co/KVVdLKN/thumbnail-5.jpg"
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
                      $25
                    </div>
                    <h5 className="text-md leading-5 font-semibold group-hover:text-green-500 transition">
                      Green onion knife and salad placed
                    </h5>
                  </div>
                </a>
                <a href="#" className="flex group mt-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://i.ibb.co/hyPZ8Qw/thumbnail-6.jpg"
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
                      $25
                    </div>
                    <h5 className="text-md leading-5 font-semibold group-hover:text-green-500 transition">
                      Green onion knife and salad placed
                    </h5>
                  </div>
                </a>
              </div>
            </div>
    );
};

export default Trending;