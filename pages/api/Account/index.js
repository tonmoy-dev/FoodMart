import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";
export default async function AccountHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");
    
    const { method } = req;

    // load Accountdetails
    if (method === "GET") {
        const Account = await db.collection("Account").find({}).toArray();
        res.json(Account);
    }

    if (method === "POST") {
        const AccountData = req.body;
        const addAccount = await db.collection("Account").insertOne(AccountData);
        res.json(addAccount);

    }
    if (method === "DELETE") {
        const query = req.query.product_id;
        const result = await db.collection("Account").deleteOne({ _id: ObjectId(query) });
        res.send(result);
    }
    
}