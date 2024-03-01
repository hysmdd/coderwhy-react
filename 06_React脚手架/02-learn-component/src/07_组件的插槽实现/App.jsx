import React, { Component } from 'react'
import NavBar from './nav-bar'
import NavBar2 from './nav-bar2'

export class App extends Component {
  render() {
    return (
      <div>
        {/* 1. 使用children实现插槽 */}
        <NavBar>
            <button>返回</button>
            <h2>终会与你同行</h2>
            <i>搜索</i>
        </NavBar>
        {/* 使用props实现插槽 */}
        <NavBar2
          leftSlot={<button>返回2</button>}
          centerSlot={<h2>你从未离去</h2>}
          rightSlot={<i>搜索2</i>}
        />
      </div>
    )
  }
}

export default App