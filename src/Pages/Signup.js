import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // same design reuse pannalam

const Signup = ({ onClose, switchToLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/signup/", {
        username,
        password,
      });

      alert("Signup successful! Please login.");
      switchToLogin(); 
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-card" onClick={(e) => e.stopPropagation()}>
        <span className="close-icon" onClick={onClose}>
          &times;
        </span>

        <h2 className="login-title">Sign Up</h2>

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

        <button className="login-btn-main" onClick={handleSignup}>
          Sign Up
        </button>

        <p style={{ marginTop: "15px" }}>
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={switchToLogin}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
