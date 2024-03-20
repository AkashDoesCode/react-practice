import React, { Component } from 'react'
import EnhancedComponent from './NewComponent'

export class hovercounter extends Component {
  

  render() {
    return (
      <div onMouseOver={this.props.handler}>hovered {this.props.count} times</div>
    )
  }
}

export default EnhancedComponent(hovercounter,5)