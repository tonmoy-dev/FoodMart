import { async } from "@firebase/util";
import clientPromise from "../../../lib/mongodb";
// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";

export default async function emailsHandler(req, res) {
    const client = await clientPromise;
    const db = client.db("foodmart_shop");

    const { method } = req;


// Node Mailer
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.Email,
            pass: process.env.Password
        }
    });
    console.log(req.body, process.env.Email);
    try {
        await transporter.sendMail({
            from: process.env.Email,
            to: process.env.Email,
            subject: `Contact form submission from ${name}`,
            html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `
        });
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
    return res.status(200).json({ error: "" });

    // // load all emails
    // if (method === "GET") {
    //     const emails = await db.collection("emails").find({}).toArray();
    //     res.json(emails);
    // }

    // if (method === "POST")  {
    //     const emailData = req.body;
    //     const { name, email, message } = emailData;
    //     console.log(name);
    //     console.log(emailData);
    //     console.log(emailData.name);
    //     // let testAccount = await nodemailer.createTestAccount();

    //     // create reusable transporter object using the default SMTP transport
    //     let transporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         auth: {
    //             user: process.env.Email, // generated ethereal user
    //             pass: process.env.Password, // generated ethereal password
    //         },
    //     });
    //     let mailOptions = {

    //         from: emailData.email, // sender address
    //         to: process.env.Email, // list of receivers
    //         subject: "Email from" + emailData.name, // Subject line
    //         text: emailData.message, // plain text body
    //     }
    //     // send mail with defined transport object
    //     let info = transporter.sendMail(mailOptions, function(err, data){
    //         if(err){
    //             console.log("Error Occurs: ",err);
    //         }
    //         else {
    //             console.log("Email Sent!!!");
    //         }
    //     });

    //     console.log("Message sent: %s", info.messageId);
    //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //     // Preview only available when sending through an Ethereal account
    //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    //     // const addemail = await db.collection("emails").insertOne(emailData);
    //     // res.json(addemail);

    //     /* console.log(req.body); 
    //     console.log(req.query) 
    //     console.log(req.method); // POST
    //     console.log(req.headers.host); // localhost:3000
    //     console.log(req.url); // /api/...
    //     res.status(200).json({ message: "success" }); */
    // }

}

