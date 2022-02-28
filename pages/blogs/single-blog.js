import React from 'react';
import SingleBlogPage from '../../src/Components/Blogs/SingleBlog/SingleBlog';

const SingleBlog = ({comments}) => {
    return (
        <div>
            <SingleBlogPage comments={comments}></SingleBlogPage>
        </div>
    );
};

export default SingleBlog;
export async function getStaticProps(context) {
    const comments_res = await fetch("http://localhost:5000/comments");
const comments = await comments_res.json();
    return {
      props: {comments}, // will be passed to the page component as props
    }
  }


