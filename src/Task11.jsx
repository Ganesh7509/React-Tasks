import React from "react";
import ClickCounter from "./Clickcounter";
import HoverCounter from "./Hovercounter";
import Counter from "./Counter";
import Themeh from "./Themeh";

const Task11 = () => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8fafc",
      }}
    >
      {/* 🌟 Task Heading */}
      <h1
        style={{
          textAlign: "center",
          color: "#0077b6",
          marginBottom: "15px",
          fontSize: "26px",
        }}
      >
        Implementation of HOC (Higher Order Component) & Custom Hooks
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#555",
          fontSize: "15px",
          marginBottom: "40px",
        }}
      >
        This task demonstrates two advanced React concepts — <strong>Higher Order Components</strong> and{" "}
        <strong>Custom Hooks</strong>.
      </p>

      {/* ==================== 🔹 HOC Section ==================== */}
      <section
        style={{
          background: "#ffffff",
          padding: "25px",
          marginBottom: "40px",
          borderRadius: "12px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#023e8a", marginBottom: "10px", textAlign: "center" }}>
          🔹 Higher Order Component (HOC)
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "25px",
            fontSize: "15px",
          }}
        >
          The components below are enhanced using a shared logic called{" "}
          <strong>enhancedCounter</strong>, which adds counting functionality.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <ClickCounter name="Click Counter" />
          <HoverCounter />
        </div>
      </section>

      {/* ==================== 🔹 Custom Hooks Section ==================== */}
      <section
        style={{
          background: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#023e8a", marginBottom: "10px", textAlign: "center" }}>
          🔹 Custom Hooks
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "25px",
            fontSize: "15px",
          }}
        >
          Below components demonstrate usage of <strong>useCounter</strong> and{" "}
          <strong>useTheme</strong> custom hooks to manage reusable logic.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <Counter />
          <Themeh />
        </div>
      </section>
    </div>
  );
};

export default Task11;
