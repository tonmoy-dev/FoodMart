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

      <div>
        <h2 className="text-4xl font-bold text-green-500 text-center mt-5">
          Give your review
        </h2>
      </div>
      <div className={addreview.content}>
        <div className={addreview.reviewcontainer}>
          <div>
            <h2 className="mb-5">Reviews</h2>
            <label htmlFor="search" className={addreview.inputfield}>
              <input
                className={addreview.sss}
                id="search"
                placeholder="Enter Your Name..."
                type="text"
              />
            </label>
            <div className={addreview.inputsfield}>
              <textarea
                className={addreview.sds}
                name="comment"
                id="comment"
                cols="30"
                rows="9"
                placeholder="Write Comment..."
              ></textarea>
            </div>
            <div className="rate flex mt-8">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AddReview;
