import React, { Component } from 'react'

export class MainBanner extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    const { title, banners } = this.props
    console.log(banners)
    return (
      <div>
        <h2>标题：{title}</h2>
       <ul>
        {banners.map(banner => {
          return (<li key={banner}>{banner}</li>)
        })}
       </ul>
      </div>
    )
  }
}

export default MainBanner