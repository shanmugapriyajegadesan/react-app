import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
            {/* <h3>ShopEasy</h3> */}
          </div>
          <p>
            Freshcart is your trusted online store for groceries and daily needs.
            Fast delivery & best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-section">
          <h4>Customer Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@shopeasy.com</p>
          <p>Phone: +91 98765 43210</p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Freshcart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
