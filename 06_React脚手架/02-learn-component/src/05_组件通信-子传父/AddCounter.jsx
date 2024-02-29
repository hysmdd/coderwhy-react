import React, { Component } from 'react'

export default class AddCount extends Component {

  addCount(count) {
    console.log("count: ", count)

    this.props.addClick(count)

  }

  render() {
    return (
      <div>
        <button onClick={e => this.addCount(1)}>+1</button>
        <button onClick={e => this.addCount(5)}>+5</button>
        <button onClick={e => this.addCount(10)}>+10</button>
      </div>
    )
  }
}
