import clientPromise from "../../lib/mongodb";

export default async function commentsHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");
    const comments = await db.collection("comments").find({}).toArray();
    res.json(comments);
}