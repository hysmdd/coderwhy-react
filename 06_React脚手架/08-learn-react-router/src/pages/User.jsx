import React, { PureComponent } from "react";
import { withRouter } from "../hoc";

export class User extends PureComponent {
  render() {
    const router = this.props.router;
    const { query } = router;
    return (
      <div>
        <h1>User</h1>
        <h2>name: {query.name}</h2>
        <h2>age: {query.age}</h2>
      </div>
    );
  }
}

export default withRouter(User);
