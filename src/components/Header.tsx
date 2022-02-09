import React from 'react';
import styles from '../styles/components/Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <p>&quot;) bubs_shop</p>

      <nav>
        <li><a href="/">FEED</a></li>
        <li><a href="/estoque"></a>EM ESTOQUE</li>
      </nav>

      <button><p>login</p></button>
    </div>
  )
}