import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'
import axios from 'axios'

export class Main extends Component {

  constructor() {
    super()

    this.state = {
      banners: [],
      productList: []
    }
  }

  componentDidMount() {
    axios.get("http://codercba.com:8000/home/multidata").then(res => {
      const banners = res.data.data.banner.list
      const recommend = res.data.data.recommend.list
      console.log("banners", banners)
      console.log("recommend", recommend)
      this.setState({
        banners,
        productList: recommend
      })
    })
  }

  render() {
    const { banners, productList } = this.state

    return (
      <div>
        <div>Main</div>
        <MainBanner banners={banners} title="终会与你同行" />
        <MainBanner />
        <MainProductList productList={productList} />
      </div>
    )
  }
}

export default Main