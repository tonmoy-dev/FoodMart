import clientPromise from "../../../lib/mongodb";

export default async function vendorsHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");

    const { method } = req;

    // load all blogs
    if (method === "GET") {
        const vendors = await db.collection("vendors").find({}).toArray();
        res.json(vendors);
    }

    if (method === "POST") {
        const vendor = req.body;
        const addVendor = await db.collection("vendors").insertOne(vendor);
        res.json(addVendor);
    }
}
