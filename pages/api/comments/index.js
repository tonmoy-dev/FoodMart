import clientPromise from "../../../lib/mongodb";

export default async function blogsHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");

    const { method } = req;

    // load comments
    if (method === "GET") {
        const comments = await db.collection("comments").find({}).toArray();
        res.json(comments);
    }

    if (method === "POST") {
        const comment = req.body;
        const addComment = await db.collection("comments").insertOne(comment);
        res.json(addComment);

        /* console.log(req.body); 
        console.log(req.query) 
        console.log(req.method); // POST
        console.log(req.headers.host); // localhost:3000
        console.log(req.url); // /api/...
        res.status(200).json({ message: "success" }); */
      }
    
}

