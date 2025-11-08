import React, { useEffect, useState } from 'react'

const Task4 = () => {
    const[message,setmessage]=useState({id:'',text:""});
    const[list,setlist]=useState(()=>{
        let savedtodos=localStorage.getItem('todos');
        return savedtodos?JSON.parse(savedtodos):[];
    });
                                        
    const[edit,isedit]=useState({id:"",status:false})
    function messagehandler(e){
        setmessage({
            ...message,text:e.target.value
        })
    }
    function addhandler(e){
        e.preventDefault();
        if(message.text.trim()===""){alert("Empty Fields are not allowed");return}
        if(list.find((value)=>value.text===message.text)){alert("Repeated texts are not allowed");setmessage({id:"",text:""});return}
        let newtodos={id:new Date().getTime().toString(),text:message.text};
        setmessage({ ...message, newtodos })
     setlist([...list,newtodos])
     setmessage({id:"",text:""})
    }
    function deletehandler(id){
        let filteritems=list.filter((value)=>{
           return value.id!==id
        })
        setlist(filteritems)
    }

    function edithandler(id){
        let edititem=list.find((value)=>{
        return value.id===id;
        })
        isedit({id:edititem.id,status:true})
        setmessage({id:edititem.id,text:edititem.text})

    }
    function fedithandler(e){
        e.preventDefault()
        let confirmedit=window.confirm("Are you sure want to edit the Item")
        if(!confirmedit){setmessage({id:"",text:""}); isedit({id:"",status:false});return}
        let updatedlist=list.map((value)=>{
            if(value.id===edit.id){return {...value,text:message.text}}
            return value
        })
        if(message.text.trim()===""){alert("Empty Texts are not allowed");return}
        if(list.find((value)=>{return value.text===message.text })){alert("Repeated Items are not allowed");return}
        setlist(updatedlist)
        isedit({id:"",status:false})
        setmessage({id:"",text:""})
    }
    useEffect(()=>{
localStorage.setItem('todos',JSON.stringify(list))
    },[list])
  return (
    <div className='task4'>
        <h1>React CRUD with usestate Hook</h1>
        <form  className='todoform-container'>
            <input
             type="text" 
             placeholder='enter any text'
             id='text'
             name='text'
             value={message.text}
             onChange={messagehandler}
             />
             {edit.status?<button onClick={fedithandler}>Edit</button>: <button onClick={addhandler}>Add</button>}
        </form>
        <ul className='todo-container'>
            {
                list.map((value)=>{
                    const{id,text}=value
               return     <li key={id} className='each-todo' >
                        <span>{text}</span>
                        <button onClick={()=>edithandler(id)}>Edit</button>
                        <button disabled={edit.id===id} onClick={()=>deletehandler(id)}>Delete</button>
                    </li>
                })

            }
        </ul>
    </div>
  )
}

export default Task4