import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

export class Main extends Component {

  constructor() {
    super()

    this.state = {
      banners: ['兰亭序', '无名的人', '美丽的神话'],
      productList: ['iPhone 15 Pro Max', 'MacBook Pro M3 Pro', 'iPad Pro 2022']
    }
  }

  render() {
    const { banners, productList} = this.state

    return (
      <div>
        <div>Main</div>
        <MainBanner banners={banners} title="歌单数据Top3" />
        <MainProductList productList={productList} />
      </div>
    )
  }
}

export default Main