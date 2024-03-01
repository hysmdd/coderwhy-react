import React, { Component } from 'react'
import TabControl from './tab-control'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        titles: ['流行', '新款', '精选'],
        tabIndex: 0
    }
  }
  changeIndex(index) {
    this.setState({
        tabIndex: index
    })
  }
  getTableItem(item) {
    if (item === '流行') {
        return <button>{item}</button>
    } else if (item === '新款') {
        return <span>{item}</span>
    } else {
        return <i>{item}</i>
    }
  }
  render() {
    const { titles, tabIndex } = this.state
    return (
      <div>
        <TabControl 
            titles={titles}
            changeTabIndex={(index) => this.changeIndex(index)}
            itemType={(item) => this.getTableItem(item)}
        ></TabControl>
        <h2>{titles[tabIndex]}</h2>
      </div>
    )
  }
}

export default App