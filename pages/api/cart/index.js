import { ObjectId } from 'mongodb';
import clientPromise from "../../../lib/mongodb";

export default async function blogsHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");
    
    const { method } = req;
    // load all products
    if (method === "GET") {
        const products = await db.collection("add_to_cart").find({}).toArray();
        res.json(products);
    }

    if (method === "POST") {
        const cart = req.body;
        const products = await db.collection("add_to_cart").insertOne(cart);
        res.json(products);
    }
    
    if (method === "DELETE") {
        const query = req.query.product_id;
        const result = await db.collection("add_to_cart").deleteOne({ _id: ObjectId(query) });
        res.send(result);
    }
    
    
}

