import clientPromise from "../../../lib/mongodb";

export default async function blogsHandler(req, res) {
  const client = await clientPromise;
  const db = client.db("foodmart_shop");

  const { method } = req;

  // load all blogs
  if (method === "GET") {
    const products = await db.collection("products").find({}).toArray();
    res.json(products);
  }

  if (method === "POST") {
    const product = req.body;
    const addProduct = await db.collection("products").insertOne(product);
    res.json(addProduct);

    // console.log(req.body);
    // console.log(req.query)
    // console.log(req.method); // POST
    // console.log(req.headers.host); // localhost:3000
    // console.log(req.url); // /api/...
    // res.status(200).json({ message: "success" })
  }
}
