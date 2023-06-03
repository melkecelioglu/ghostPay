import Link from 'next/link'
import type { AppProps } from 'next/app'

import { useReducer } from 'react'
import Success from "../components/success"
import Bug from "../components/bug"

import { useRouter } from "next/router";


//If we want to use event like onSubmit, onChange for form and texts, we can use that style.

const formReducer = (state ,event) => {
    return {
        ...state,
        [event.target.name]:event.target.value
    }
}


export default function Signup(props:AppProps){

  /*
  const [formData,setFormData] = useReducer(formReducer,{})
  
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if(Object.keys(formData).length == 0) return console.log("Dont Have Form Data");
    console.log(formData);

  }

  //if (Object.keys(formData).length > 0) return <Success message = {"Data added successfully"}></Success>
  //onSubmit={handleSubmit} //for form
  //onChange={setFormData} //for type=text

  */

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
    if (!body.name || !body.surname || !body.mail || !body.password || !body.metamaskid ) {
      // Sends a HTTP bad request error code
      console.log("ERROR");
      alert("Registration is unsucessful due to missing parts");
      return;
    }

    const response = await fetch("/api/signupForm", {
      method: "POST",
      body:  JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    });

    if (response.ok){
      alert("Successful Registration");
      router.push("/signin"); //If the signup is successfull, then route to /signin page.
    }
  }

  //action="/api/signupForm" method="post" //Another method for routing " <form > "

  return(
    <div>
      <h1> Sign Up to GhostPay</h1>
      <form onSubmit={handleSubmit} >  
        
        <label htmlFor="name">Name: </label>
        <input type="text" onChange={setFormData} id="name" name="name" /> 

        <br></br>

        <label htmlFor="surname">Surname: </label>
        <input type="text" onChange={setFormData}  id="surname" name="surname" />

        <br></br>

        <label htmlFor="mail">Mail: </label>
        <input type="email" onChange={setFormData} id="mail" name="mail" />

        <br></br>

        <label htmlFor="password">Password: </label>
        <input type="text" onChange={setFormData} id="password" name="password" />

        <br></br>

        <label htmlFor="metamaskid">Metamask ID: </label>
        <input type="text" onChange={setFormData} id="metamaskid" name="metamaskid" />

        <br></br>
        <br></br>
        <br></br>

        <button type="submit">Sign Up</button>
     </form>
    </div>

  )
}