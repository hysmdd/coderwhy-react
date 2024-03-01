import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './contexts/theme-context'
import UserContext from './contexts/user-context'
import Profile from './Profile'

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
        <UserContext.Provider value={{username: 'admin', password: '123456'}}>
            <ThemeContext.Provider value={{color: 'red', fontSize: 18}}>
                <Home {...info} />
            </ThemeContext.Provider>
        </UserContext.Provider>
        <Profile></Profile>
      </div>
    )
  }
}

export default App