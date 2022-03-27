import React from 'react';
import './checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="/"
          className="checkout__ad"
        />
        <div>
          <h3>hello,{user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <FlipMove>
            {basket.map((item) => (
              <CheckoutProduct
                id={item}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
