import clientPromise from "../../../lib/mongodb";

export default async function blogsHandler(req, res) {
  const client = await clientPromise;
  const db = client.db("foodmart_shop");

  const { method } = req;

  // load all blogs
  if (method === "GET") {
    const subscribedemail = await db.collection("subscribedemail").find({}).toArray();
    res.json(subscribedemail);
  }

  if (method === "POST") {
    const email = req.body;
    const suscribe = await db.collection("subscribedemail").insertOne(email);
    res.json(suscribe);
  }
}
