import {useState,useEffect} from 'react'

function useCount(initialValue=0, value) {
    const[count, setCount]=useState(initialValue);
    useEffect(()=>{
        document.title=`count ${count}`
    },[count])

    const increment=()=>{
        setCount(prevCount=>prevCount+value);
    }
    const decrement=()=>{
        setCount(prevCount=>prevCount-value);
    }
    const reset=()=>{
        setCount(initialValue);
    }

    return[count, increment, decrement, reset];
}

export default useCount