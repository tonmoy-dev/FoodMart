import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import swal from "sweetalert";
import DashAdminMenu from "../DashMenu/DashAdminMenu";
import BlogMarkdown from "../../../src/Components/Blogs/BlogMarkdown";
import axios from "axios";
import DashVendorMenu from "../DashMenu/DashVendorMenu";
import DashUserMenu from "../DashMenu/DashUserMenu";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AddBlog = () => {
    const [isActive, setActive] = useState("false");
    const [isAActive, setAActive] = useState("false");
    const user = useSelector((state) => state.states.user);


    const [users, setUsers] = useState([]);
    useEffect(() => {
        setLoading(true);
        setControl(true);
        axios.get("/api/users").then(response => {
            setUsers(response.data);
            setLoading(false);
        });
    }, [control, user?.email]);

    const email = user?.email
    const userNow = users.filter(user => user.email === email)[0]
    console.log(userNow);

    const handleToggle = () => {
        setActive(!isActive);
    };
    // for mobile device
    const handleMenu = () => {
        setAActive(!isAActive);
    };





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
    
    const [loading, setLoading] = useState(true);
    const [control, setControl] = useState(false);
    const handleSubmission = async (e) => {
        e.preventDefault();
        
        axios.post("/api/blogs", addBlogData)
            .then((response) => {
                if (response.data.insertedId) {
                    setControl(!control);
                    swal("Wow!", "Your add blog request has been received.", "success");
                    setAddBlogData("");
                    router.push("/blogs");
                    e.target.reset();
                } else {
                    setControl(false);
                }
            });
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
                {/* {userNow?.role === 'admin' && <DashAdminMenu />}
                {userNow?.role === 'vendor' && <DashVendorMenu />}
                {userNow?.role === 'user' && <DashUserMenu />} */}
                <DashUserMenu />

                {/* main content */}
                <div
                    id="main-content"
                    className="pt-10 pr-8 pl-8 lg:pl-64 bg-gray-100"
                >
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
                        <div className="container mx-auto py-4">
                            {/* <h3 className="text-2xl font-semibold text-center pb-4">
                Add Your Blog
              </h3> */}
                            <div className="mt-5 md:mt-0 ">
                                <form onSubmit={handleSubmission} method="POST">
                                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6 w-full">
                                            {/* blog title */}
                                            <div>
                                                <label
                                                    name="blog-title"
                                                    className="block font-medium text-gray-600"
                                                >
                                                    {" "}
                                                    Your Blog Title{" "}
                                                    <span className="text-orange-600">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        required
                                                        type="text"
                                                        name="title"
                                                        id="blog_title"
                                                        onBlur={
                                                            handleInputOnBlur
                                                        }
                                                        className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                                                        placeholder="title"
                                                    />
                                                </div>
                                            </div>
                                            {/* blog category */}
                                            <div>
                                                <label
                                                    name="blog-category"
                                                    className="block font-medium text-gray-600"
                                                >
                                                    {" "}
                                                    Your Blog Category{" "}
                                                    <span className="text-orange-600">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        required
                                                        type="text"
                                                        name="category"
                                                        id="blog_category"
                                                        onBlur={
                                                            handleInputOnBlur
                                                        }
                                                        className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                                                        placeholder="category"
                                                    />
                                                </div>
                                            </div>
                                            {/* blog image alternative text */}
                                            <div>
                                                <label
                                                    name="image-alt"
                                                    className="block font-medium text-gray-600"
                                                >
                                                    {" "}
                                                    Image-alt-text{" "}
                                                    <span className="text-orange-600">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        required
                                                        type="text"
                                                        name="image_alt"
                                                        id="image-alt-text"
                                                        onBlur={
                                                            handleInputOnBlur
                                                        }
                                                        className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                                                        placeholder="Write your blog alternative text"
                                                    />
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
                                                        onBlur={
                                                            handleInputOnBlur
                                                        }
                                                        className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                                                        placeholder="Blog details"
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
                                                    <span className="text-orange-600">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                                                        required
                                                        type="text"
                                                        name="thumbnail"
                                                        id="image_url"
                                                        onBlur={
                                                            handleInputOnBlur
                                                        }
                                                        placeholder="Add blog thumbnail url"
                                                    />
                                                </div>
                                            </div>
                                            {/* Blog tags */}
                                            <div>
                                                <label
                                                    className="block font-medium text-gray-600"
                                                    htmlFor="tags"
                                                >
                                                    Tags{" "}
                                                    <span className="text-orange-600">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                                                        required
                                                        type="text"
                                                        name="tags"
                                                        id="tags"
                                                        onBlur={
                                                            handleInputOnBlur
                                                        }
                                                        placeholder="Add Your blog tags"
                                                    />
                                                </div>
                                            </div>
                                            {/* Blog Publishing date */}
                                            <div>
                                                <label
                                                    className="block font-medium text-gray-600"
                                                    htmlFor="date"
                                                >
                                                    Date{" "}
                                                    <span className="text-orange-600">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                                                        required
                                                        type="text"
                                                        name="date"
                                                        id="date"
                                                        onBlur={
                                                            handleInputOnBlur
                                                        }
                                                        placeholder="Add Your blog published date"
                                                    />
                                                </div>
                                            </div>
                                            {/* Blog Publishing time */}
                                            <div>
                                                <label
                                                    className="block font-medium text-gray-600"
                                                    htmlFor="time"
                                                >
                                                    Time{" "}
                                                    <span className="text-orange-600">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                                                        required
                                                        type="text"
                                                        name="time"
                                                        id="time"
                                                        onBlur={
                                                            handleInputOnBlur
                                                        }
                                                        placeholder="Add Your blog published time"
                                                    />
                                                </div>
                                            </div>
                                            {/* Blog Reading time */}
                                            <div>
                                                <label
                                                    className="block font-medium text-gray-600"
                                                    htmlFor="reading_time"
                                                >
                                                    Reading Time{" "}
                                                    <span className="text-orange-600">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                                                        required
                                                        type="text"
                                                        name="reading_time"
                                                        id="reading_time"
                                                        onBlur={
                                                            handleInputOnBlur
                                                        }
                                                        placeholder="Add Your blog reading time"
                                                    />
                                                </div>
                                            </div>

                                            {/* blog author name */}
                                            <div>
                                                <label
                                                    className="block font-medium text-gray-600"
                                                    htmlFor="blog_author_name"
                                                >
                                                    Blog Author Name{" "}
                                                    <span className="text-orange-600">
                                                        *
                                                    </span>
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
                                                    className="block font-medium text-gray-600"
                                                    htmlFor="blog_author_PhotoUrl"
                                                >
                                                    Blog Author Photo Url
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
                                                className="w-full md:w-1/5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                            >
                                                Post
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* editor */}
                </div>
            </div>
        </>
    );
};

export default AddBlog;