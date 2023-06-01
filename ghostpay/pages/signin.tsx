import Link from 'next/link'
import type { AppProps } from 'next/app'

export default function Signin(props:AppProps){
  return(
    <div>
      <h1> Sign In to GhostPay</h1>
      <Link href="/signin"> Sign In</Link>
    </div>

  )
}