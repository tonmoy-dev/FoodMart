import React from "react";
import Blogs from "../src/Components/Blogs/Blogs";
import Footer from "../src/Components/Home/Footer/Footer";
import Navbar from "../src/Components/Home/Navbar/Navbar";
const blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default blogs ;