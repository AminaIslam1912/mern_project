import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    promoCode,
    setPromoCode,
    isPromoApplied,
    promoError,
    applyPromoCode,
    getDiscount,
    getFinalTotal,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  const hasItems = Object.values(cartItems).some((quantity) => quantity > 0);

  if (!hasItems) {
    return (
      <div className="cart">
        <div className="cart-empty">
          <h2>Your cart is empty</h2>
          <p>Add some delicious items to get started!</p>
          <button onClick={() => navigate("/")}>Browse Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-tittle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div key={index} className="cart-items-tittle cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)}>x</p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
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
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cart-promocode-input">
            <input
              type="text"
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className={promoError ? "error" : isPromoApplied ? "success" : ""}
            />
            <button onClick={() => applyPromoCode(promoCode)}>Apply</button>
          </div>
          {promoError && <p className="promo-error">{promoError}</p>}
          {isPromoApplied && (
            <p className="promo-success">Promo code applied! You saved 5%</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
