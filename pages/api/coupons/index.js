import clientPromise from "../../../lib/mongodb";

export default async function compareProductHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");

    const { method } = req;

    // load coupon in ui
    if (method === "GET") {
        const coupons = await db.collection("coupons").find({}).toArray();
        res.json(coupons);
    }
    // store coupon data in database
    if (method === "POST") {
        const couponData = req.body;
        const addCoupon = await db.collection("coupons").insertOne(couponData);
        res.json(addCoupon);
    }
}
