import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping, onResetAdded }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = (items) => {
    const total = items.reduce((sum, item) => {
      const numericCost = parseFloat(item.cost.replace(/[^0-9.]/g, ''));
      return sum + numericCost * item.quantity;
    }, 0);
    return `$${total.toFixed(2)}`;
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
    setAddedToCart({});
   
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };



  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1}));
  };

  const handleRemove = (item) => {
  dispatch(removeItem({ name: item.name }));
  onResetAdded(item.name); // 👈 Reset button state
};

const handleDecrement = (item) => {
  if (item.quantity > 1) {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  } else {
    dispatch(removeItem({ name: item.name }));
    onResetAdded(item.name); // 👈 Reset when quantity hits zero
  }
};

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const unitPrice = parseFloat(item.cost.substring(1));
    const subtotal = unitPrice * item.quantity;
    return `$${subtotal.toFixed(2)}`;
    
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: {calculateTotalAmount(cart)}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: {calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


