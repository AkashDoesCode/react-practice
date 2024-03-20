import React,{useState} from 'react'

export default function HookObject() {
    const[name, setName]=useState({firstname : '', lastname : ''});
  return (
    <div>
        <input type='text' onChange={(e)=>setName({...name, firstname : e.target.value})} />
        <input type='text' onChange={(e)=>setName({...name, lastname : e.target.value})} />
        <p>firstname : {name.firstname}</p>
        <p>lastname : {name.lastname}</p>
    </div>
  )
}
