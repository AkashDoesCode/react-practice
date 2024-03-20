import React, { Children } from 'react'

function Count({type, value}) {
    console.log(`called ${type}`)
  return (
    <div>
       <div>{type}-{value}</div>
    </div>
    
  )
}
export default React.memo(Count)