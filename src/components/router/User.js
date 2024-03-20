import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <>
    <div>User 1</div>
    <div>User 2</div>
    <div>User 3</div>
    <Link to='active'>users</Link>
    <Outlet />
    </>
  )
}

export default User