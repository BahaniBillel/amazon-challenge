import React from "react";
import "./product.css";
import Rating from '@mui/material/Rating';
import {useStateValue} from './StateProvider';

function Product({id,title,image,price,rating}) {
const [state,dispatch]=useStateValue();

  const addToBasket=()=>{
    // dispatch the item into the data layer 
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      }
    })
  
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
