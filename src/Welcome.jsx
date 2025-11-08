import React from 'react'
import { useLocation } from 'react-router-dom'

const Welcome = () => {
  const location = useLocation();
  const { name, email } = location.state || {};

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px",
        background: "linear-gradient(to right, #74ebd5, #ACB6E5)",
        padding: "40px",
        borderRadius: "20px",
        width: "60%",
        margin: "80px auto",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        color: "#333",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "36px", color: "#1a237e", marginBottom: "10px" }}>
        Welcome, {name ? name : "Guest"} 👋
      </h1>
      <p style={{ fontSize: "20px", color: "#424242" }}>
        Your email: <span style={{ fontWeight: "bold", color: "#0d47a1" }}>{email || "Not Provided"}</span>
      </p>
    </div>
  )
}

export default Welcome
