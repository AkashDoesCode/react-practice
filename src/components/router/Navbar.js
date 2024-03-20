import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='product'>Product</NavLink>
        </nav>
  )
}

export default Navbar