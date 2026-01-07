import React from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div
      className="login-overlay"
      onClick={() => navigate("/")}
    >
      <div
        className="login-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close icon */}
        <span
          className="close-icon"
          onClick={() => navigate("/")}
        >
          &times;
        </span>

        <h2 className="login-title">Sign Up</h2>

        <input type="text" placeholder="Username" className="login-input" />
        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />

        <button
          className="login-btn-main"
          onClick={() => navigate("/login")}
        >
          Create Account
        </button>

        <p className="signup-text">
          Already have an account?{" "}
          <span
            className="signup-link"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
