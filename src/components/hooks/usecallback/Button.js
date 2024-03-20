import React, { Children } from 'react'

function Button({handler, children}) {
    console.log(`increase ${children}`);
  return (
   
    <div>
        <button onClick={handler}>{children}</button>
    </div>
  )
}
export default React.memo(Button)