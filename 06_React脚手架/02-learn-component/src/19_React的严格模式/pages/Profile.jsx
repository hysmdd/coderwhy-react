import React, { PureComponent } from "react";

export class Profile extends PureComponent {
  UNSAFE_componentWillMount() {
    console.log("Profile UNSAFE ComponentWillMount");
  }
  componentDidMount() {
    console.log("Profile ComponentDidMount");
    // console.log(this.refs.title);
  }
  render() {
    console.log("Profile render");
    return (
      <div>
        <h2 ref="title">Profile</h2>
      </div>
    );
  }
}

export default Profile;
