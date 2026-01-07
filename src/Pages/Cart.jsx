import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cartimg from "../Assets/empty-cart.png";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from "../Redux/CartSlice";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://127.0.0.1:8000";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart?.items || []);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  // 🖼 Image resolver (backend + assets support)
  const getImage = (image) => {
    if (!image) return "/placeholder.png";
    if (image.startsWith("http")) return image;
    return `${BASE_URL}${image}`;
  };

  // EMPTY CART
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-container">
        <img src={cartimg} alt="Empty Cart" className="empty-cart-img" />
        <h2>Your cart is empty</h2>
        <p>Looks like you haven’t added anything yet</p>

        <button className="continue-btn" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            {/* IMAGE */}
            <img
  src={getImage(item.image)}
  alt={item.name}
  className="cart-img"
  onError={(e) => (e.target.src = "/placeholder.png")}
/>
            {/* DETAILS */}
            <div className="cart-details">
              <h4>{item.name}</h4>
              {item.unit && <span className="unit">{item.unit}</span>}

              <p className="price">
                ₹{item.price} × {item.qty}
              </p>

              <p className="item-total">
                Item Total: ₹{item.price * item.qty}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="cart-actions">
              <div className="qty-controls">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  disabled={item.qty === 1}
                >
                  −
                </button>
                <span>{item.qty}</span>
                <button onClick={() => dispatch(increaseQty(item.id))}>
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="cart-summary">
        <h3>Total Price: ₹{totalAmount}</h3>

        <div className="summary-actions">
          <button className="clear-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
