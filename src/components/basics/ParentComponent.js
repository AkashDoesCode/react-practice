import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    constructor(){
        super();
        this.state={
            mode:"parent"
        }
        this.clickHandler=this.clickHandler.bind(this);
    }


    clickHandler(param) {
        alert(`Hello ${this.state.mode} from ${param}`);
    }

  render() {
    return (
      <ChildComponent eventHandler={this.clickHandler}/>
    )
  }
}

export default ParentComponent