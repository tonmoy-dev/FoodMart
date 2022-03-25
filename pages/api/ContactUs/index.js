import clientPromise from "../../../lib/mongodb";

export default async function emailsHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");

    const { method } = req;

    // load all emails
    if (method === "GET") {
        const emails = await db.collection("emails").find({}).toArray();
        res.json(emails);
    }

    if (method === "POST") {
        const emailData = req.body;
        console.log(emailData);
        // const addemail = await db.collection("emails").insertOne(emailData);
        // res.json(addemail);

        /* console.log(req.body); 
        console.log(req.query) 
        console.log(req.method); // POST
        console.log(req.headers.host); // localhost:3000
        console.log(req.url); // /api/...
        res.status(200).json({ message: "success" }); */
    }

}

