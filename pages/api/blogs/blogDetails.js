import { ObjectId } from 'mongodb';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");
    
    console.log(req.method);
    // console.log(req.query.blog_id);
    if (req.query !== null) {
        const query = req.query.blog_id;
        const blog = await db.collection("blogs").findOne({_id: new ObjectId(query)});
        res.json(blog);
    }
    if (req.method !== null) {
        const { method } = req;
        if (method === "DELETE") {
        const query = req.query.blog_id;
        const result = await db.collection("blogs").deleteOne({
            _id: ObjectId(query),
        });
        return res.send(result);
    }
    }
    
    
    
}

// http://localhost:3000/api/blogs/blogDetails?blog_id=6217e0fe6a1c3f42d89492d6