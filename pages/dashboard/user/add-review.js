import {
    PencilAltIcon,
    ChevronRightIcon,
    HomeIcon,
    StarIcon,
} from "@heroicons/react/solid";

const AddReview = () => {
    return (
        <div>
            <div className="bg-gray-100 px-4 py-16 md:px-20">
                <h2 className=" text-black font-semibold text-4xl pb-2">
                    Add Review
                </h2>
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
                                        Add Review
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className=" flex justify-center">
                    <div className="border rounded md:p-6 w-full md:w-1/2">
                        <div className="pt-6 md:pt-4">
                            <h2 className="text-3xl font-semibold pb-4 text-black text-center">
                                Give your review
                            </h2>
                        </div>
                        <div className="flex justify-center">
                            <div className="py-6">
                                <div className="md:flex ">
                                    <div className="md:mr-2">
                                        <label htmlFor="search" className="">
                                            {" "}
                                            <p className="text-black mt-2">
                                                Your Name
                                            </p>{" "}
                                        </label>
                                        <input
                                            className="w-full rounded border-gray-300"
                                            id="search"
                                            placeholder="EX: jhon Doe"
                                            type="text"
                                        />
                                    </div>
                                    <div className="">
                                        <label htmlFor="search" className="">
                                            {" "}
                                            <p className="text-black mt-2">
                                                Review Date
                                            </p>{" "}
                                        </label>
                                        <input
                                            className="w-full rounded border-gray-300"
                                            id="search"
                                            placeholder="EX: 02/01/2022"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="md:flex">
                                    <div className="md:mr-2">
                                        <label htmlFor="search" className="">
                                            {" "}
                                            <p className="text-black mt-2">
                                                Your Email
                                            </p>{" "}
                                        </label>
                                        <input
                                            className="w-full rounded border-gray-300"
                                            id="search"
                                            placeholder="Example@gmail.com"
                                            type="text"
                                        />
                                    </div>

                                    <div className="">
                                        <label htmlFor="search" className="">
                                            {" "}
                                            <p className="text-black mt-2">
                                                Review Time
                                            </p>{" "}
                                        </label>
                                        <input
                                            className="w-full rounded border-gray-300"
                                            id="search"
                                            placeholder="EX: 8.00am"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="rate mt-4 gap-2 flex">
                                    <div>
                                        <h2 className=" text-black text-lg">
                                            Product Rating:
                                        </h2>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <StarIcon
                                            className="h-5 w-5 text-orange-500"
                                            aria-hidden="true"
                                        />
                                        <StarIcon
                                            className="h-5 w-5 text-orange-500"
                                            aria-hidden="true"
                                        />
                                        <StarIcon
                                            className="h-5 w-5 text-orange-500"
                                            aria-hidden="true"
                                        />
                                        <StarIcon
                                            className="h-5 w-5 text-orange-500"
                                            aria-hidden="true"
                                        />
                                        <StarIcon
                                            className="h-5 w-5 text-orange-500"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>

                                <h2 className="pt-4 text-black font-base text-xl">
                                    Reviews
                                </h2>

                                <div className="w-full">
                                    <textarea
                                        className="w-full rounded border-gray-300"
                                        name="comment"
                                        id="comment"
                                        rows="3"
                                        placeholder="Write Comment..."
                                    ></textarea>
                                </div>
                                <div className="flex justify-center align-middle">
                                    <button className="w-full md:px-24 mt-3 py-2 text-xl font-semibold text-white bg-green-500 hover:bg-green-700 rounded">
                                        Add Review
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
