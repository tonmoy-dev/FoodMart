import Image from "next/image";
import React, {useState} from "react";
import RecentPost from "../../../Components/Blogs/SingleBlog/RecentPost.js";
import RelatedBlog from "../../../Components/Blogs/SingleBlog/RelatedBlog.js";
import Trending from "../../../Components/Blogs/SingleBlog/Trending.js";
import singlePage from "../../../styles/SingleBlog.module.css";
const SingleBlog = () => {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userComment, setUserComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!image) {
    //   return;
    // }
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("userEmail", userEmail);
    formData.append("userComment", userComment);

    fetch("http://localhost:5000/comments", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
      }) 
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <nav className="flex bg-gray-800 p-6" aria-label="Breadcrumb ">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-white hover:text-gray-200 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <a
                href="#"
                className="ml-1 text-sm font-medium text-white hover:text-gray-200 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Projects
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-white md:ml-2 dark:text-gray-200">
                Flowbite
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className={singlePage.aboutbg}>
        <div className={singlePage.explorehead}>
          <h2 className="font-semibold"> BLOG DETAILS </h2>
        </div>
      </div>
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 flex">
          {/* Main content  */}
          <div className="w-8/12 bg-white mx-6">
            <div>
              <h2 className="text-3xl text-black p-3 font-bold text-center">
                Best smartwatch 2021: the top wearables you can buy today
              </h2>
            </div>

            <div className="flex justify-center gap-1 px-5 text-green-500">
              <Image
                src="https://i.ibb.co/6R0RdxL/author-2.png"
                alt=""
                width={30}
                height={10}
              />
              <span>By Sugar Rosie</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mt-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>2 hours ago</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mt-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>8 mins read</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mt-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex gap-2 ml-auto px-5">
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>

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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-4">
              <Image
                src="https://i.ibb.co/yYxN9GP/b1-min-1024x1024.jpg"
                className="object-cover transform hover:scale-110 transition duration-500"
                alt=""
                width={800}
                height={500}
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold p-4 text-justify">
                Helping everyone live happier, healthier lives at home through
                their kitchen. Kitchn is a daily food magazine on the Web
                celebrating life in the kitchen through home cooking and kitchen
                intelligence.
              </h3>
              <p className="text-gray-600 leading-5 text-sm p-4 text-justify">
                Weve reviewed and ranked all of the best smartwatches on the
                market right now, and weve made a definitive list of the top 10
                devices you can buy today. One of the 10 picks below may just be
                your perfect next smartwatch.
              </p>
              <p className="text-gray-600 leading-5 text-sm pt-1 p-4 text-justify">
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

            {/* Relate blog  */}

            <RelatedBlog></RelatedBlog>

            <h2 className="mt-20 px-4 text-4xl font-extralight ">
              Leave a Comment
            </h2>

            <form onSubmit={handleSubmit}>
              
            <div className="flex mt-10 gap-4 px-8">
            <input
                className={singlePage.formcontrol}
                name="comment"
                id="comment"
                cols="30"
                rows="9"
                placeholder="Your Name"
                onChange={(e) => setUserName(e.target.value)}
              ></input>
              <input
                className={singlePage.formcontrol}
                name="comment"
                id="comment"
                cols="30"
                rows="9"
                placeholder="Your Email"
                onChange={(e) => setUserEmail(e.target.value)}
              ></input>
            </div>

            <div className="px-8">
              <div className={singlePage.commentform}>
                <textarea
                  className={singlePage.formcontrol}
                  name="comment"
                  id="comment"
                  cols="30"
                  rows="9"
                  placeholder="Write Comment"
                  onChange={(e) => setUserComment(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="px-4 py-2 text-xl font-semibold text-white bg-green-600">
                Submit
              </button>
            </div>
            </form>

            <div>
              <h2 className="px-4 text-3xl font-semibold ">Comments</h2>
              <div className="flex gap-2 px-4 mt-6">
                <Image
                  className="px-4"
                  src="https://i.ibb.co/6R0RdxL/author-2.png"
                  alt=""
                  width={300}
                  height={100}
                />
                <p className="leading-5">
                  Eiusmod minim incididunt consequat irure sint. Exercitation
                  aute veniam ex nulla esse. Aliqua reprehenderit ullamco
                  voluptate laborum consequat excepteur minim cillum dolor.
                  Eiusmod minim incididunt consequat irure sint. Exercitation
                  aute veniam ex nulla esse. Aliqua reprehenderit ullamco
                  voluptate laborum consequat excepteur minim cillum dolor.
                </p>
              </div>
              <div className="flex gap-2 px-4 mt-6">
                <Image
                  className="px-4"
                  src="https://i.ibb.co/6R0RdxL/author-2.png"
                  alt=""
                  width={300}
                  height={100}
                />
                <p className="leading-5">
                  Eiusmod minim incididunt consequat irure sint. Exercitation
                  aute veniam ex nulla esse. Aliqua reprehenderit ullamco
                  voluptate laborum consequat excepteur minim cillum dolor.
                  Eiusmod minim incididunt consequat irure sint. Exercitation
                  aute veniam ex nulla esse. Aliqua reprehenderit ullamco
                  voluptate laborum consequat excepteur minim cillum dolor.
                </p>
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
            <RecentPost></RecentPost>

            {/* Trending */}
            <Trending></Trending>

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

export default SingleBlog;
