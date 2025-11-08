import React, { useState, useMemo, useCallback } from "react";

const products = [
  { name: "iPhone", price: 80000 },
  { name: "Laptop", price: 65000 },
  { name: "Headphones", price: 3000 }
];

const Task8 = () => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [dark, setDark] = useState(false);

  const filtered = useMemo(() => {
    console.log("Filtering...");
    return products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const addToCart = useCallback((item) => {
    setCart(prev => [...prev, item]);
  }, []);

  const total = useMemo(() => {
    console.log("Cart total calculating...");
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  return (
    <div style={{
      background: dark ? "#1e1e1e" : "#f5f5f5",
      minHeight: "100vh",
      color: dark ? "white" : "black",
      padding: "30px",
      transition: "0.3s"
    }}>
      <h2>React useMemo + useCallback + React.memo Example</h2>
  
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        
        <input
          placeholder="Search product..."
          style={{
            padding: "10px",
            width: "60%",
            borderRadius: "8px",
            border: "1px solid gray",
            outline: "none",
            fontSize: "15px"
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: "10px 20px",
            background: dark ? "#e3e3e3" : "black",
            color: dark ? "black" : "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600"
          }}
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <h3>🛒 Cart Total: ₹{total}</h3>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {filtered.map((p, i) => (
          <Product key={i} item={p} add={addToCart} />
        ))}
      </div>
    </div>
  );
};
export default Task8;

const Product = React.memo(({ item, add }) => {
  console.log("Rendering child:", item.name);

  return (
    <div style={{
      padding: "15px",
      borderRadius: "10px",
      background: "white",
      color: "black",
      boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
      textAlign: "center"
    }}>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>{item.name}</p>
      <p style={{ marginBottom: "10px" }}>₹{item.price}</p>
      <button
        onClick={() => add(item)}
        style={{
          padding: "8px 15px",
          borderRadius: "8px",
          border: "none",
          background: "#0a66c2",
          color: "white",
          cursor: "pointer",
          fontWeight: "600"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
});
