import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";
export default async function wishlistHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");
    
    const { method } = req;

    // load wishlist
    if (method === "GET") {
        const wishlist = await db.collection("wishlist").find({}).toArray();
        res.json(wishlist);
    }

    if (method === "POST") {
        const wishlistData = req.body;
        const addwishlist = await db.collection("wishlist").insertOne(wishlistData);
        res.json(addwishlist);

    }
    if (method === "DELETE") {
        const query = req.query.product_id;
        const result = await db.collection("wishlist").deleteOne({ _id: ObjectId(query) });
        res.send(result);
    }
    
}

