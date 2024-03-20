import React, { Component } from 'react'

export class counter extends Component {
    constructor(props){
        super(props);
        this.state={count: 0};
    }

    handler=()=>{
        this.setState({count : this.state.count+1})
    }


  render() {
    return (
      <div>
        {this.props.children(this.state.count, this.handler)}
      </div>
    )
  }
}

export default counter