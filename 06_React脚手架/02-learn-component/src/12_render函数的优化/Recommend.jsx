import React, { PureComponent } from 'react'

export class Recommend extends PureComponent {
    // shouldComponentUpdate(nextProps) {
    //     if (this.props.counter !== nextProps.counter) {
    //         return true;
    //     }
    //     return false
    // }
  render() {
    console.log("Recommend render")
    return (
      <h2>Recommend Page: {this.props.counter}</h2>
    )
  }
}

export default Recommend