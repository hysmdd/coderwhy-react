import React, { Component } from 'react'
import './style.css'

export class TabControl extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentIndex: 0
        }
    }

    changeCurrentIndex(index) {
        this.setState({
            currentIndex: index
        })
        this.props.changeTabIndex(index)
    }
  render() {
    const { titles, itemType } = this.props
    const { currentIndex } = this.state

    return (
      <div className='tab-control'>
        {
            titles.map((item, index) => {
                return (
                    <div key={item} onClick={() => this.changeCurrentIndex(index)} className={`item ${index === currentIndex ? 'active' : ''}`}>
                        {/* <span className='text'>{item}</span> */}
                        {itemType(item)}
                    </div>
                )
            })
        }
      </div>
    )
  }
}

export default TabControl