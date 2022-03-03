import React, { useState } from 'react';
import SingleBlog from '../../src/Components/Blogs/SingleBlog/SingleBlog';

const Blogss = ({comments}) => {
    const [allComments, setAllComments] = useState(comments)
    return (
        <div>
            <SingleBlog comments={allComments} setComments={setAllComments}></SingleBlog>
        </div>
    );
};

export default Blogss;
export async function getStaticProps() {
    const comments_res = await fetch("http://localhost:3000/api/comments");
const comments = await comments_res.json();
    return {
      props: {comments}, // will be passed to the page component as props
    }
  }


