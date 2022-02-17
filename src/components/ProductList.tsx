import React from 'react';
import Image from 'next/image';

import styles from '../styles/components/ProductList.module.css';
import products from '../../products.json';

export default function ProductList() {
  return (
    <div className={styles.container}>
      {products.map(e =>
        <div key={e.id}>
          <Image
            src={e.img}
            alt=""
            height={500}
            width={500} />
          <p>{e.subtitle}</p>
          <h1>{e.title}</h1>
        </div>
      )}
    </div>
  )
};