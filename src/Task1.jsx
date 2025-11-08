import React, { useState } from "react";
function Task1(){
 const[count,setcount]=useState(0)
function incrementhandler(){
  setcount((prevvalue)=>{
    return prevvalue+1
  })
}
function decrementhandler(){
  setcount((prevvalue)=>{
    return prevvalue-1
  })
}
    return(
        <div className="task1">
          <h1>Increment && Decrement Handler By Using Usestate Hook</h1>
         <button onClick={incrementhandler}>Increment</button>
         <span>{count}</span>
         <button onClick={decrementhandler}>Decrement</button>
        </div>
      
     
        

    )
}


export default Task1