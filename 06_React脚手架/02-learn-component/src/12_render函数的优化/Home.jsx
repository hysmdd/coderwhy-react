import React, { Component } from 'react'

export class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            friends: []
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.message !== this.props.message) {
            return true
        }
        return false
    }

  render() {
    console.log("Home render")
    return (
      <h2>Home Page: {this.props.message}</h2>
    )
  }
}

export default Home