import React, { useState } from "react";
function Task2(){
    const[showdata,setshowdata]=useState(true);
    function hidehandler(){
        setshowdata(!showdata)

    }
    function showhandler(){
        setshowdata(!showdata)

    }
    return(
        <div className="task2">
         <h1>Show data and set show data by using usestate hook</h1>
           {showdata?<button onClick={hidehandler}>Hide Data</button>:<button onClick={showhandler}>Show data</button>} 
        
          {showdata 
  ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem temporibus ullam odit fugit corporis ipsum illo expedita consequatur earum ut, nam corrupti tempore quis illum facere exercitationem aspernatur fugiat.</p> 
  : <p>Data is Hidden</p>
}


        </div>
    )
}
export default Task2;