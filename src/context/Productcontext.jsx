import React, { createContext } from "react";
let productdata={
    name:'mobile',
    cost:5000
}
export const Productcontext=createContext();
export   const Productprovider=({children})=>{
    return <Productcontext.Provider value={productdata}>
   {children}
    </Productcontext.Provider>
}
