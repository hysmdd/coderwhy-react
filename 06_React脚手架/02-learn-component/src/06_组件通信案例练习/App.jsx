import React, { Component } from 'react'
import TabControl from './TabControl/index'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        titles: ['流行', '新款', '精选'],
        tabIndex: 0
    }
  }

  changeTabIndex(tabIndex) {
    this.setState({tabIndex: tabIndex})
  }

  render() {

    const { titles, tabIndex } = this.state

    return (
      <div>
        <TabControl titles={titles} changeTab={(currentIndex) => this.changeTabIndex(currentIndex)}></TabControl>
        <h2>{titles[tabIndex]}</h2>
      </div>
    )
  }
}

export default App