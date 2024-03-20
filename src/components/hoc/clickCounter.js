import React, { Component } from 'react'
import Button from '../basics/Button';
import EnhancedComponent from './NewComponent';

class ClickCounter extends Component {
   

  render() {
    return (
      <button onClick={this.props.handler}>pressed {this.props.count} times </button>
    )
  }
}

export default EnhancedComponent(ClickCounter,10)