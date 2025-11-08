import React from 'react'
import enhancedCounter from './enhancedCounter'

const HoverCounter = ({ count, increment }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3
        onMouseEnter={increment}
        style={{
          backgroundColor: "#0077b6",
          color: "white",
          padding: "12px 24px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          userSelect: "none",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#023e8a")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0077b6")}
      >
        Hovered {count} Times
      </h3>
    </div>
  )
}

export default enhancedCounter(HoverCounter)
