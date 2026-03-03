import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../Assets/logo.png";
import { useSelector } from "react-redux";
import AuthModal from "../../Pages/AuthModel";

const Navbar = ({ children }) => {
  const cartCount = useSelector((state) => state.cart.items.length);
  const [showAuth, setShowAuth] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("access");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className="navbar-wrapper">
        <nav className="navbar">

          <div className="nav-left">
            <img src={logo} alt="Pothys Mart" className="logo" />
          </div>

          <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
            <Link to="/" className="nav-item" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/new-arrivals" className="nav-item" onClick={() => setMenuOpen(false)}>New Arrivals</Link>
          </div>

          <div className="nav-search">
            {children}
          </div>

          <div className="nav-right">
            {!isLoggedIn ? (
              <button
                className="login-btn"
                onClick={() => setShowAuth(true)}
              >
                Login / Signup
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

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>

        </nav>
      </header>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Navbar;