import React, { useMemo, useState } from 'react'

export default function UseMemo() {
  const[count1,setCount1]=useState(0);
  const[count2,setCount2]=useState(0);

  const clickHandlerOne=()=>{
    setCount1(count1+1);
  };
  const clickHandlerTwo=()=>{
    setCount2(count2+1);
  };

 
  const isEven=useMemo(()=>{
    let i=0;
    while(i<2000000000) i++;
    return count1%2==0;
  },[count1])

  return (
    <div>
      <div> 
        <div>{count1}</div>
        <button onClick={clickHandlerOne}>increment</button>
        <span>{isEven? 'Even' : 'Odd'}</span>
      </div>
       <div>
        <div>{count2}</div>
        <button onClick={clickHandlerTwo}>increment</button>
       </div>
       
    </div>
  )
  
}