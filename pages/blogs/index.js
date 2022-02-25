import React from "react";
import Blogs from "../../src/Components/Blogs/Blogs/Blogs";
const AllBlogs = ({blogs}) => {
    return (
        <div>
            <Blogs blogs={blogs}></Blogs>
        </div>
    );
};

export default AllBlogs;

export async function getStaticProps() {
    const blogs_res = await fetch("https://foodmart-server.herokuapp.com/blogs");
    const blogs = await blogs_res.json();
    return {
        props: { blogs },
    };
}
