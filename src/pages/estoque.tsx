import React from "react"
import Head from "next/head"
import Image from "next/image"

import styles from "../styles/pages/Estoque.module.css"
import products from "../../products.json"
import Header from "../components/Header"

const Stock: React.FC = () => (
  <div className={styles["page-estoque"]}>
    <Head>
      <title>bubs_shop</title>
      <link rel="icon" href="/favicon.png" />
    </Head>

    <Header />

    <div className={styles.container}>
      {products.map(e => (
        <div key={e.product_id}>
          <Image src={e.cover} alt="" height={500} width={500} />
          <p>{e.description}</p>
          <a href="/products/{product_id}">
            <h1>{e.name}</h1>
          </a>
        </div>
      ))}
    </div>
  </div>
)

export default Stock
