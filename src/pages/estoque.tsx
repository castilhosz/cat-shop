import Head from 'next/head'
import styles from '../styles/pages/Estoque.module.css'

import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles['page-estoque']}>
      <Head>
        <title>bubs_shop</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <div className={styles.feed}>
        <div>
          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpopnow.com.br%2Fwp-content%2Fuploads%2F2018%2F08%2Ftravisscott_37563341_745767692434613_8752327210972479488_n-e1534970172740.jpg&f=1&nofb=1" alt="" />
          <p>Travis Scott</p>
          <h1>ASTROWORLD</h1>
        </div>
        <div>
          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.sanity.com.au%2Fmedia%2FImages%2Ffullimage%2F360394%2FSDC_2325652_2017-16-1--08-15-00.jpg&f=1&nofb=1" alt="" />
          <p>Travis Scott</p>
          <h1>BIRDS IN THE TRAP SING MCKNIGHT</h1>
        </div>
        <div>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2Fad941e1ff042a96ec8042da9b8192f23.1000x1000x1.jpg&f=1&nofb=1" alt="" />
          <p>Yunk Vino</p>
          <h1>MIDNIGHT CALLS</h1>
        </div>
        <div>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft2.genius.com%2Funsafe%2F600x600%2Fhttps%3A%252F%252Fimages.genius.com%252F74739ffa7ed3e88790ae1881e3bb6133.640x640x1.jpg&f=1&nofb=1" alt="" />
          <p>Leozin</p>
          <h1>COLAPSO</h1>
        </div>
        <div>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.portalpopcyber.com%2Fwp-content%2Fuploads%2F2020%2F04%2Funnamed-1-1-scaled.jpg&f=1&nofb=1" alt="" />
          <p>Dudu &amp; Leozin</p>
          <h1>JORDAN BOYZ VOL.2</h1>
        </div>
      </div>
    </div>
  )
}
