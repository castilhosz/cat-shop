import React from 'react';
import styles from '../styles/components/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

import HeaderLogin from './HeaderLogin';

export default function Header() {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <HeaderLogin />
      <div className={styles.container}>
        <div className={styles.brand}>
          <p>&quot;) bubs_shop</p>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/"><a id={router.pathname == '/' ? "active" : ""}>FEED</a></Link>
            </li>
            <li>
              <Link href="/estoque"><a id={router.pathname == '/estoque' ? "active" : ""}>EM ESTOQUE</a></Link>
            </li>
          </ul>
        </nav>

        <div />
      </div>
    </div>
  )
}
