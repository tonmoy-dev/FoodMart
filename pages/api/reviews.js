import clientPromise from "../../lib/mongodb";

export default async function reviewsHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");
    const reviews = await db.collection("reviews").find({}).toArray();
    res.json(reviews);
}