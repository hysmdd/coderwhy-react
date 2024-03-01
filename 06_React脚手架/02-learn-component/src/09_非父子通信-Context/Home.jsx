import React, { Component } from 'react'
import HomeInfo from './HomeInfo';
import HomeBanner from './HomeBanner';

export class Home extends Component {
  render() {
    const { name, age, info} = this.props;
    return (
      <div>
        <div>Home: {name} - {age}</div>
        <HomeInfo></HomeInfo>
        <HomeBanner></HomeBanner>
      </div>
    )
  }
}

export default Home