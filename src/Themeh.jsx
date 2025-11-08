// import React from 'react'
// import { useTheme } from './customhoks/themeSwitching'
// const Themeh = () => {
//     console.log(useTheme())
//     const{theme,themehandler}=useTheme();
//   return (
//     <div>
//         <p>Theme:{theme}</p>
//         <button onClick={themehandler}>change theme</button>
//     </div>
//   )
// }

// export default Themeh


import React from 'react'
import { useTheme } from './customhoks/themeSwitching'

const Themeh = () => {
  const { theme, themehandler } = useTheme();

  return (
    <div
      style={{
        marginTop:"80px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        padding: "30px",
        borderRadius: "12px",
        width: "300px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <p style={{ fontSize: "18px", color: "#333" }}>Theme: <b>{theme}</b></p>
      <button
        onClick={themehandler}
        style={{
          backgroundColor: "#1a73e8",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Themeh;
