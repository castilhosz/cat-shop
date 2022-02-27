import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/components/Header.module.css';

export default function Header() {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.loginBar}>
        <Link href='/meus-pedidos'><a>Acompanhar Pedidos</a></Link>
        <Link href='/auth'><a>Login/Registrar</a></Link>
        <Link href='/atendimento'><a>Ajuda</a></Link>
      </div>
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
