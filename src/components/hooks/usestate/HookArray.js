import React,{useState} from 'react'

export default function HookArray() {
    const[lists, setList]=useState([]);
    let a;
    const setData=(e)=>{
        a=e.target.value;
    }

    const addItem=(e)=>{
        e.preventDefault();
        setList([
            ...lists,
            {
                id : lists.length,
                value : a
            }
        ])
    }
    
  return (
    <React.Fragment>
        <form onSubmit={addItem}>
            <input type='number'  name='lists' onChange={setData} required/>
            <button type='submit'>submit</button>
        </form>

    <ul>
        {
            lists.map(list=><li key={list.id}>{list.value}</li>)
        }
    </ul>
    </React.Fragment>
   
  )
}
