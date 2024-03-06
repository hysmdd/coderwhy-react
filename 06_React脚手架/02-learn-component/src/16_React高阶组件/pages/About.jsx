import React, { PureComponent } from "react";
import enhanceUserInfo from "../hoc/enhance_props";

export class About extends PureComponent {
  render() {
    return (
      <div>
        About - {this.props.username} - {this.props.level}
      </div>
    );
  }
}

export default enhanceUserInfo(About);
