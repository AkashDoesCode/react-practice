import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate();
  return (
    <>
    <div>Home</div>
    <button onClick={()=>navigate('order')}>order</button>
    </>
  )
}

export default Home