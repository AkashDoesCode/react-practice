import React from 'react'

function Button() {
    function handleClick(){
        alert("You clicked me");
    }
  return (
    <div>
        <div>Click below button</div>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Button