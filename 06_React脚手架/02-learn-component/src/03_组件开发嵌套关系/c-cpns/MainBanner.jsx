import React, { Component } from 'react'

export class MainBanner extends Component {

  render() {
    const { banners, title } = this.props
    
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {
          banners.map(banner => {
            return (<li key={banner}><h3>{banner}</h3></li>)
          })
        }
        </ul>
      </div>
    )
  }
}

export default MainBanner