import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/pages/Home.module.css'
import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles['page-home']}>
      <Head>
        <title>bubs_shop</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <div className={styles.discount}>
        <p>Economize até 40%</p>
        <Link href="/estoque"><a>Veja todos nossos produtos exclusivos</a></Link>
      </div>
      <div className={styles.homeImage}>
        <Image
          height={1000}
          width={1800}
          src="/237-deluxe.jpg"
          objectFit="cover" />
      </div>
    </div>
  )
}
