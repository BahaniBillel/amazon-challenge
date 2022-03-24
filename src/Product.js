import React from "react";
import "./product.css";

import Rating from '@mui/material/Rating';

function Product({title,image,price,rating}) {


  const addToBasket=()=>{
    
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
        <Rating name="half-rating" defaultValue={rating} precision={0.5} />
        </div>
      </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to bascket</button>
    </div>
  );
}

export default Product;
