import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count';
import Button from './Button';

export default function Callback() {

    const[age,setAge]=useState(0);
    const[salary,setSalary]=useState(0);

    const increaseAge=useCallback(()=>{
        setAge(age+1);
    },[age])
    const increaseSalary=useCallback(()=>{
        setSalary(salary+1);
    },[salary])

  return (
    <div>
        <Title />
        <Count type="age" value={age} />
        <Button handler={increaseAge}>increment age</Button>
        <Count type="salary" value={salary} />
        <Button  handler={increaseSalary} >increment salary</Button>
    </div>
  )
}
