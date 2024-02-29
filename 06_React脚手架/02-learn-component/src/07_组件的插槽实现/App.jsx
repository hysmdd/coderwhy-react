import React, { Component } from 'react'
import NavBar from './nav-bar'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
            <button>返回</button>
            <h2>终会与你同行</h2>
            <i>搜索</i>
        </NavBar>
      </div>
    )
  }
}

export default App