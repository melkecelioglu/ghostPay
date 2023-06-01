import Link from 'next/link'
import type { AppProps } from 'next/app'

import { useReducer } from 'react'
import Success from "../components/success"
import Bug from "../components/bug"

//If we want to use event like onSubmit, onChange for form and texts, we can use that style.
/* 
const formReducer = (state ,event) => {
    return {
        ...state,
        [event.target.name]:event.target.value
    }
}
*/

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

  return(
    <div>
      <h1> Sign Up to GhostPay</h1>
      <form action="/api/form" method="post" >
        
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" /> 

        <br></br>

        <label htmlFor="surname">Surname: </label>
        <input type="text"  id="surname" name="surname" />

        <br></br>

        <label htmlFor="mail">Mail: </label>
        <input type="email" id="mail" name="mail" />

        <br></br>

        <label htmlFor="metamaskid">Metamask ID: </label>
        <input type="text" id="metamaskid" name="metamaskid" />

        <br></br>
        <br></br>

        <button type="submit">Sign Up</button>
     </form>
    </div>

  )
}