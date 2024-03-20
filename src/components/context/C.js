import React, { Component } from 'react'
import { ContextCosumer } from './Context'

class C extends Component {
  render() {
    return (
     <ContextCosumer>
        {
            (name)=>{
                return <div>Hello {name}</div>
            }
        }
     </ContextCosumer>
    )
  }
}

export default C