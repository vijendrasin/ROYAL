 import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseItemQuantity } from '../store/Cartslice';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  // console.log(cartItems, `cartItems`)

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseItemQuantity(itemId));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">ROYAL ENFIELD</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            {console.log(item ,"item")}
            <div className="cart-item-details">
              <div className="cart-item-image">
                <img src={item.image} alt= "" />
                {console.log(item.image,"image")} {/* Display the image with src from item data */}
              </div>
              <div>
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-quantity">Quantity: {item.quantity}</span>

                <span className="cart-item-price">₹{item.price}</span>
                <span className="cart-item-remove" onClick={() => handleRemoveItem(item.id)}>×</span>
                <span className="cart-item-increase" onClick={() => handleIncreaseQuantity(item.id)}>+</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <span className="cart-total-label">Total:</span>
        <span className="cart-total-value">₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;
