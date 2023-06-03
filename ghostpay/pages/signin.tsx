import Link from 'next/link'
import type { AppProps } from 'next/app'

export default function Signin(props:AppProps){
  return(
    <div>
      <h1> Sign In to GhostPay</h1>
      <form action="/api/signinForm" method="post" >      

        <label htmlFor="mail">Mail: </label>
        <input type="email" id="mail" name="mail" />

        <br></br>

        <label htmlFor="password">Password: </label>
        <input type="text" id="password" name="password" />

        <br></br>
        <br></br>

        <button type="submit">Login </button>
     </form>

    </div>

  )



}