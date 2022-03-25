import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import swal from "sweetalert";
import DashAdminMenu from "../DashMenu/DashAdminMenu";
import BlogMarkdown from "../../../src/Components/Blogs/BlogMarkdown";
import axios from "axios";
import DashVendorMenu from "../DashMenu/DashVendorMenu";
import DashUserMenu from "../DashMenu/DashUserMenu";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AddBlog = () => {
  const user = useSelector((state) => state.states.user);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    setLoading(true);
    setControl(true);
    axios.get("/api/users").then((response) => {
      setUsers(response.data);
      setLoading(false);
    });
  }, [control, user?.email]);

  const email = user?.email;
  const userNow = users.filter((user) => user.email === email)[0];
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [control, setControl] = useState(false);

  const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };

  //   --------------------------------------------------
  const [foodInfo, setFoodInfo] = useState({
    title: "",
    category: "",
    image_alt: "",
    description: "",
    tags: "",
    date: "",
    time: "",
    reading_time: "",
    author_name: "",
  });

  // take image data
  const [thumbnail, setThumnail] = useState();
  const [author_PhotoUrl, setAuthorPhotoUrl] = useState();

  const handleChange = (e) => {
    setFoodInfo({ ...foodInfo, [e.target.name]: e.target.value });
  };

  // submit all data into backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!thumbnail && !author_PhotoUrl) {
      return null;
    }
    const {
      title,
      category,
      image_alt,
      description,
      tags,
      date,
      time,
      reading_time,
      author_name,
    } = foodInfo;
    await axios
      .post("/api/blogs", {
        title,
        category,
        image_alt,
        description,
        tags,
        date,
        time,
        reading_time,
        author_name,
        author_PhotoUrl,
        thumbnail,
      })
      .then((res) => {
        if (res.data.insertedId) {
          setControl(!control);
          swal("Wow!", "Your add blog request has been received.", "success");
          router.push("/blogs");
          e.target.reset();
        } else {
          setControl(false);
        }
      })
      .catch((err) => console.log(err.message));
    // e.target.reset();
  };

  //for blog image
  const handleImage = (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "foodmart_preset");
      data.append("cloud_name", "foodmartshop");
      axios
        .post("https://api.cloudinary.com/v1_1/foodmartshop/image/upload", data)
        .then(({ data }) => {
          setThumnail(data.url.toString());
          //   console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  //for author image
  const handleImage2 = (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "foodmart_preset");
      data.append("cloud_name", "foodmartshop");
      axios
        .post("https://api.cloudinary.com/v1_1/foodmartshop/image/upload", data)
        .then(({ data }) => {
          setAuthorPhotoUrl(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
        <DashUserMenu />
        {/* main content */}
        <div id="main-content" className="pt-10 pr-8 pl-8 lg:pl-64 bg-gray-100">
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
            <div className="container mx-auto">
              <div className="mt-5 md:mt-0 ">
                <form
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  method="POST"
                >
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6 w-full">
                      <div className="flex md:flex-row flex-col gap-4">
                        {/* blog title */}
                        <div id="blog-title" className="w-full">
                          <label className="block font-medium text-gray-600">
                            {" "}
                            Your Blog Title{" "}
                            <span className="text-orange-600">*</span>
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              required
                              type="text"
                              name="title"
                              id="blog_title"
                              onBlur={(e) => handleChange(e)}
                              className="focus:ring-0 focus:border bg-gray-50 focus:bg-white p-3 w-full rounded sm:text-sm focus:outline-none border"
                              placeholder="Your blog title here"
                            />
                          </div>
                        </div>
                        {/* blog category */}
                        <div id="blog-category" className="w-full">
                          <label
                            name="blog-category"
                            className="block font-medium text-gray-600"
                          >
                            {" "}
                            Your Blog Category{" "}
                            <span className="text-orange-600">*</span>
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              required
                              type="text"
                              name="category"
                              id="blog_category"
                              onBlur={(e) => handleChange(e)}
                              className="focus:ring-0 focus:border bg-gray-50 focus:bg-white p-3 w-full rounded sm:text-sm focus:outline-none border"
                              placeholder="Give blog catagory"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-row flex-col gap-4">
                        {/* blog image alternative text */}
                        <div id="alt" className="w-full">
                          <label
                            name="image-alt"
                            className="block font-medium text-gray-600"
                          >
                            {" "}
                            Image-alt-text{" "}
                            <span className="text-orange-600">*</span>
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              required
                              type="text"
                              name="image_alt"
                              id="image-alt-text"
                              onBlur={(e) => handleChange(e)}
                              className="focus:ring-0 focus:border bg-gray-50 focus:bg-white p-3 w-full rounded sm:text-sm focus:outline-none border"
                              placeholder="Write your blog alternative image text"
                            />
                          </div>
                        </div>
                        {/* Blog tags */}
                        <div id="tags" className="w-full">
                          <label
                            className="block font-medium text-gray-600"
                            htmlFor="tags"
                          >
                            Tags <span className="text-orange-600">*</span>
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              className="focus:ring-0 focus:border bg-gray-50 focus:bg-white p-3 w-full rounded sm:text-sm focus:outline-none border"
                              required
                              type="text"
                              name="tags"
                              id="tags"
                              // onBlur={handleInputOnBlur}
                              onBlur={(e) => handleChange(e)}
                              placeholder="Add Your blog tags"
                            />
                          </div>
                        </div>
                      </div>
                      {/* blog description */}
                      <div>
                        <label
                          name="blog-description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Write Your Blog Here{" "}
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="blog-description"
                            name="description"
                            rows="3"
                            // onBlur={handleInputOnBlur}
                            onBlur={(e) => handleChange(e)}
                            className="focus:ring-0 focus:border bg-gray-50 focus:bg-white p-3 w-full rounded sm:text-sm focus:outline-none border"
                            placeholder="Share your experience here"
                          ></textarea>
                        </div>
                      </div>
                      {/* <BlogMarkdown
                          initialValue=""
                          getValue={getValue}
                        ></BlogMarkdown>
                        <p className="mt-2 text-sm text-gray-500">
                          Write a brief description for your blog.
                        </p>
                      </div> */}
                      {/* blog thumbnail */}
                      <div>
                        <label
                          className="block font-medium text-gray-600"
                          htmlFor="blog_thumbnail"
                        >
                          Blog Thumbnail{" "}
                          <span className="text-orange-600">*</span>
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            className="focus:ring-0 focus:border bg-gray-50 focus:bg-white p-3 w-full rounded sm:text-sm focus:outline-none border"
                            required
                            type="file"
                            name="thumbnail"
                            id="image_url"
                            onChange={(e) => handleImage(e.target.files[0])}
                            placeholder="Add blog thumbnail url"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-row flex-col gap-4">
                        {/* Blog Publishing date */}
                        <div id="date" className="w-full">
                          <label
                            className="block font-medium text-gray-600"
                            htmlFor="date"
                          >
                            Date <span className="text-orange-600">*</span>
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              className="focus:ring-0 focus:border bg-gray-50 focus:bg-white p-3 w-full rounded sm:text-sm focus:outline-none border"
                              required
                              type="text"
                              name="date"
                              id="date"
                              // onBlur={handleInputOnBlur}
                              onBlur={(e) => handleChange(e)}
                              placeholder="Add Your blog published date"
                            />
                          </div>
                        </div>
                        {/* Blog Publishing time */}
                        <div id="time" className="w-full">
                          <label
                            className="block font-medium text-gray-600"
                            htmlFor="time"
                          >
                            Time <span className="text-orange-600">*</span>
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              className="focus:ring-0 focus:border bg-gray-50 focus:bg-white p-3 w-full rounded sm:text-sm focus:outline-none border"
                              required
                              type="text"
                              name="time"
                              id="time"
                              // onBlur={handleInputOnBlur}
                              onBlur={(e) => handleChange(e)}
                              placeholder="Add Your blog published time"
                            />
                          </div>
                        </div>
                        {/* Blog Reading time */}
                        <div id="readingTime" className="w-full">
                          <label
                            className="block font-medium text-gray-600"
                            htmlFor="reading_time"
                          >
                            Reading Time{" "}
                            <span className="text-orange-600">*</span>
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              className="focus:ring-0 focus:border bg-gray-50 focus:bg-white p-3 w-full rounded sm:text-sm focus:outline-none border"
                              required
                              type="text"
                              name="reading_time"
                              id="reading_time"
                              // onBlur={handleInputOnBlur}
                              onBlur={(e) => handleChange(e)}
                              placeholder="Add Your blog reading time"
                            />
                          </div>
                        </div>
                      </div>

                      {/* blog author name */}
                      <div>
                        <label
                          className="block font-medium text-gray-600"
                          htmlFor="blog_author_name"
                        >
                          Blog Author Name{" "}
                          <span className="text-orange-600">*</span>
                        </label>
                        <input
                          className="focus:ring-0 focus:border bg-gray-50 focus:bg-white p-3 w-full rounded sm:text-sm focus:outline-none border"
                          type="text"
                          name="author_name"
                          id="blog_author_name"
                          onBlur={(e) => handleChange(e)}
                          placeholder="author name"
                        />
                      </div>
                      {/* blog author PhotoUrl*/}
                      <div className="flex flex-col mb-4">
                        <label
                          className="block font-medium text-gray-600"
                          htmlFor="blog_author_PhotoUrl"
                        >
                          Blog Author Image
                        </label>
                        <input
                          className="focus:ring-0 focus:border bg-gray-50 focus:bg-white p-3 w-full rounded sm:text-sm focus:outline-none border"
                          type="file"
                          name="author_PhotoUrl"
                          id="author_PhotoUrl"
                          onChange={(e) => handleImage2(e.target.files[0])}
                          placeholder="author photo url"
                        />
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                      <button
                        type="submit"
                        className="w-full md:w-1/4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white primary-bg-color hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
