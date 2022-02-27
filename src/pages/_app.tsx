import React from "react"
import Head from "next/head"
import { AppProps } from "next/app"

import "../styles/globals.css"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
  <Head>
    <title>bubs_shop</title>
  </Head>
  <Component {...pageProps} />
  </>
)

export default MyApp
