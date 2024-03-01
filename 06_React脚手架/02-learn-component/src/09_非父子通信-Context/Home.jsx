import React, { Component } from 'react'

export class Home extends Component {
  render() {
    const { name, age, info} = this.props;
    return (
      <div>
        <div>Home: {name} - {age}</div>
      </div>
    )
  }
}

export default Home