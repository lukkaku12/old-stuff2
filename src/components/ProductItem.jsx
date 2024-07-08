import React, { useContext } from "react";
import "@styles/ProductItem.scss";
import addToCartImg from "@icons/bt_add_to_cart.svg";
import {Appcontext} from "@context/AppContext";

const ProductItem = ( { product } ) => {
  
  const {addToCart}  = useContext(Appcontext);  

   const handleClick = item => {
     addToCart(item);
   };
  
  return (
    <div className="ProductItem">
      <img
        src={product.images[0]}
        alt={product.title}
      />
      <div className="product-info">
        <div>
          <p>${product?.price}</p>
          <p>{product?.title}</p>
        </div>
         <figure onClick={() => handleClick(product)}>
          <img src={addToCartImg} alt="" />
        </figure>
         
      </div>
    </div>
  );
};

export default ProductItem;
