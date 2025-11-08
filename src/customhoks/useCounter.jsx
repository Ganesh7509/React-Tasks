import React, { useState } from "react";

function useCounter(){
    const[count,setcount]=useState(0);
    function increment(){
        setcount((prevcount)=>{
            return prevcount+1
        })
    }
    function decrement(){
        setcount((prevcount)=>{
          return  prevcount-1
        })
    }
   return {count,increment,decrement}
}
export default useCounter;