
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

/* export async function getServerSideProps(context) {
    // console.log(context.query.blog_id);
    // console.log(context.query.blog_id);
    // const data = await fetch(`http://localhost:3000/api/blogs/blogDetails?blog_id=6217e0fe6a1c3f42d89492d1`);
    const data = await fetch(`http://localhost:3000/api/blogs/blogDetails?blog_id=${context.query.blog_id}`);
    const blog = await data.json();

    return {
        props:{blog}
    }
}
 */