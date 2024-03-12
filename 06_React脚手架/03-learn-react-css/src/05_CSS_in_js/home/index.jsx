import React, { PureComponent } from "react";
import { Button1, DangerButton, HomeWrapper, PrimaryButton } from "./style";

export class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <div className="top">
          <div className="banner"></div>
        </div>

        <Button1>普通按钮</Button1>
        <PrimaryButton>主要按钮</PrimaryButton>
        <DangerButton>危险按钮</DangerButton>
        <div className="bottom">
          <h2 className="header">演员列表</h2>
          <ul className="actor-list">
            <li className="actor">林默 - 邱泽</li>
            <li className="actor">ivy - 张钧甯</li>
            <li className="actor">小爱 - 邓恩熙</li>
            <li className="actor">kiko - 尚语贤</li>
          </ul>
        </div>
      </HomeWrapper>
    );
  }
}

export default Home;
