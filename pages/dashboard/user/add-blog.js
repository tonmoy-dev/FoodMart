import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
const AddBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogCategory, setBlogCategory] = useState("");
  const [blogThumb, setBlogThumb] = useState("");
  const [blogTag, setBlogTag] = useState("");
  const [blogShortDescription, setBlogShortDescription] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("blogTitle", blogTitle);
    formData.append("blogCategory", blogCategory);
    formData.append("blogThumb", blogThumb);
    formData.append("blogTag", blogTag);
    formData.append("blogShortDescription", blogShortDescription);
    formData.append("blogDescription", blogDescription);
    formData.append("authorName", authorName);
    formData.append("photoUrl", photoUrl);

    fetch("https://foodmart-server.herokuapp.com/addBlog", {
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
    <div className="py-16 mx-5 md:mx-20">
      <h1 className=" text-black font-semibold text-4xl pb-2">Add A Blog</h1>
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
          <form onSubmit={handleSubmit} method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="md:grid md:grid-cols-3 gap-6">
                  <div className="col-span-12">
                    <label
                      name="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Your blog title <span className="text-orange-600">*</span>
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        required
                        type="text"
                        name="blog_title"
                        id="blog_title"
                        onChange={(e) => setBlogTitle(e.target.value)}
                        className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                        placeholder="title"
                      />
                    </div>
                    {/* blog category */}
                    <label
                      name="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {" "}
                      Your blog title <span className="text-orange-600">*</span>
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        required
                        type="text"
                        name="blog_category"
                        id="blog_category"
                        onChange={(e) => setBlogCategory(e.target.value)}
                        className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                        placeholder="catagory"
                      />
                    </div>
                    {/* blog category */}
                  </div>
                </div>

                <div>
                  <label
                    name="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Write your blog here{" "}
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows="3"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3"
                      placeholder="My receipe"
                    ></textarea>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Write a brief description for your blog. URLs are
                    hyperlinked.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {" "}
                    Add your blog thumbnail{" "}
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          name="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
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

            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="blog_thumbnail"
              >
                Blog Thumbnail:
              </label>
              <input
                className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                type="text"
                name="blog_thumbnail"
                id="image_url"
                onChange={(e) => setBlogThumb(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="blog_tags"
              >
                Blog Tags:
              </label>
              <input
                className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                type="text"
                name="text"
                id="blog_tags"
                onChange={(e) => setBlogTag(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="blog_short-description"
              >
                Short Description:
              </label>
              <textarea
                className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                type="blog_short-description"
                name="blog_short-description"
                id="blog_short-description"
                rows="3"
                onChange={(e) => setBlogShortDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="blog_description"
              >
                Description:
              </label>
              <textarea
                className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                type="blog_description"
                name="blog_description"
                id="blog_description"
                rows="10"
                onChange={(e) => setBlogDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="blog_author_name"
              >
                Blog Author Name:
              </label>
              <input
                className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                type="text"
                name="text"
                id="blog_author_name"
                onChange={(e) => setAuthorName(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="blog_author_PhotoUrl"
              >
                Blog Author Photo Url:
              </label>
              <input
                className="border rounded-lg border-gray-400 py-2 px-3 text-grey-800"
                type="text"
                name="blog_author_PhotoUrl"
                id="image_url"
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </div>

            <button
              className="block font-bold rounded-xl bg-green-600 hover:bg-green-800 text-white uppercase text-lg mx-auto p-4 "
              type="submit"
            >
              Add blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
