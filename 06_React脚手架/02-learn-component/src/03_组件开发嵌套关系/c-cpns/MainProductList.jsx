import React, { Component } from 'react'

export class MainProductList extends Component {
  
  render() {
    const { productList } = this.props

    return (
      <div>
        <h2>购物车数据</h2>
        <ul>
            {
              productList.map(item => {
                return (<li key={item}><h3>{item}</h3></li>)
              })
            }
        </ul>
      </div>
    )
  }
}

export default MainProductList