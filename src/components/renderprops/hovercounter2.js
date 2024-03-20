import React, { Component } from 'react'

export class hovercounter2 extends Component {
  
    render() {
        return (
          <div onMouseOver={this.props.handler}>hovered {this.props.count} times</div>
        )
      }
}

export default hovercounter2