import React, { Component } from 'react'
import './style.css'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        message: '终会与你同行',
        counter: 339
    }
  }
  changeText() {
    // setState的更多用法
    // 1.基本使用
    // this.setState({
    //     message: '浩瀚星空里，只剩你的背影'
    // })

    // setState可以传入一个回调函数
    // 好处一：可以在回调函数中编写新的state逻辑
    // 好处二：当前的回调函数会将之前的state和props传递进来
    // this.setState((state, props) => {
    //     // 编写新的state逻辑
    //     // 可以获取之前的state和props值
    //     console.log(this.state.message, this.props)
    //     return {
    //         message: "浩瀚星空里，只剩你的背影"
    //     }
    // })

    // setState在React的事件处理中是一个异步调用
    // this.setState({
    //     message: '浩瀚星空里，只剩你的背影'
    // })
    // console.log("-------------------------", this.state.message)
    this.setState({
        message: '浩瀚星空里，只剩你的背影'
    }, () => {
        console.log("+++++++++++++++++++++++++", this.state.message)
    })
    console.log("-------------------------", this.state.message)
  }
  increase() {
    this.setState({
        counter: this.state.counter + 1
    })
  }
  render() {
    const { message, counter } = this.state
    return (
      <div>
        <button onClick={() => this.changeText()}>修改文本</button>
        <h2>消息内容：{message}</h2>
        <button onClick={() => this.increase()}>counter + 1</button>
        <h2>当前计数：{counter}</h2>
      </div>
    )
  }
}

export default App