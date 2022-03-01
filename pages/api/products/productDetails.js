import { ObjectId } from 'mongodb';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");
    
    console.log(req.method);
    if (req.query !== null) {
        const query = req.query.product_id;
        const product = await db.collection("products").findOne({_id: new ObjectId(query)});
        res.json(product);
    }

}