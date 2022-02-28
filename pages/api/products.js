import clientPromise from "../../lib/mongodb";

export default async function productsHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");
    const products = await db.collection("products").find({}).toArray();
    res.json(products);
}