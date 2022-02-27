import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import styles from "../styles/components/Header.module.css"

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <div className={styles.main}>
      <div className={styles.loginBar}>
        <Link href="/meus-pedidos" passHref>
          <a href="replace">Acompanhar Pedidos</a>
        </Link>
        <Link href="/auth" passHref>
          <a href="replace">Login/Registrar</a>
        </Link>
        <Link href="/atendimento" passHref>
          <a href="replace">Ajuda</a>
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.brand}>
          <p>&quot;) bubs_shop</p>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/" passHref>
                <a href="replace" id={router.pathname === "/" ? "active" : ""}>
                  FEED
                </a>
              </Link>
            </li>
            <li>
              <Link href="/estoque" passHref>
                <a
                  href="replace"
                  id={router.pathname === "/estoque" ? "active" : ""}
                >
                  EM ESTOQUE
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <div />
      </div>
    </div>
  )
}

export default Header
