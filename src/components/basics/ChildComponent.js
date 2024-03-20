import React from 'react'
import Button from './Button'

function ChildComponent(props) {
  return (
        <button onClick={()=>props.eventHandler('child')}>click</button>
  )
}

export default ChildComponent