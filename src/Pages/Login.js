import React, { useState } from "react";
import "./Login.css";
import logo from "../Assets/logo.png";
import axios from "axios";

const Login = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        { username, password }
      );

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      onClose(); // ✅ close modal after login
      window.location.reload(); // refresh navbar
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div
        className="login-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close icon */}
        <span className="close-icon" onClick={onClose}>
          &times;
        </span>

        <div className="login-logo">
          <img src={logo} alt="Pothys Mart" />
        </div>

        <h2 className="login-title">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn-main" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
