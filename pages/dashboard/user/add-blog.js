import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React, { useState } from "react";
import swal from "sweetalert";
import DashAdminMenu from "../DashMenu/DashAdminMenu";
import BlogMarkdown from "../../../src/Components/Blogs/BlogMarkdown";

const AddBlog = () => {
  const [addBlogData, setAddBlogData] = useState({});
  const router = useRouter();

  // handle input fields onBlur
  const handleInputOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBlogData = { ...addBlogData };
    newBlogData[field] = value;
    setAddBlogData(newBlogData);
  };

  // handle add blog Submit
  const handleSubmission = async (e) => {
    e.preventDefault();
    // post blog data
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addBlogData),
    });
    const data = await res.json();
    if (data.insertedId) {
      swal("Good job!", "Your add blog request has been received.", "success");
      setAddBlogData("");
      router.push("/blogs");
    }
  };

  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };

  return (
    <>
      <style jsx>
        {`
          ::-webkit-scrollbar {
            width: 1px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: darkcyan;
          }
        `}
      </style>
      <div id="dashboard-container" className="h-screen bg-gray-100">
        {/* top bar */}
        <DashAdminMenu />

        {/* main content */}
        <div id="main-content" className="pt-24 pr-8 pl-8 lg:pl-80">
          <div className="py-16 mx-5 md:mx-20">
            <h1 className=" text-black font-semibold text-4xl pb-2">
              Add A Blog
            </h1>
            {/* breadcrumb */}
            <div className="pb-10">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <HomeIcon
                        className="h-4 w-4 text-gray-700 mr-2"
                        aria-hidden="true"
                      />
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <a
                        href="#"
                        className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <a
                        href="#"
                        className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                      >
                        User
                      </a>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                        Add a blog
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="container mx-auto w-full md:w-2/4 px-4">
              <h3 className="text-2xl font-semibold text-center pb-4">
                Add Your Blog
              </h3>
              <div className="mt-5 md:mt-0">
                <form onSubmit={handleSubmission} method="POST">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                      {/* blog title */}
                      <div>
                        <label
                          name="blog-title"
                          className="block text-sm font-medium text-gray-700"
                        >
                          {" "}
                          Your blog title{" "}
                          <span className="text-orange-600">*</span>
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            required
                            type="text"
                            name="title"
                            id="blog_title"
                            onBlur={handleInputOnBlur}
                            className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                            placeholder="title"
                          />
                        </div>
                      </div>
                      {/* blog category */}
                      <div>
                        <label
                          name="blog-category"
                          className="block text-sm font-medium text-gray-700"
                        >
                          {" "}
                          Your blog category{" "}
                          <span className="text-orange-600">*</span>
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            required
                            type="text"
                            name="category"
                            id="blog_category"
                            onBlur={handleInputOnBlur}
                            className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                            placeholder="category"
                          />
                        </div>
                      </div>
                      {/* blog description */}
                      <div>
                        <label
                          name="blog-description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          {" "}
                          Write your blog here{" "}
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="blog-description"
                            name="description"
                            rows="3"
                            onBlur={handleInputOnBlur}
                            className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                            placeholder="blog details"
                          ></textarea>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Write a brief description for your blog.
                        </p>
                      </div>
                      {/* blog thumbnail */}
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="blog_thumbnail"
                        >
                          Blog Thumbnail:
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                            type="text"
                            name="thumbnail"
                            id="image_url"
                            onBlur={handleInputOnBlur}
                            placeholder="add blog thumbnail url"
                          />
                        </div>
                      </div>
                      {/* blog author name */}
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="blog_author_name"
                        >
                          Blog Author Name:
                        </label>
                        <input
                          className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                          type="text"
                          name="author_name"
                          id="blog_author_name"
                          onBlur={handleInputOnBlur}
                          placeholder="author name"
                        />
                      </div>
                      {/* blog author PhotoUrl*/}
                      <div className="flex flex-col mb-4">
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="blog_author_PhotoUrl"
                        >
                          Blog Author Photo Url:
                        </label>
                        <input
                          className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                          type="text"
                          name="author_PhotoUrl"
                          id="author_PhotoUrl"
                          onBlur={handleInputOnBlur}
                          placeholder="author photo url"
                        />
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="w-full md:w-1/5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* editor */}
          <h1>editor</h1>
          <BlogMarkdown initialValue="" getValue={getValue}></BlogMarkdown>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
