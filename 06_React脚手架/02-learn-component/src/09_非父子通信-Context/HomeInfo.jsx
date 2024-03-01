import React, { Component } from 'react'
import ThemeContext from './contexts/theme-context'

export class HomeInfo extends Component {
  render() {
    const { gender, age } = this.context
    return (
      <div>
        <div>HomeInfo</div>
        <h2>HomeInfo: {gender} - {age}</h2>
      </div>
    )
  }
}

HomeInfo.contextType = ThemeContext

export default HomeInfo