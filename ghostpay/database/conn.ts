// import mongoose from "mongoose";
// import data from 'data.json';

// export default const connectMongo = async () => 
{
//     try{
//         console.log("TRY CONNECT2");
//         const {connection} = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI); // "mongodb://localhost:27017"
//         if(connection.readyState == 1)
           {
//             console.log("Database Connected");
//         }
//     }
//     catch(errors){
//         return Promise.reject(errors)
//     }
    
// }


// import { MongoClient } from 'mongodb';
// import { nextConnect } from 'next-connect';

// const client = new MongoClient("mongodb+srv://mbkara:admin13@cluster0.yxbalpx.mongodb.net/?retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function database(req, res, next) {
//   req.dbClient = client;
//   req.db = client.db('GhostPay');
//   return next();
// }

// const middleware = nextConnect();

// middleware.use(database);


import { MongoClient } from 'mongodb'
import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import { createEdgeRouter } from "next-connect";

const router = createEdgeRouter<NextRequest, NextFetchEvent>();

router.use(async (request, event, next) => {
  return next();
});

router.get("", (request) => {
  return NextResponse.redirect(new URL("", request.url));
});

router.use("", (request) => {
  if (!isAuthenticated(request)) {
    return NextResponse.redirect(new URL("", request.url));
  }
  return NextResponse.next();
});

                      
const uri2= "mongodb+srv://mbkara:admin13@cluster0.yxbalpx.mongodb.net/?retryWrites=true&w=majority"

if (!uri2 /*"mongodb://localhost:27017"*/ /*!process.env.MONGODB_URI*/) {
  throw new Error('Invalid environment variable: "MONGODB_URI"')
}

const uri = "mongodb://localhost:27017" //process.env.MONGODB_URI
const options = {}

let client
let clientPromise : Promise<MongoClient>

// In production mode, it's best to not use a global variable.
client = new MongoClient(uri2, options)
clientPromise = client.connect()
console.log("Database Connected");

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
