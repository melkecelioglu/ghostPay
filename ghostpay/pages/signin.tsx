import Link from 'next/link'
import type { AppProps } from 'next/app'

import { useReducer } from 'react'
import { useRouter } from "next/router";
import { CodeAction } from 'typescript';

const formReducer = (state ,event) => {
  return {
      ...state,
      [event.target.name]:event.target.value
  }
}

export default function Signin(props:AppProps){

  const router = useRouter();

  const [formData,setFormData] = useReducer(formReducer,{})
  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    if(Object.keys(formData).length == 0){
      alert("No form input is entered");
      return console.log("Dont Have Form Data");
    } 
    console.log(formData);

    // Get data submitted in request's body.
    const body = formData;
    
    // Guard clause checks 
    // and returns early if they are not found
    if (!body.mail || !body.password ) {
      // Sends a HTTP bad request error code
      console.log("ERROR");
      alert("Login is unsucessful due to missing parts");
      return;
    }

    const response = await fetch("/api/signinForm", {
      method: "POST",
      body:  JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    });

    if (response.ok){
      alert("Successful Login");
      router.push("/api/hello"); //If the login is successfull, then route to /api/hello page.
    }
    else{
      alert("Unsuccessful Login, Mail or Password is Wrong");
      return;
    }
  }

 //action="/api/signinForm" method="post"

  return(
    <div>
      <h1> Sign In to GhostPay</h1>
      <form onSubmit={handleSubmit} >      

        <label htmlFor="mail">Mail: </label>
        <input type="email" onChange={setFormData} id="mail" name="mail" />

        <br></br>

        <label htmlFor="password">Password: </label>
        <input type="text" onChange={setFormData} id="password" name="password" />

        <br></br>
        <br></br>

        <button type="submit">Login </button>
     </form>

    </div>

  )



}