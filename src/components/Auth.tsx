import React from "react"
import Image from "next/image"
import Link from "next/link"

import styles from "../styles/components/Auth.module.css"

const Auth: React.FC = () => (
  <div className={styles["page-auth"]}>
    <div className={styles.container}>
      <button className={styles.close} type="submit">
        <Image height={30} width={30} src="/assets/close.svg" />
      </button>
      <Image height={100} width={100} src="/assets/logo.png" />
      <h1>ENTRE NA SUA CONTA</h1>
      <form>
        <input type="email" placeholder="Endereço de e-mail" />
      </form>
      <form>
        <input placeholder="Senha" />
      </form>
      <div>
        <form>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Mantenha-me conectado</label>
        </form>
        <Link href="/recuperar" passHref>
          <a href="replace">Esqueceu sua senha?</a>
        </Link>
      </div>
      <button className={styles.button} type="submit">
        <p>ENTRAR</p>
      </button>
    </div>
  </div>
)

export default Auth
