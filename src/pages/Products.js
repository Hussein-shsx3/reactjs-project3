import React from 'react';
import Product from '../componants/product';
import { Data } from '../componants/Data';
const Products = () => {
  const dataShow = Data.map((el) => (
    <Product img={el.img} title={el.title} disc={el.disc} price={el.price} />
  ));
  return (
    <div id='Page-2'>
      <h1>PRODUCTS</h1>
      <div id='shoes'>
        {dataShow}
      </div>
    </div>
  );
}

export default Products;
