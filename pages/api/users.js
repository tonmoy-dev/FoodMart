import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");
  const { method } = req;

  /* // get single user by email
  if (method === "GET") {
    try {
      const result = await db.collection("users").findOne({ email: req.query.email });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  } */
  // get all user
  if (method === "GET") {
    try {
      const result = await db.collection("users").find({}).toArray();
      res.json(result);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // save user data after register
  if (method === "POST") {
    try {
      const user = await db.collection("users").insertOne(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // save user data after google signup
  if (method === "PUT") {
    try {
      const user = req.body;
      const filter = { email: user.email };
      const updateDoc = { $set: user };
      const result = await db.collection("users").updateOne(filter, updateDoc, {
        new: true,
        upsert: true,
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}