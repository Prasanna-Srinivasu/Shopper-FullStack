import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
  const {
    getTotalCartAmount,
    allProduct,
    cartItems,
    updateQuantity,
    removeItemCompletely
  } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProduct.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                <p className='cartitems-product-title'>{e.name}</p>
                <p className='cartitems-price'>₹{e.new_price || e.price}</p>
                <div className='cartitems-quantity-controls'>
                  <button
                    className='quantity-btn decrease-btn'
                    onClick={() => updateQuantity(e.id, cartItems[e.id] - 1)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className='quantity-display'>{cartItems[e.id]}</span>
                  <button
                    className='quantity-btn increase-btn'
                    onClick={() => updateQuantity(e.id, cartItems[e.id] + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <p className='cartitems-total-price'>₹{(e.new_price || e.price) * cartItems[e.id]}</p>
                <button
                  className='cartitems-remove-btn'
                  onClick={() => removeItemCompletely(e.id)}
                  aria-label="Remove item from cart"
                >
                  <img className='cartitems-remove-icon' src={remove_icon} alt="Remove" />
                </button>
              </div>
              <hr />
            </div>
          )
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className='cartitems-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>SubTotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className='checkout-btn'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className='cartitems-promobox'>
            <input type='text' placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems