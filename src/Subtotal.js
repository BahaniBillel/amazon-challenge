import React from 'react'
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';


const Subtotal = () => {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>
                {/* part of the homework */}
                Subtotal({basket?.length} items):
            <strong>0</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox"  />
                This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={0} // part of the  home work
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal