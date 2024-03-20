import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Product() {
    const navigate=useNavigate();
  return (
   <>
    <input type='search' />
    <div>
        <Link to='new'>new</Link>
    </div>
   
    <Outlet />
   </>
  )
}

export default Product