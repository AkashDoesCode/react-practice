import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const params=useParams();
    const id=params.userId
  return (
    <div>User details of {id}</div>
  )
}

export default UserDetails