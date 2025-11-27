import React from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {

  const {getTotalCartAmount,getDiscount,getFinalTotal,isPromoApplied} = React.useContext(StoreContext);


  return (
   <form className='place-order'>
    <div className="place-order-left">
      <p className="tittle">Delivery Information</p>
      <div className="multi-feilds">
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name' />
      </div>
      <input type="email" placeholder='Email Address' />
      <input type="text" placeholder='Street' />
      <div className="multi-feilds">
         <input type="text" placeholder='City'/>
        <input type="text" placeholder='State' />
      </div>

       <div className="multi-feilds">
         <input type="text" placeholder='Zip Code'/>
        <input type="text" placeholder='Country' />
      </div>

      <input type="text" placeholder='Phone' />

    </div>

    <div className="place-order-right">

       <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <div>
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <div>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            {isPromoApplied && (
              <div className="discount-row">
                <p>Discount (5%)</p>
                <p className="discount-amount">-${getDiscount().toFixed(2)}</p>
              </div>
            )}
            <div>
              <b>Total</b>
              <b>${getFinalTotal().toFixed(2)}</b>
            </div>
          </div>
          <button >
            PROCEED TO PAYMENT
          </button>
        </div>

    </div>


   </form>
  )
}

export default PlaceOrder
