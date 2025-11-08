import React, { useEffect, useRef, useState } from 'react'

const Task7 = () => {
    const rendercount=useRef(1);
    const[text,settext]=useState("");
    useEffect(()=>{
        rendercount.current=rendercount.current+1
    })
    
  return (
    <div className='task7'>
        <h2>Render count by using useref hook</h2>
        <div className='countcontainer'>
         <input type="text" placeholder='enter any text' value={text} onChange={(e)=>settext(e.target.value)} />
         <h3 className='count'>Render Count: {rendercount.current}</h3>
        </div>
    </div>
  )
}

export default Task7