import React from 'react';
import styles from '../styles/components/HeaderLogin.module.css';
import Link from 'next/link';

export default function HeaderLogin() {
  return (
    <div className={styles.container}>
      <Link href='/meus-pedidos'><a>Acompanhar Pedidos</a></Link>
      <Link href='/auth'><a>Login/Registrar</a></Link>
      <Link href='/atendimento'><a>Ajuda</a></Link>
    </div>
  )
}