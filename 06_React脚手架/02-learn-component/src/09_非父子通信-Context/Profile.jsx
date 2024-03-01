import React, { Component } from 'react'
import ThemeContext from './contexts/theme-context'

export class Profile extends Component {
  render() {
    console.log(this.context)
    return (
      <div>Profile</div>
    )
  }
}

Profile.contextType = ThemeContext

export default Profile