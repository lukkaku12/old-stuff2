import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '@hooks/useGetProducts.js'




const ProductList = () => {

const {products, loadMoreProducts} = useGetProducts();

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map(product => (
          <ProductItem product = {product} key= {product?.id} />
        ))}
      </div>
      <button onClick={loadMoreProducts}>Load more</button> 
    </section>
  );
}

export default ProductList;
