
import "../styles/globals.css"
import Layout from "../components/layout.js"
import Head from "next/head"
import type { AppProps } from 'next/app'

export default function AppWrapper({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{pageProps.title ? pageProps.title : "Our Basic Title"}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}


/*

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

*/