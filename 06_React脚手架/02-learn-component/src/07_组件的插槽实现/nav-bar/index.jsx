import React, { Component } from 'react'
import './style.css'
import PropTypes from 'prop-types'

export class NavBar extends Component {
  render() {
    const { children } = this.props

    return (
      <div className='nav-bar'>
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    )
  }
}

NavBar.propTypes = {
  children: PropTypes.array
}

export default NavBar