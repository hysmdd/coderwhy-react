import React, { Component } from 'react'
import ThemeContext from './contexts/theme-context'
import UserContext from './contexts/user-context'

export class HomeInfo extends Component {
  render() {
    const { color, fontSize } = this.context
    return (
      <div>
        <h2>HomeInfo: {color} - {fontSize}</h2>
        <div>
            <UserContext.Consumer>
                {
                    value => {
                        return <h2>Info User: {value.username}</h2>
                    }
                }
            </UserContext.Consumer>
        </div>
      </div>
    )
  }
}

HomeInfo.contextType = ThemeContext

export default HomeInfo