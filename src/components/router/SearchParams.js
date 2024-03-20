import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function SearchParams() {
    const[searchParams, setParams]=useSearchParams();
    const ActiveUser=searchParams.get('filter');
  return (
    <div>
        <button onClick={()=>setParams({filter :'active'})}>Active</button>
        <button onClick={()=>setParams({})}>All</button>
        {
            ActiveUser? <h4>active users</h4> :<h4>all users</h4>
        }
    </div>
  )
}

export default SearchParams