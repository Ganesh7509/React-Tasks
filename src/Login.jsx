import React, { useState } from 'react'
import { useAuth } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setusername] = useState('');

  function usernamehandler(e) {
    setusername(e.target.value);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
          width: "320px"
        }}
      >
        <h2 style={{ color: "#1a237e", marginBottom: "10px" }}>🔐 Login Form</h2>
        
        {/* 🔹 Added this line for recruiter/user clarity */}
        <p style={{ color: "#555", fontSize: "14px", marginBottom: "20px" }}>
          Please login to access user details in Task10 
        </p>

        <input
          type="text"
          placeholder="Please enter your username"
          value={username}
          onChange={usernamehandler}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
            outline: "none",
            transition: "0.2s"
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #1a73e8")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />

        <button
          onClick={() => {
            login(username);
            navigate("/", { replace: true });
          }}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#1a73e8",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0d47a1")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#1a73e8")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
