import React from 'react';
import styles from '../styles/components/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

import HeaderLogin from './HeaderLogin';

export default function Header() {
  const route = useRouter()

  if (route.pathname = '/') {
    return (
      <div className={styles.main}>
        <HeaderLogin />
        <div className={styles.container}>
          <p>&quot;) bubs_shop</p>

          <nav>
            <ul>
              <li className={styles.active}>
                <Link href="/"><a>FEED</a></Link>
              </li>
              <li>
                <Link href="/estoque"><a>EM ESTOQUE</a></Link>
              </li>
            </ul>
          </nav>

          <div />
        </div>
      </div>
    )
  } else if (route.pathname = '/estoque') {
    return (
      <div className={styles.main}>
        <HeaderLogin />
        <div className={styles.container}>
          <p>&quot;) bubs_shop</p>

          <nav>
            <ul>
              <li>
                <Link href="/"><a>FEED</a></Link>
              </li>
              <li className={styles.active}>
                <Link href="/estoque"><a>EM ESTOQUE</a></Link>
              </li>
            </ul>
          </nav>

          <div />
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.main}>
        <HeaderLogin />
        <div className={styles.container}>
          <p>&quot;) bubs_shop</p>

          <nav>
            <ul>
              <li>
                <Link href="/"><a>FEED</a></Link>
              </li>
              <li>
                <Link href="/estoque"><a>EM ESTOQUE</a></Link>
              </li>
            </ul>
          </nav>

          <div />
        </div>
      </div>
    )
  }
}
