import React, { Component } from 'react'

export class UseRefs extends Component {
    constructor(){
        super();
        this.myref=React.createRef();
        this.state={name : ""};
    }
    componentDidMount(){
        this.myref.current.focus();
    }
    clickHandler=()=>{
        this.setState({name:this.myref.current.value});
        console.log(this.myref.current.value);
    }
  render() {
    return (
    <React.Fragment>
         <input type='text' ref={this.myref} />
         <button onClick={this.clickHandler}>click</button>
         <span>{this.state.name}</span>
    </React.Fragment>
     
    
    )
  }
}

export default UseRefs