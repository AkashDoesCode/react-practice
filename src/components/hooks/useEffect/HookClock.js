import React, { useEffect, useState } from 'react'

export default function HookClock() {
    const[hour,setHour]=useState(0);
    const[minute,setMinute]=useState(0);
    const[second,setSecond]=useState(0);

    const tick=()=>{
        if(second>58)
        {
            setSecond(0);
            if(minute > 58){
                setMinute(0);
                if(hour>22){
                    setHour(0);
                    setMinute(0);
                    setSecond(0);
                }
                else{
                    setHour(hour+1)
                }
            }
            else{
                setMinute(minute+1)
            }
        }
        else{
            setSecond(second+1);
        }
      
    }

    useEffect(()=>{
       const interval=setInterval(tick,1000);
       return()=>{
        clearInterval(interval);
       }
    },[second, minute, hour])
    
  return (
    <div>
        <span style={{padding : '2px'}}>{hour}</span>
        <span style={{padding : '2px'}}>{minute}</span>
        <span style={{padding : '2px'}}>{second}</span>
    </div>
  )
}
