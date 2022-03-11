// import { ObjectId } from 'mongodb';
import clientPromise from "../../lib/mongodb";

export default async function ordersHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");
    
    const { method } = req;
    // load all products
    if (method === "GET") {
        const email = req.query.email;
        const cartProducts = await db.collection("orders").find({email}).toArray();
        res.json(cartProducts);
    }

    if (method === "POST") {
        const cart = req.body;
        const products = await db.collection("orders").insertOne(cart);
        res.json(products);
    }
    
    /* if (method === "DELETE") {
        const query = req.query.product_id;
        const result = await db.collection("orders").deleteOne({ _id: ObjectId(query) });
        res.send(result);
    } */
    
    
}