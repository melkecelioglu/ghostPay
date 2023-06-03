
import { MongoClient } from 'mongodb'
// import { NextResponse } from "next/server";
// import type { NextRequest, NextFetchEvent } from "next/server";
// import { createEdgeRouter } from "next-connect";
// //import { isAuthenticated } from '@lib/auth'; //

// const router = createEdgeRouter<NextRequest, NextFetchEvent>();

// router.use(async (request, event, next) => {
//   return next();
// });

// router.get("", (request) => {
//   return NextResponse.redirect(new URL("", request.url));
// });

// router.use("", (request) => {
//   //if (!isAuthenticated(request)) {
//   //  return NextResponse.redirect(new URL("", request.url));
//   //}
//   return NextResponse.next();
// });


const uri2= "mongodb+srv://mbkara:admin13@cluster0.yxbalpx.mongodb.net/?retryWrites=true&w=majority"
const uri = "mongodb://localhost:27017"
const options = {}

if (!uri2) {
  throw new Error('Invalid environment variable: "MONGODB_URI"')
}

let client
let clientPromise : Promise<MongoClient>

// In production mode, it's best to not use a global variable.
client = new MongoClient(uri2, options)
clientPromise = client.connect()
console.log("Database Connected");

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
