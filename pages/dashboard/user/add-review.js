import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import DashUserMenu from "../DashMenu/DashUserMenu";

// const ratingChanged = (newRating) => {
// };

const AddReview = ({ initialRating }) => {
  const [isActive, setActive] = useState("false");
  const [isAActive, setAActive] = useState("false");
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
  console.log(userNow);

  const handleToggle = () => {
    setActive(!isActive);
  };
  // for mobile device
  const handleMenu = () => {
    setAActive(!isAActive);
  };

  const [addReview, setAddReview] = useState({});

  const handleInputOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewData = { ...addReview };
    newReviewData[field] = value;
    setAddReview(newReviewData);
  };

  const [loading, setLoading] = useState(true);
  const [control, setControl] = useState(false);
  const handleSubmission = async (e) => {
    e.preventDefault();

    axios.post("/api/reviews", addReview).then((response) => {
      if (response.data.insertedId) {
        setControl(!control);
        swal("Good job!", "SUBMITED", "success");
        setAddReview("");

        e.target.reset();
      } else {
        setControl(false);
      }
    });
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
        <div id="main-content" className="pt-24 pl-8 lg:pl-72 bg-gray-100">
          <div className="pl-10">
            <h1 className=" text-black font-semibold text-4xl pb-2">
              Add A Review
            </h1>
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
                      Add a review
                    </span>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="container mx-auto py-4">
              <div className="mt-5 md:mt-0">
                <form onSubmit={handleSubmission}>
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6 w-full">
                      <div>
                        <label
                          name="blog-title"
                          className="block font-medium text-gray-600"
                        >
                          {" "}
                          Your Name{" "}
                          <span className="text-orange-600">*</span>
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            required
                            type="text"
                            name="userName"
                            id="blog_title"
                            onBlur={handleInputOnBlur}
                            className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          name="blog-title"
                          className="block font-medium text-gray-600"
                        >
                          {" "}
                          Your Email{" "}
                          <span className="text-orange-600">*</span>
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            required
                            type="Email"
                            name="userEmail"
                            id="blog_title"
                            onBlur={handleInputOnBlur}
                            className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      {/* <div>
                        <label
                          name="blog-title"
                          className="block font-medium text-gray-600"
                        >
                          {" "}
                          Your Email{" "}
                          <span className="text-orange-600">*</span>
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            required
                            min="1" max="5"
                            
                            type="Number"
                            // pattern="[0-9]+"
                            name=""
                            id="blog_title"
                            onBlur={handleInputOnBlur}
                            className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                            placeholder="Your Email"
                          />
                        </div>
                      </div> */}
                      <div>
                        <label
                          name="blog-title"
                          className="block font-medium text-gray-600"
                        >
                          {" "}
                          Image Url{" "}
                          <span className="text-orange-600">*</span>
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            required
                            type="text"
                            name="imageUrl"
                            id="blog_title"
                            onBlur={handleInputOnBlur}
                            className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                            placeholder="Image Url."
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          name="blog-title"
                          className="block font-medium text-gray-600"
                        >
                          {" "}
                          Review details{" "}
                          <span className="text-orange-600">*</span>
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <textarea
                            id="blog-description"
                            name="description"
                            rows="3"
                            onBlur={handleInputOnBlur}
                            className="focus:ring-indigo-00 focus:border-indigo-200 flex-1 p-3 block w-full rounded-none rounded-r-md sm:text-sm border-gray-200"
                            placeholder="Review details"
                          ></textarea>
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

export default AddReview;
