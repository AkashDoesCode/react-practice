import React, { useEffect, useState } from 'react'

export default function HookCleanup() {
    const[x, setX]=useState(0);
    const[y,setY]=useState(0)
    const[toggle, setToggle]=useState(true);

    const cursorposition =(e)=>{
        console.log("cursor position")
        setX(e.clientX);
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useeffect")
        window.addEventListener('mousemove', cursorposition);
        
        return()=>{
            console.log("removed");
            window.removeEventListener('mousemove', cursorposition)
        };

    },[])

  return (
    <div>
        <button onClick={()=>setToggle(prevToggle=>!prevToggle)}>Toggle</button>
        {toggle && <div>
            <p>X cord:-{x}</p>
            <p>Y cord:-{y}</p>
        </div>}
    </div>
  )
}
