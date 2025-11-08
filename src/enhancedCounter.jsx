import React, { useState } from "react";
function enhancedCounter(Originalcomponent){
  return function NewComponent(){
    const[count,setcount]=useState(0);
    function incrementhandler(){
        setcount(count+1)
    }
    return(
        <Originalcomponent count={count} increment={incrementhandler}></Originalcomponent>
    )
  }

}

export default enhancedCounter;