import type { NextApiRequest, NextApiResponse } from 'next'

//import connectMongo from "../../database/conn"
//import  nextConnect  from 'next-connect';
//import middleware from '../../database/conn';

import clientPromise from "../../database/conn";


type ResponseData = {
    data:string
}


export default async function handler(  req: NextApiRequest, res: NextApiResponse<ResponseData>) {

    console.log("TRY CONNECT2");

    const client = await clientPromise;
    const db = client.db("GhostPay");
    const collect = await db.collection("Clients");

    //const handlerDatabase = nextConnect();
    //handlerDatabase.use(middleware);

    //connectMongo();

    // Get data submitted in request's body.
    const body = req.body;
   
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body);
   
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.name || !body.surname || !body.mail || !body.metamaskid ) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Some Data is Missing' });
    }
   
    
    // Found the name.
    // Sends a HTTP success code
    const post = collect.insertOne(body);
    res.status(200).json({ data: `${body.name} ${body.surname} ${body.mail} ${body.metamaskid}` });
  }