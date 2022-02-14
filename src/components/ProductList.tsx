import React from 'react';
import products from '../../products.json';

function Product(props) {
  return (
    <div>
      <img src={props.img} alt="" />
      <p>{props.subtitle}</p>
      <h1>{props.title}</h1>
    </div>
  )
}

export default function ProductList() {
  return (
    <div >
      <div>
        {products.map((e) => {
          return (
            <Product img={e.img} subtitle={e.subtitle} title={e.title} />
          );
        })}
      </div>
    </div>
  )
};