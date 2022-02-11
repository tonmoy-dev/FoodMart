import React from "react";
import Image from "next/image";

/* export const getStaticProps = async () => {
    const res = await fetch("https://foodmart11.herokuapp.com/blogs");
    const data = await res.json();
    return {
        props: { blogs: data },
    };
}; */
const Blog = () => {
    return (
        <div className="py-16 mx-5 md:mx-10 overflow-hidden">
            <h2 className="text-4xl text-black font-semibold text-center pb-3">
                Our Blog
            </h2>
            <p className="text-center text-xl pb-7">
                Trusted and powerful eCommerce store information for all
            </p>
            <div className="md:flex justify-center items-center drop-shadow-md">
                <div className="relative m-4 h-100 md:h-full bg-gray-100 rounded-lg">
                    <div className="h-50 md:h-60">
                        <Image
                            src="https://i.ibb.co/3Sx2dQp/blog11.jpg"
                            width={500}
                            height={300}
                            priority
                            alt="Avatar"
                            className="object-cover w-full  h-full z-10 rounded-t-lg"
                        />
                    </div>
                    <div className="absolute bottom-20 md:bottom-18 bg-orange-500 text-white rounded left-4 right-4 px-4 py-1 z-50">
                        <h4 className="text-2xl font-semibold">Blog title</h4>
                    </div>
                    <div className="bg-white rounded-b-lg">
                        <p className="text-base py-4 px-4 leading-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nnesciunt doloremque explicabo dolor!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;

{
    /* <div className="relative m-4 h-100 md:h-full bg-gray-100 rounded-lg">
                    <div className="h-50 md:h-60">
                        <Image
                            src="https://i.ibb.co/yp65JGc/blog3.jpg"
                            width={500}
                            height={300}
                            priority
                            alt="Avatar"
                            className="object-cover w-full  h-full z-10 rounded-t-lg"
                        />
                    </div>
                    <div className="absolute bottom-20 md:bottom-18 bg-orange-500 text-white rounded left-4 right-4 px-4 py-1 z-50">
                        <h4 className="text-2xl font-semibold">Blog title</h4>
                    </div>
                    <div className="bg-white rounded-b-lg">
                        <p className="text-base py-4 px-4 leading-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nnesciunt doloremque explicabo dolor!
                        </p>
                    </div>
                </div>
                <div className="relative m-4 h-100 md:h-full bg-gray-100 rounded-lg">
                    <div className="h-50 md:h-60">
                        <Image
                            src="https://i.ibb.co/pbXB073/blog22.jpg"
                            width={500}
                            height={300}
                            priority
                            alt="Avatar"
                            className="object-cover w-full  h-full z-10 rounded-t-lg"
                        />
                    </div>
                    <div className="absolute bottom-20 md:bottom-18 bg-orange-500 text-white rounded left-4 right-4 px-4 py-1 z-50">
                        <h4 className="text-2xl font-semibold">Blog title</h4>
                    </div>
                    <div className="bg-white rounded-b-lg">
                        <p className="text-base py-4 px-4 leading-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nnesciunt doloremque explicabo dolor!
                        </p>
                    </div>
                </div> */
}
