import React, { PureComponent } from "react";
import logRenderTime from "../hoc/log_render_time";

export class Detail extends PureComponent {
  //   UNSAFE_componentWillMount() {
  //     this.beginTime = new Date().getTime();
  //   }
  //   componentDidMount() {
  //     this.endTime = new Date().getTime();
  //     const interval = this.endTime - this.beginTime;
  //     console.log(`当前页面花费了${interval}ms渲染完成`);
  //   }
  render() {
    return (
      <div>
        <h2>Detail Page</h2>
        <ul>
          <li>详情列表1</li>
          <li>详情列表2</li>
          <li>详情列表3</li>
          <li>详情列表4</li>
          <li>详情列表5</li>
          <li>详情列表6</li>
          <li>详情列表7</li>
          <li>详情列表8</li>
          <li>详情列表9</li>
          <li>详情列表10</li>
        </ul>
      </div>
    );
  }
}

export default logRenderTime(Detail);
