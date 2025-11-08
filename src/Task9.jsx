import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Task9 = () => {
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const navigation=useNavigate();
    function namehandler(e){
        setname(e.target.value)
    }
   function emailhandler(e){
        setemail(e.target.value)
    }
    function submithandler(e){
        e.preventDefault()
        navigation('/welcome',{state:{name,email}})
    }
  return (
    <div className='task9'>
        <h2>Programmatic Navigation using useNavigate & useLocation</h2>
<form >
    <h2>Enter Your Details</h2>

    <input type="text" placeholder='enter name' value={name} onChange={namehandler}  required/> <br />
    <input type="email" placeholder='enter email' value={email}  onChange={emailhandler} required/> <br />
    <button type='submit' onClick={submithandler}>submit</button>
</form>
    </div>
  )
}

export default Task9