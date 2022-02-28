import clientPromise from "../../../lib/mongodb";

export default async function blogsHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");

    const { method } = req;

    // load all blogs
    if (method === "GET") {
        const blogs = await db.collection("blogs").find({}).toArray();
        res.json(blogs);
    }

    if (method === "POST") {
        const blogData = req.body;
        const addBlog = await db.collection("blogs").insertOne(blogData);
        res.json(addBlog);

        /* console.log(req.body); 
        console.log(req.query) 
        console.log(req.method); // POST
        console.log(req.headers.host); // localhost:3000
        console.log(req.url); // /api/...
        res.status(200).json({ message: "success" }); */
      }
    
}

