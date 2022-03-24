import React from "react";
import SingleBlog from "../../src/Components/Blogs/SingleBlog/SingleBlog";

const Blogss = ({ blog }) => {
    return (
        <div>
            <div>
                <SingleBlog blog={blog}></SingleBlog>
            </div>
        </div>
    );
};

export default Blogss;

export async function getServerSideProps(context) {
    const data = await fetch(
        `${process.env.MY_APP_DOMAIN}/api/blogs/blogDetails?blog_id=${context.query.blog_id}`
    );
    const blog = await data.json();
    return {
        props: { blog },
    };
}
