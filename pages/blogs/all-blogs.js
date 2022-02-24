import React from "react";
import Blogs from "../../src/Components/Blogs/Blogs/Blogs";
import Footer from "../../src/Components/Home/Footer/Footer";
import Navbar from "../../src/Components/Home/Navbar/Navbar";
const AllBlogs = ({blogs}) => {
    return (
        <div>
            <Navbar></Navbar>
            <Blogs blogs={blogs}></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default AllBlogs;

export async function getStaticProps() {
    const blogs_res = await fetch("http://localhost:5000/blogs");
    const blogs = await blogs_res.json();
    return {
        props: { blogs },
    };
}
