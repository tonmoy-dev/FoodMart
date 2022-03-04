import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
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

        /* console.log(req.body); 
        console.log(req.query) 
        console.log(req.method); // POST
        console.log(req.headers.host); // localhost:3000
        console.log(req.url); // /api/...
        res.status(200).json({ message: "success" }); */
      }
    
}

