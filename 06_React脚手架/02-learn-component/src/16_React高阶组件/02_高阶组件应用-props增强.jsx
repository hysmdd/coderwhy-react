import React, { PureComponent } from "react";
import enhanceUserInfo from "./hoc/enhance_props";
import About from "./pages/About";

const Home = enhanceUserInfo(function (props) {
  return (
    <h1>
      Home: {props.username} - {props.level} - {props.actors}
    </h1>
  );
});

const Profile = enhanceUserInfo(function (props) {
  return (
    <h1>
      Profile: {props.username} - {props.level}
    </h1>
  );
});

const HelloFriend = enhanceUserInfo(function (props) {
  return (
    <h1>
      HelloFriend - {props.username} - {props.level}
    </h1>
  );
});

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home actors={["邱泽", "张钧甯"]} />
        <Profile />
        <HelloFriend />

        <About />
      </div>
    );
  }
}

export default App;
