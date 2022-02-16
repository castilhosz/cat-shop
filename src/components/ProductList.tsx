import React from 'react';
import products from '../../products.json';
import Image from 'next/image';

export default function ProductList() {
  return (
    <div >
      {products.map(e =>
        <div key={e.id}>
          <Image src={e.img} alt="" />
          <p>{e.subtitle}</p>
          <h1>{e.title}</h1>
        </div>
      )}
    </div>
  )
};