import clientPromise from "../../../lib/mongodb";

export default async function blogsHandler(req, res) {
  const client = await clientPromise;
  const db = client.db("foodmart_shop");

  const { method } = req;

  // load comments
  if (method === "GET") {
    const reviews = await db.collection("reviews").find({}).toArray();
    res.json(reviews);
  }

  if (method === "POST") {
    const review = req.body;
    const addreviews = await db.collection("reviews").insertOne(review);
    res.json(addreviews);

    /* console.log(req.body); 
        console.log(req.query) 
        console.log(req.method); // POST
        console.log(req.headers.host); // localhost:3000
        console.log(req.url); // /api/...
        res.status(200).json({ message: "success" }); */
  }
}
