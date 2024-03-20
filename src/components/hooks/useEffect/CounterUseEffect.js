import React, { useEffect, useState } from 'react'

export default function CounterUseEffect() {
    const[count, setCount]=useState(0);
    const[name, setName]=useState('');

    useEffect(()=>{
        //e.preventDefault();
        console.log("updating title")
        document.title=`clicked ${count}`
    },[count])

  return (
    <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>clicked {count}</button>
    </div>
  )
}
