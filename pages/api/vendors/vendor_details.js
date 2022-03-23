import { ObjectId } from 'mongodb';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");

    const query = req.query.blog_id;
    // console.log(req.method);

    switch (req.method) {
        case 'GET':
            const vendor = await db.collection("vendors").findOne({_id: new ObjectId(query)});
            res.json(vendor);
            break
        
        default:
            res.status(405).end() //Method Not Allowed
            break
      }
    
    
}

// http://localhost:3000/api/blogs/blogDetails?blog_id=621dbede75a97ab73c172d17