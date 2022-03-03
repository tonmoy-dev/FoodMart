export async function getStaticPaths() {
    return {
        paths: ['/compare/[compareId]'],
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