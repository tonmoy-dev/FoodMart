import clientPromise from "../../../lib/mongodb";

export default async function blogsHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");

    const { method } = req;

    // load all blogs
    if (method === "GET") {
        const compare = await db.collection("compare").find({}).toArray();
        res.json(compare);
    }

    if (method === "POST") {
        const compareData = req.body;
        const addCompare = await db
            .collection("compare")
            .insertOne(compareData);
        res.json(addCompare);

        /* console.log(req.body); 
        console.log(req.query) 
        console.log(req.method); // POST
        console.log(req.headers.host); // localhost:3000
        console.log(req.url); // /api/...
        res.status(200).json({ message: "success" }); */
    }
}
