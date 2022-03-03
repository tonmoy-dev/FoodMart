import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function compareProductHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");

    const { method } = req;

    // load compare products in ui
    if (method === "GET") {
        const compare = await db.collection("compare").find({}).toArray();
        res.json(compare);
        //console.log(compare);
    }
    // store compare product in database
    if (method === "POST") {
        const compareData = req.body;
        const addCompare = await db
            .collection("compare")
            .insertOne(compareData);
        res.json(addCompare);


    // compare product delete form database
    if(method === 'DELETE') {
        const id = req.params.id;
        console.log(id)
        const query = {_id: ObjectId(id)};
        const result = await db.collection("compare").deleteOne(query);
        res.json(result);
        //console.log(result);
    }
    }
}
