import Head from 'next/head';
import styles from '../styles/pages/Home.module.css'
import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles['page-home']}>
      <Head>
        <title>bubs_shop</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <div>
        <h1>Hello, World</h1>
      </div>
    </div>
  )
}
