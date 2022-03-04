import React from 'react';
import SingleBlog from '../../src/Components/Blogs/SingleBlog/SingleBlog';

const Blogss = ({ blog }) => {
    return (
        <div>
            <SingleBlog blog={blog}></SingleBlog>
        </div>
    );
};


export default Blogss;

/* export async function getStaticProps() {
    const comments_res = await fetch("http://localhost:3000/api/comments");
const comments = await comments_res.json();
    return {
      props: {comments}, // will be passed to the page component as props
    }
  } */


/* 
  export default function MovieDetails({ blog }) {
    return (
        <div>
            {
                blog && <div>
                    <div>
                        {blog.title}
                    </div>
                    <div>
                        {blog.description}
                    </div>
                </div>
            }
        </div>
    );
}
 */
export async function getStaticPaths() {
    return {
        paths: ['/blogs/[blog_id]'],
        fallback: true
        
    }
}
 
export async function getStaticProps({ params }) {
    // console.log(params);
    const data = await fetch(`${process.env.MY_APP_DOMAIN}api/blogs/blogDetails?blog_id=${params.blog_id}`);
    const blog = await data.json();

    return {
        props: { blog },
        revalidate: false
        // revalidate: 1
    }
 }

/* export async function getServerSideProps() {
    const comments_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/comments`);
    const comments = await comments_res.json();
    // const data = await fetch(`http://localhost:3000/api/blogs/blogDetails?blog_id=${context.query.blog_id}`);
    // const blog = await data.json();

    return {
        props:{comments}
    }
}
 */