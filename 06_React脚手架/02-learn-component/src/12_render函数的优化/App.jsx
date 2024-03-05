import React, { PureComponent } from 'react'
import Home from './Home'
import Recommend from './Recommend'
import Profile from './Profile'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
        message: "终会与你同行",
        counter: 339
    }
  }

//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextState.message === this.state.message && this.state.counter === nextState.counter) {
//         return false
//     }
//     return true
//   }

  changeText() {
    this.setState({
        message: '浩瀚星空里，只剩你的背影'
    })
    // this.setState({
    //     message: '终会与你同行'
    // })
  }

  increase() {
    this.setState({
        counter: this.state.counter + 1
    })
  }

  render() {
    console.log("App render")
    const { message, counter } = this.state

    return (
      <div>
        <h2>App - {message} - {counter}</h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <button onClick={() => this.increase()}>counter + 1 </button>
        <Home message={message} />
        <Recommend counter={counter} />
        <Profile message={message} />
      </div>
    )
  }
}

export default App