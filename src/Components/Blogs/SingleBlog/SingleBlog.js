import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle
} from "react-icons/ai";
import swal from "sweetalert";
import RecentPost from "../../../Components/Blogs/SingleBlog/RecentPost.js";
import RelatedBlog from "../../../Components/Blogs/SingleBlog/RelatedBlog.js";
import Trending from "../../../Components/Blogs/SingleBlog/Trending.js";
import singlePage from "../../../styles/SingleBlog.module.css";

const SingleBlog = ({ blog }) => {


  const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        axios.get('/api/blogs').then(response => {
            setBlogs(response.data);
        });
    }, []);

    const arr =[]
blogs.map(blog => arr.push(blog.category));
const newArr = [...new Set(arr)];



  const [comments, setComments] = useState([]);
  const [addCommentData, setAddCommentData] = useState({});
  const [control, setControl] = useState(false);

  const popularComments = comments.slice(-3);

  useEffect(() => {
    setControl(true);
    axios.get('/api/comments').then(response => {
      setComments(response.data);
    });
  }, [control])

  const handleInputOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newCommentData = { ...addCommentData };
    newCommentData[field] = value;
    setAddCommentData(newCommentData);
  };
  const handleSubmission = async (e) => {
    e.preventDefault();
    // post blog data
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addCommentData),
    });
    const data = await res.json();
    if (data.insertedId) {
      setControl(!control);
      swal("Good job!", "SUBMITED", "success");
      const newComments = comments;
      newComments.push(addCommentData);
      setComments(newComments);
      e.target.reset();
    }
    else {
    setControl(false);
  } 
  };

  return (
    <>
      <div className=""></div>
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-3">
          {/* Main content  */}
          <div className="w-full bg-white md:col-span-2 ">
            <div>
              <h2 className="text-xl md:text-3xl text-black p-3 font-bold text-left">
                {blog.title}
              </h2>
            </div>

            <div className="flex justify-center gap-1 px-5 text-green-500 items-center">
              <div className="rounded-full h-9 w-9">
                <Image
                  className="object-cover rounded-full"
                  src="https://i.ibb.co/kQ1T9TN/d737946d153beb56555ed95ab0af1ee1-key-west-vacations-couple-photography.jpg"
                  alt="AuthorPhoto"
                  width={36}
                  height={36}
                // layout='responsive'
                />
              </div>
              <div className="flex items-center justify-center">
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
              </div>
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
                src={blog.thumbnail}
                className="object-cover transform hover:scale-110 transition duration-500"
                alt=""
                width={800}
                height={500}
                layout="responsive"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold p-4 text-justify">
                Lets learn more about {blog.title}
              </h3>
              <p className="text-gray-600 leading-5 text-sm p-4 text-justify">
                {blog.description}
              </p>
            </div>

            <hr />

            <div className="flex p-4 md:flex-row flex-col">

              <div className="flex mt-4 -mx-2 md:ml-auto">
                <p className="text-gray-700 mt-2">Share This</p>
                <button
                  className="mx-2 bg-green-500 leading-5 text-sm font-semibold px-3 py-3 rounded-full hover:bg-green-600 text-white"
                  aria-label="Linkden"
                >
                  <AiFillFacebook className="w-5 h-5" />
                </button>

                <button
                  className="mx-2 bg-green-500 leading-5 text-sm font-semibold px-3 py-3 rounded-full hover:bg-green-600 text-white"
                  aria-label="Facebook"
                >
                  <AiFillLinkedin className="w-5 h-5" />
                </button>

                <button
                  className="mx-2  bg-green-500 leading-5 text-sm font-semibold px-3 py-3 rounded-full hover:bg-green-600 text-white"
                  aria-label="Twitter"
                >
                  <AiFillTwitterCircle className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Relate blog  */}

            <RelatedBlog></RelatedBlog>

            <h2 className="mt-20 px-4 text-4xl font-extralight ">
              Leave a Comment
            </h2>

            <form onSubmit={handleSubmission}>
              <div className="flex mt-10 gap-4 px-8">
                <input
                  className={singlePage.formcontrol}
                  name="name"
                  id="user_name"
                  placeholder="Your Name"
                  required
                  type="text"
                  onBlur={handleInputOnBlur}
                ></input>
                <input
                  className={singlePage.formcontrol}
                  name="email"
                  required
                  id="user_email"
                  type="email"
                  placeholder="Your Email"
                  onBlur={handleInputOnBlur}
                ></input>
              </div>

              <div className="px-8">
                <div className={singlePage.commentform}>
                  <textarea
                    className={singlePage.formcontrol}
                    name="comment"
                    id="comment"
                    placeholder="Write Comment"
                    onBlur={handleInputOnBlur}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="cursor-pointer px-4 py-2 text-xl font-semibold text-white bg-green-600"
                >
                  Submit
                </button>
              </div>
            </form>

            <div>
              <h2 className="px-4 text-4xl font-extralight mt-3">Comments</h2>
              <div className="px-4 pb-4">
                {popularComments?.map((user) => (
                  <div key={user.name} className="border-2 p-2 mt-2 rounded-xl hover:shadow-md">
                    <div className="rounded-full h-10 w-10">
                      <Image
                        src="https://i.ibb.co/kQ1T9TN/d737946d153beb56555ed95ab0af1ee1-key-west-vacations-couple-photography.jpg"
                        alt="UserPhoto"
                        className="rounded-full object-cover"
                        width={40}
                        height={40}
                      // className="bg-green-400"
                      // layout='responsive'
                      />
                    </div>
                    <p className="text-sm font-semibold pt-2 ">
                      {user.name}
                    </p>
                    <h3 className="text-sm font-semibold pt-1">
                      {user.email}
                    </h3>
                    <h5 className="text-md font-light pt-2 text-justify">
                      {user.comment}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>

         
          {/* left side category */}
          <div className="w-full mt-3">
          <div className="py-6">
            <div className="bg-white shadow-sm rounded-sm p-4">
              <input className="rounded w-full " type="text" placeholder="Search Blog"/>
            </div>
          </div>
            <div className="bg-white shadow-sm rounded-sm p-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Categories
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-6">
              {
                newArr.map((category => (
                <div key={category} className="">
                <a href="#" className="px-3 py-2 text-sm border border-gray-200 rounded-md
                bg-gray-200
                hover:bg-green-500 hover:text-white transition">{category}</a>
              </div>
                )))
              }
              </div>


            </div>

            {/* Recent post */}
            <RecentPost></RecentPost>

            {/* Trending */}
            <Trending></Trending>

            {/* gallery */}
            <div className="bg-white shadow-sm rounded-sm p-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Tags
              </h3>
              <div className="flex flex-warp gap-4">
                {/* <a onClick={() => handleclick("food")}href="#" className="px-3 py-1 text-sm border border-gray-200 rounded-sm
                hover:bg-green-500 hover:text-white transition">Fruits</a> */}
                <a href="#" className="px-3 py-1 text-sm border border-gray-200 rounded-sm
                hover:bg-green-500 hover:text-white transition">Pizza</a>
                <a href="#" className="px-3 py-1 text-sm border border-gray-200 rounded-sm
                hover:bg-green-500 hover:text-white transition">Chicken</a>
                <a href="#" className="px-3 py-1 text-sm border border-gray-200 rounded-sm
                hover:bg-green-500 hover:text-white transition">Recipe</a>
                <a href="#" className="px-3 py-1 text-sm border border-gray-200 rounded-sm
                hover:bg-green-500 hover:text-white transition">Pie</a>
                {/* <a href="#" className="px-3 py-1 text-sm border border-gray-200 rounded-sm
                hover:bg-green-500 hover:text-white transition">Egg</a> */}
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
