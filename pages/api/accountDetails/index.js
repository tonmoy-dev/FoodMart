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

    else if (method === "POST") {
        const AccountData = req.body;
        const addAccount = await db
            .collection("AccountDetails")
            .insertOne(AccountData);
        res.json(addAccount);
    }
}