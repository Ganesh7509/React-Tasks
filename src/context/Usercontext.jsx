import React from "react";

export const Usercontext = React.createContext();

export const UsercontextProvider = ({ children }) => {
  return (
    <Usercontext.Provider value={"srikanth"}>
      {children}
    </Usercontext.Provider>
  );
};
