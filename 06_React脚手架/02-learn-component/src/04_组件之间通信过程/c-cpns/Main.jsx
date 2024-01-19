import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

export class Main extends Component {

  constructor() {
    super()

    this.state = {
      banners: ['新歌曲', '新MV', '新歌单'],
      productList: ['推荐商品', '热门商品', '流行商品']
    }
  }

  render() {
    const { banners, productList } = this.state
    return (
      <div>
        <div>Main</div>
        <MainBanner banners={banners} title="终会与你同行" />
        <MainProductList productList={productList} />
      </div>
    )
  }
}

export default Main