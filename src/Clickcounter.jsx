import React from 'react'
import enhancedCounter from './enhancedCounter'

const ClickCounter = ({ count, increment, name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        onClick={increment}
        style={{
          backgroundColor: "#0077b6",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: "bold",
          transition: "all 0.3s ease",
          boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#023e8a")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0077b6")}
      >
        {name} clicked {count} times
      </button>
    </div>
  )
}

export default enhancedCounter(ClickCounter)
