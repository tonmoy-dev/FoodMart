import React from "react";
import ReactStars from "react-rating-stars-component";
import addreview from "../../style/AddReview.module.css";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const AddReview = () => {
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

      <div className="bg-gray-300">
      <div>
        <h2 className="text-5xl font-bold text-black text-center">
          Give your review
        </h2>
      </div>
      <div className={addreview.content}>
        <div className={addreview.reviewcontainer}>
          <div className="bg-gray-200 p-8">

          <div className="flex ">
            <div className="flex flex-col">
            <div>
            <label htmlFor="search" className=""> <p className="text-black mt-2">Your Name</p> </label>
              <input
                className={addreview.sss}
                id="search"
                placeholder="EX: jhon Doe"
                type="text"
              />
            </div>
            </div>
            <div className="flex flex-col ml-auto">
            <div>
            <label htmlFor="search" className=""> <p className="text-black mt-2">Review Date</p> </label>
              <input
                className={addreview.sss}
                id="search"
                placeholder="EX: 02/01/2022"
                type="text"
              />
            </div>
            </div>
            </div>

            
          <div className="flex">
            <div className="flex flex-col gap-4">
            <div>
            <label htmlFor="search" className=""> <p className="text-black mt-2">Your Email</p> </label>
              <input
                className={addreview.sss}
                id="search"
                placeholder="Example@gmail.com"
                type="text"
              />
            </div>
            </div>
            <div className="flex flex-col ml-auto">
            <div>
            <label htmlFor="search" className=""> <p className="text-black mt-2">Review Time</p> </label>
              <input
                className={addreview.sss}
                id="search"
                placeholder="EX: 8.00am"
                type="text"
              />
            </div>
            </div>
            </div>

            <div className="rate flex mt-4 gap-2">
              <h2 className="mt-5 text-black text-xl font-extralight">Product Rating</h2>
              <ReactStars
                classNames="text-green-500"
                count={5}
                onChange={ratingChanged}
                size={40}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#2CCD72"
              />
            </div>

            <h2 className="text-black font-extralight text-xl">Reviews</h2>
            
            <div className={addreview.inputsfield}>
              <textarea
                className={addreview.sds}
                name="comment"
                id="comment"
                cols="20"
                rows="4"
                placeholder="Write Comment..."
              ></textarea>
            </div>
            <div className="flex justify-center align-middle">
            <button className=" px-24 mt-3 py-2 text-xl font-semibold text-white bg-green-500">Add Review</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AddReview;
