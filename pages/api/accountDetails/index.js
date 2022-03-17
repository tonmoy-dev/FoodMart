import clientPromise from "../../../lib/mongodb";

export default async function AccountHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");
    const { method } = req;

    // load Accountdetails
    if (method === "GET") {
        const Accountinfo = await db.collection("Accountdetails").find({}).toArray();
        res.json(Accountinfo);
    }

    else if (method === "POST") {
        const AccountData = req.body;
        const addAccount = await db
            .collection("AccountDetails")
            .insertOne(AccountData);
        res.json(addAccount);
    }
}