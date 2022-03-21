import clientPromise from "../../../lib/mongodb";

export default async function blogsHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");

    const { method } = req;

    // load all blogs
    if (method === "GET") {
        const test = await db.collection("test").find({}).toArray();
        res.json(test);
    }

    if (method === "POST") {
        const blogData = req.body;
        const addBlog = await db.collection("test").insertOne(blogData);
        res.json(addBlog);
    }
    
}

