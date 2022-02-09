import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles['page-home']}>
      <Head>
        <title>bubs_shop</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.header}>
        <p>&quot;) bubs_shop</p>

        <div>
          <button>FEED</button>
          <button id="active">EM ESTOQUE</button>
        </div>

        <p>login</p>
      </div>

      <div className={styles.feed}>
        <div>
          <img src="" alt="" />
          <p>SUBTITLE</p>
          <h1>TITLE</h1>
        </div>
        <div>
          <img src="" alt="" />
          <p>SUBTITLE</p>
          <h1>TITLE</h1>
        </div>
        <div>
          <img src="" alt="" />
          <p>SUBTITLE</p>
          <h1>TITLE</h1>
        </div>
        <div>
          <img src="" alt="" />
          <p>SUBTITLE</p>
          <h1>TITLE</h1>
        </div>
        <div>
          <img src="" alt="" />
          <p>SUBTITLE</p>
          <h1>TITLE</h1>
        </div>
      </div>
    </div>
  )
}
