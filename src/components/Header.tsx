import React from 'react';
import styles from '../styles/components/Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <p>&quot;) bubs_shop</p>

      <div>
        <button>FEED</button>
        <button>EM ESTOQUE</button>
      </div>

      <button><p>login</p></button>
    </div>
  )
}