import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../Assets/logo.png";
import Login from "../../Pages/Login";
import { useSelector } from "react-redux";

const Navbar = ({ children }) => {
  const cartCount = useSelector(
    (state) => state.cart.items.length
  );

  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  // ✅ CHECK LOGIN STATE
  const isLoggedIn = localStorage.getItem("access");

  // ✅ LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.clear();       // remove JWT
    navigate("/");              // go home
    window.location.reload();   // refresh navbar state
  };

  return (
    <>
      <header className="navbar-wrapper">
        <nav className="navbar">

          {/* Left */}
          <div className="nav-left">
            <img src={logo} alt="Pothys Mart" className="logo" />
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/new-arrivals" className="nav-item">New Arrivals</Link>
          </div>

          {/* Center – SEARCH BAR */}
          <div className="nav-search">
            {children}
          </div>

          {/* Right */}
          <div className="nav-right">

            {/* ✅ LOGIN / LOGOUT TOGGLE */}
            {!isLoggedIn ? (
              <button
                className="login-btn"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            ) : (
              <button
                className="login-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}

            <Link to="/cart" className="cart">
              <FaShoppingCart />
              <span className="cart-count">{cartCount}</span>
            </Link>
          </div>

        </nav>
      </header>

      {/* ✅ LOGIN MODAL */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
