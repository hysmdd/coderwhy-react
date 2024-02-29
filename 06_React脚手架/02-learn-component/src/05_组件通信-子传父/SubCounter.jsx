import React, { Component } from 'react'

export default class SubCounter extends Component {

  subCount(count) {
    console.log("sub", count)

    this.props.subClick(count)
  }

  render() {
    return (
      <div>
        <button onClick={e => this.subCount(-1)}>-1</button>
        <button onClick={e => this.subCount(-5)}>-5</button>
        <button onClick={e => this.subCount(-10)}>-10</button>
      </div>
    )
  }
}
