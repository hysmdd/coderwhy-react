import React, { Component } from 'react'

export class MainProductList extends Component {

  render() {
    const { productList } = this.props
    return (
      <div>
        <h2>这是商品列表</h2>
        <ul>
          {productList.map(product => {
            return (<li key={product.title}>{product.title}</li>)
          })}
        </ul>
      </div>
    )
  }
}

export default MainProductList