// import React from 'react'
// import useCounter from './customhoks/useCounter'


// const Counter = () => {
//     console.log(useCounter())
//     const{count,increment,decrement}=useCounter()

//   return (
// <>
// <h2>Count:{count}</h2>
// <button onClick={increment}>Increment</button>
// <button onClick={decrement}>Decrement</button>

// </>
//   )
// }

// export default Counter


import React from 'react'
import useCounter from './customhoks/useCounter'

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px",
        backgroundColor: "#f9f9f9",
        padding: "30px",
        borderRadius: "12px",
        width: "300px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "20px" }}>Count: {count}</h2>
      <div>
        <button
          onClick={increment}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "10px 20px",
            marginRight: "10px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Increment
        </button>
        <button
          onClick={decrement}
          style={{
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
