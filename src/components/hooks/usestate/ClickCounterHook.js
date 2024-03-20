import React, {useState} from 'react'


export default function ClickCounterHook() {
    const initialValue=0;
    const[count, setCount]=useState(initialValue);
  
  return (
    <div>
        <p>count : {count}</p>
        <button onClick={()=>setCount(initialValue)}>reset</button>
        <button onClick={()=>setCount(  prevCount=>prevCount+1)}>increment</button>
        <button onClick={()=>setCount(  prevCount=>prevCount-1)}>decrement</button>
        <button onClick={() => setCount(prevCount=> prevCount+5)}>increment by 5</button>
    </div>
  )
}
