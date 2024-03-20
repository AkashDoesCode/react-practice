import React, { Component, useContext } from 'react'
import C from './C'
import UseContext from './Context';

class B extends Component {
    static contextType=UseContext;
  render() {
    return (
        <div>
            <p>mee mee {this.context}</p>
            <C />
        </div>
    )
  }
}

export default B