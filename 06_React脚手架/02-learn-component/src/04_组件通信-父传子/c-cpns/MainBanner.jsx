import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MainBanner extends Component {

  // static defaultProps = {
  //   banners: [],
  //   title: "默认标题"
  // }
  
  render() {
    const { title, banners } = this.props
    console.log(banners)
    return (
      <div className='banner'>
        <h2>标题：{title}</h2>
       <ul>
        {banners.map(banner => {
          return (<li key={banner.title}>{banner.title}</li>)
        })}
       </ul>
      </div>
    )
  }
}

MainBanner.propTypes = {
  banners: PropTypes.array,
  title: PropTypes.string,
}

MainBanner.defaultProps = {
  banners: [],
  title: '默认标题'
}

export default MainBanner