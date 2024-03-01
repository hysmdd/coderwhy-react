import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './contexts/theme-context'

export class App extends Component {
  constructor() {
    super()

    this.state = {
        info: {
            name: '终会与你同行',
            age: 18
        }
    }
  }

  render() {
    const { info } = this.state
    return (
      <div>
        <h2>App</h2>
        {/* <Home name='coderqin' age={18}></Home>
        <Home name={info.name} age={info.age}></Home>
        <Home {...info} /> */}
        <ThemeContext.Provider value={{gender: 'female', age: 18}}>
            <Home {...info} />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App