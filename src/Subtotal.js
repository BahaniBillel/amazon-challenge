import React from 'react'
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { SportsBasketball } from '@mui/icons-material';


const Subtotal = () => {
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>
                {/* part of the homework */}
                Subtotal(0 items):
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