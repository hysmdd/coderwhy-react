import React, { PureComponent } from "react";
// import './Profile.css'
import profileStyle from "./Profile.module.css";

export class Profile extends PureComponent {
  render() {
    return (
      <div>
        <div className={profileStyle.section}>Profile Section</div>
      </div>
    );
  }
}

export default Profile;
