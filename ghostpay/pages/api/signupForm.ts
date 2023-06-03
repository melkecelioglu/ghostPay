import type { NextApiRequest, NextApiResponse } from 'next'

import clientPromise from "../../database/conn";

import { createHash } from "crypto";


type ResponseData = {
    data:string
}


export default async function handler(  req: NextApiRequest, res: NextApiResponse<ResponseData>) {

    console.log("TRY CONNECT2");

    const client = await clientPromise;
    const db = client.db("GhostPay");
    const collect = await db.collection("Clients");

    // Get data submitted in request's body.
    const body = req.body;
   
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body);
   
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.name || !body.surname || !body.mail || !body.password || !body.metamaskid ) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Some Data is Missing' });
    }
    
    const salt = "GhostPay13!";
    const passhash = createHash("sha256")
      .update(body.password)
      .update(createHash("sha256").update(salt, "utf8").digest("hex"))
      .digest("hex");
    body.password = passhash;
    

    // Found the name.
    // Sends a HTTP success code
    const post = collect.insertOne(body);
    res.status(200).json({ data: `${body.name} ${body.surname} ${body.mail} ${body.metamaskid}` });

  }