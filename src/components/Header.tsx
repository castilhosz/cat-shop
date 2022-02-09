import React from 'react';
import styles from '../styles/components/Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <p>&quot;) bubs_shop</p>

      <nav>
        <ul>
          <li><a href="/">FEED</a></li>
          <li><a href="/estoque"></a>EM ESTOQUE</li>
        </ul>
      </nav>

      <a>login</a>
    </div>
  )
}