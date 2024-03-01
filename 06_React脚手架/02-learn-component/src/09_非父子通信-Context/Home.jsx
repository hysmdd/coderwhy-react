import React, { Component } from 'react'
import HomeInfo from './HomeInfo';

export class Home extends Component {
  render() {
    const { name, age, info} = this.props;
    return (
      <div>
        <div>Home: {name} - {age}</div>
        <HomeInfo></HomeInfo>
      </div>
    )
  }
}

export default Home