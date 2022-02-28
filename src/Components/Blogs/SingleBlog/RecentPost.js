import Image from "next/image";
import React from 'react';

const RecentPost = () => {
    return (
        <div className="bg-white shadow-sm rounded-sm p-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Recent Post
              </h3>
              <div>
                <a href="#" className="flex group mt-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://i.ibb.co/MnVXrpq/b1-min-200x200.jpg"
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
                      Feb 13, 2021
                    </div>
                    <h5 className="text-md leading-5 font-semibold group-hover:text-green-500 transition">
                      Green onion knife and salad placed
                    </h5>
                  </div>
                </a>
                <a href="#" className="flex group mt-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://i.ibb.co/x1Q0KNy/b3-min-200x200.jpg"
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
                      Feb 13, 2021
                    </div>
                    <h5 className="text-md leading-5 font-semibold group-hover:text-green-500 transition">
                      Green onion knife and salad placed
                    </h5>
                  </div>
                </a>
                <a href="#" className="flex group mt-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://i.ibb.co/gDB40Vn/b4-min-200x200.jpg"
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
                      Feb 13, 2021
                    </div>
                    <h5 className="text-md leading-5 font-semibold group-hover:text-green-500 transition">
                      Green onion knife and salad placed
                    </h5>
                  </div>
                </a>
                <a href="#" className="flex group mt-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://i.ibb.co/F0SfzKG/b5-min-200x200.jpg"
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
                      Feb 13, 2021
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

export default RecentPost;