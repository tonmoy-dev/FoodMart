import Image from "next/image";
import React from "react";
import singlePage from "../../style/SingleBlogPage.module.css";
const SingleBlogPage = () => {
  return (
    <>
    <div className={singlePage.aboutbg}>
               <div className={singlePage.explorehead}>
               <h2 className="font-semibold"> BLOG DETAILS </h2>
               </div>
            </div>
      <div className="py-12 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 flex">

{/* Main content  */}
<div className="w-8/12 bg-white mx-6">
            <div>
              <h2 className="text-3xl text-green-500 p-3 font-bold text-center">
                Best smartwatch 2021: the top wearables you can buy today
              </h2>
            </div>
            <div>
              <Image
                src="https://i.ibb.co/yYxN9GP/b1-min-1024x1024.jpg"
                className="object-cover transform hover:scale-110 transition duration-500"
                alt=""
                width={800}
                height={500}
              />
            </div>

            <div>
              <h3 className="text-3xl font-semibold p-4">
                Helping everyone live happier, healthier lives at home through
                their kitchen. Kitchn is a daily food magazine on the Web
                celebrating life in the kitchen through home cooking and kitchen
                intelligence.
              </h3>
              <p className="text-gray-600 leading-5 text-sm p-4">
                Weve reviewed and ranked all of the best smartwatches on the
                market right now, and weve made a definitive list of the top 10
                devices you can buy today. One of the 10 picks below may just be
                your perfect next smartwatch.
              </p>
              <p className="text-gray-600 leading-5 text-sm pt-1 p-4">
                Those top-end wearables span from the Apple Watch to Fitbits,
                Garmin watches to Tizen-sporting Samsung watches. Theres also
                Wear OS which is Googles own wearable operating system in the
                vein of Apples watchOS - youll see it show up in a lot of these
                devices.
              </p>
            </div>

            <hr />

            <div className="flex p-4 gap-3">
              <button className="bg-green-500 leading-5 text-sm font-semibold px-7 py-0 rounded hover:bg-green-600 text-white">
                sfsdf
              </button>
              <button className="bg-green-500 leading-5 text-sm font-semibold px-7 py-3 rounded hover:bg-green-600 text-white">
                sfsdf
              </button>
              <button className="bg-green-500 leading-5 text-sm font-semibold px-7 py-3 rounded hover:bg-green-600 text-white">
                sfsdf
              </button>

              <div className="flex mt-4 -mx-2 ml-auto">
                <p className="text-gray-700 mt-2">Share This</p>
                <button
                  className="mx-2 bg-green-500 leading-5 text-sm font-semibold px-3 py-3 rounded-full hover:bg-green-600 text-white"
                  aria-label="Linkden"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                    <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                  </svg>
                </button>

                <button
                  className="mx-2 bg-green-500 leading-5 text-sm font-semibold px-3 py-3 rounded-full hover:bg-green-600 text-white"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                    <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                  </svg>
                </button>

                <button
                  className="mx-2  bg-green-500 leading-5 text-sm font-semibold px-3 py-3 rounded-full hover:bg-green-600 text-white"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                    <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                  </svg>
                </button>
              </div>
            </div>
         

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 shadow-lg rounded-sm">
                <a href="#" className="overflow-hidden block">
                  <Image
                    src="https://i.ibb.co/c894Xn8/blog-2.png"
                    className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                    alt=""
                    width={400}
                    height={300}
                  />
                </a>
                <div className="mt-3">
                  <a href="#">
                    <h2 className="block text-xl font-semibold text-gray-700 hover:text-green-500 transition">
                      Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
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
                      June 11, 2021
                    </div>
                  </div>
                </div>
              </div>

              {/* Second */}
              <div className="bg-white p-4 shadow-lg rounded-sm">
                <a href="#" className="overflow-hidden block">
                  <Image
                    src="https://i.ibb.co/7nmZh4f/blog-1.png"
                    className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                    alt=""
                    width={400}
                    height={300}
                  />
                </a>
                <div className="mt-3">
                  <a href="#">
                    <h2 className="block text-xl font-semibold text-gray-700 hover:text-green-500 transition">
                      Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
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
                      June 11, 2021
                    </div>
                  </div>
                </div>
              </div>

              {/* Third */}
              <div className="bg-white p-4 shadow-lg rounded-sm">
                <a href="#" className="overflow-hidden block">
                  <Image
                    src="https://i.ibb.co/dtDK7M1/blog-5.png"
                    className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                    alt=""
                    width={400}
                    height={300}
                  />
                </a>
                <div className="mt-3">
                  <a href="#">
                    <h2 className="block text-xl font-semibold text-gray-700 hover:text-green-500 transition">
                      Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
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
                      June 11, 2021
                    </div>
                  </div>
                </div>
              </div>
              {/* Four */}
              <div className="bg-white p-4 shadow-lg rounded-sm">
                <a href="#" className="overflow-hidden block">
                  <Image
                    src="https://i.ibb.co/nQjqDLx/blog-4.png"
                    className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                    alt=""
                    width={400}
                    height={300}
                  />
                </a>
                <div className="mt-3">
                  <a href="#">
                    <h2 className="block text-xl font-semibold text-gray-700 hover:text-green-500 transition">
                      Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
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
                      June 11, 2021
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="mt-20 px-4 text-4xl font-extralight ">Leave a Comment</h2>

            <div className="flex mt-10 gap-2">
          <textarea className={singlePage.formcontrol} name="comment" id="comment" cols="30" rows="9" placeholder="Your Name"></textarea>
          <textarea className={singlePage.formcontrol} name="comment" id="comment" cols="30" rows="9" placeholder="Your Email"></textarea>
          </div>
          
          
          <div className={singlePage.commentform}>
          <textarea className={singlePage.formcontrol} name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment"></textarea>
          </div>

          <div>
            <h2 className="px-4 text-3xl font-semibold ">Comments</h2>
            <div className="flex gap-2 px-4 mt-6">
              <Image className="px-4" src="https://i.ibb.co/6R0RdxL/author-2.png" alt="" width={300} height={100}/>
              <p className="leading-5">Eiusmod minim incididunt consequat irure sint. Exercitation aute veniam ex nulla esse. Aliqua reprehenderit ullamco voluptate laborum consequat excepteur minim cillum dolor. Eiusmod minim incididunt consequat irure sint. Exercitation aute veniam ex nulla esse. Aliqua reprehenderit ullamco voluptate laborum consequat excepteur minim cillum dolor.</p>
            </div>
            <div className="flex gap-2 px-4 mt-6">
              <Image className="px-4" src="https://i.ibb.co/6R0RdxL/author-2.png" alt="" width={300} height={100}/>
              <p className="leading-5">Eiusmod minim incididunt consequat irure sint. Exercitation aute veniam ex nulla esse. Aliqua reprehenderit ullamco voluptate laborum consequat excepteur minim cillum dolor. Eiusmod minim incididunt consequat irure sint. Exercitation aute veniam ex nulla esse. Aliqua reprehenderit ullamco voluptate laborum consequat excepteur minim cillum dolor.</p>
            </div>
          </div>
          </div>



          {/* left side category */}
          <div className="w-4/12">
            <div className="bg-white shadow-sm rounded-sm p-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Categories
              </h3>
              <div className="text-gray-700 space-y-2">
                <a
                  href="#"
                  className="flex item-center font-semibold leading-4 text-gray-700 uppercase text-sm hover:text-green-500"
                >
                  <span>Fruit & Vegetables</span>
                  <span className=" font-normal ml-auto">(12)</span>
                </a>
                <a
                  href="#"
                  className="flex item-center font-semibold leading-4 text-gray-700 uppercase text-sm hover:text-green-500"
                >
                  <span>Fruit & Vegetables</span>
                  <span className=" font-normal ml-auto">(7)</span>
                </a>
                <a
                  href="#"
                  className="flex item-center font-semibold leading-4 text-gray-700 uppercase text-sm hover:text-green-500"
                >
                  <span>Fruit & Vegetables</span>
                  <span className=" font-normal ml-auto">(5)</span>
                </a>
                <a
                  href="#"
                  className="flex item-center font-semibold leading-4 text-gray-700 uppercase text-sm hover:text-green-500"
                >
                  <span>Fruit & Vegetables</span>
                  <span className=" font-normal ml-auto">(10)</span>
                </a>
                <a
                  href="#"
                  className="flex item-center font-semibold leading-4 text-gray-700 uppercase text-sm hover:text-green-500"
                >
                  <span>Fruit & Vegetables</span>
                  <span className=" font-normal ml-auto">(11)</span>
                </a>
                <a
                  href="#"
                  className="flex item-center font-semibold leading-4 text-gray-700 uppercase text-sm hover:text-green-500"
                >
                  <span>Fruit & Vegetables</span>
                  <span className=" font-normal ml-auto">(7)</span>
                </a>
                <a
                  href="#"
                  className="flex item-center font-semibold leading-4 text-gray-700 uppercase text-sm hover:text-green-500"
                >
                  <span>Fruit & Vegetables</span>
                  <span className=" font-normal ml-auto">(6)</span>
                </a>
              </div>
            </div>

            {/* Recent post */}
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

            {/* Trending */}
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


            {/* gallery */}
            <div className="bg-white shadow-sm rounded-sm p-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Gallery
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
                    <Image
                      src="https://i.ibb.co/pyGJxQ4/thumbnail-3.jpg"
                      className="rounded object-cover"
                      alt=""
                      width={140}
                      height={80}
                    />
                    </div>
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
                    <Image
                      src="https://i.ibb.co/jW6QqhP/thumbnail-4.jpg"
                      className="rounded object-cover"
                      alt=""
                      width={140}
                      height={80}
                    />
                    </div>
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
                    <Image
                      src="https://i.ibb.co/KVVdLKN/thumbnail-5.jpg"
                      className="rounded object-cover"
                      alt=""
                      width={140}
                      height={80}
                    />
                    </div>
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
                    <Image
                      src="https://i.ibb.co/hyPZ8Qw/thumbnail-6.jpg"
                      className="rounded object-cover"
                      alt=""
                      width={140}
                      height={80}
                    />
                    </div>
                  </div>
                </a>
              </div>
            </div>

{/* One Image  */}
            <div className="bg-white shadow-sm rounded-sm p-4 mt-8">
              <Image
                src="https://i.ibb.co/KG3V4st/blog-details-2.jpg"
                className="rounded object-cover"
                alt=""
                width={300}
                height={250}
              />
            </div>
          </div>




        </div>
      </div>
    </>
  );
};

export default SingleBlogPage;