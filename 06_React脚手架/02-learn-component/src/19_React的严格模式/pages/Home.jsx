import React, { PureComponent } from "react";

export class Home extends PureComponent {
  //   UNSAFE_componentWillMount() {
  //     console.log("Home UNSAFE ComponentWillMount");
  //   }
  constructor() {
    super();

    console.log("Home Constructor");
  }
  componentDidMount() {
    console.log("Home ComponentDidMount");
    // console.log("Home refs：", this.refs.title);
  }
  render() {
    console.log("Home Render");
    return (
      <div>
        {/* <h2 ref="title">Home</h2> */}
        <h2>Home</h2>
      </div>
    );
  }
}

export default Home;
