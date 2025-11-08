import React, {  useContext, useState } from 'react'

 export  const Authcontext=React.createContext();
 export const AuthProvider=({children})=>{
    const[user,setuser]=useState("");
    function login(user){
        if(user.trim()===""){ alert("Empty Fields are not allowed");return}
        setuser(user)
    }
    function logout(){
        setuser("")
    }
    return <Authcontext.Provider value={{user,login,logout}}>
        {children}
    </Authcontext.Provider>
}

 export function useAuth(){
    return useContext(Authcontext)
}