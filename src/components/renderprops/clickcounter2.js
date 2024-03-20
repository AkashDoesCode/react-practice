import React, { Component } from 'react'

export class clickcounter2 extends Component {
    render() {
        return (
          <button onClick={this.props.handler}>pressed {this.props.count} times </button>
        )
      }
}

export default clickcounter2