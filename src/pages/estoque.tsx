import Head from 'next/head'
import styles from '../styles/pages/Estoque.module.css'

import Header from '../components/Header';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <div className={styles['page-estoque']}>
      <Head>
        <title>bubs_shop</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <ProductList />

    </div>
  )
}
