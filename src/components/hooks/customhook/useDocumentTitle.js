import React from 'react'
import useCount from './useCount'

function UseDocumentTitle() {
    const [count, increment,decrement,reset]=useCount(0, 10)
  return (
    <div>
        <div>{count}</div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default UseDocumentTitle