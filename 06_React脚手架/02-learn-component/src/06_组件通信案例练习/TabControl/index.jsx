import React, { Component } from 'react'
import './style.css'

export class TabControl extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  itemClick(index) {
    this.setState({
      currentIndex: index
    })
    this.props.changeTab(index)
  }
  
  render() {

    const { titles } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className='tabControl'>
        {titles.map((item, index) => {
            return (
                <div 
                  className={`item ${currentIndex === index ? 'active' : ''}`}
                  key={item}
                  onClick={e => this.itemClick(index)}
                >
                  <span className='text'>{item}</span>
                </div>
            )
        })}
      </div>
    )
  }
}

export default TabControl