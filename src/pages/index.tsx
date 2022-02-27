import React from "react"
import Image from "next/image"
import Link from "next/link"

import styles from "../styles/pages/Home.module.css"
import Header from "../components/Header"

const Home: React.FC = () => (
  <div className={styles["page-home"]}>
    <Header />
    <div className={styles.discount}>
      <p>Economize até 40%</p>
      <Link href="/estoque" passHref>
        <a href="replace">Veja todos nossos produtos exclusivos</a>
      </Link>
    </div>
    <div className={styles.homeImage}>
      <Image
        height={1000}
        width={1800}
        src="/assets/237-deluxe.jpg"
        objectFit="cover"
      />
    </div>
  </div>
)

export default Home
