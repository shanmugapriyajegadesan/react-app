import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import logo from "../Assets/logo.png";

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // true = login, false = signup
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/token/", {
        username,
        password,
      });

      // store JWT tokens
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      alert("Login successful!");
      onClose();
      window.location.href = "/"; // redirect to homepage
    } catch (err) {
      console.error(err.response);
      alert("Invalid credentials");
    }
  };

  const handleSignup = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/signup/", {
        username,
        password,
      });

      alert("Signup successful! Please login.");
      setIsLogin(true); // switch to login after signup
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error(err.response);
      alert("Signup failed. Username may already exist.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) handleLogin();
    else handleSignup();
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-card" onClick={(e) => e.stopPropagation()}>
        <span className="close-icon" onClick={onClose}>
          &times;
        </span>

        <div className="login-logo">
          <img src={logo} alt="Pothys Mart" />
        </div>

        <h2 className="login-title">{isLogin ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-btn-main" type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
