import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function CallApi() {
    const[list,setList]=useState({});
    const[id,setId]=useState(1);
    const[idFromBox,setIdFromBox]=useState(1);

    const handleClick=()=>{
        setIdFromBox(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBox}`)
        .then(res=>{
            console.log(res);
            setList(res.data);
        }).catch(err=>{
            console.log("somethinf went wrong");
        })
    },[idFromBox])
  return (
    <div>
        <input type='text' value={id} onChange={(e)=>setId(e.target.value)} />
        <button onClick={handleClick}>click</button>
        <div>{list.title}</div>
       
    </div>
  )
}
