import React, { PureComponent } from "react";

export class HomeRanking extends PureComponent {
  render() {
    return (
      <div>
        <h2>HomeRanking</h2>
        <h2>榜单数据</h2>
        <ul>
          <li>国语流行榜</li>
          <li>港澳台</li>
          <li>欧美榜</li>
          <li>抖音热门榜</li>
          <li>快手热门榜</li>
        </ul>
      </div>
    );
  }
}

export default HomeRanking;
