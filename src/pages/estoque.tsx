import Head from 'next/head'
import styles from '../styles/pages/Estoque.module.css'

import Header from '../components/Header';
import ProductStock from '../components/ProductStock';

export default function Home() {
  return (
    <div className={styles['page-estoque']}>
      <Head>
        <title>bubs_shop</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <div className={styles.feed}>
        <ProductStock />
      </div>

    </div>
  )
}
