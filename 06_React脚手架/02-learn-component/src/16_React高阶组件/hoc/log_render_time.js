import { PureComponent } from "react";

function logRenderTime(OriginComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.startTime = new Date().getTime();
    }
    componentDidMount() {
      this.endTime = new Date().getTime();
      const interval = this.endTime - this.startTime;
      console.log(`${OriginComponent.name}页面花费了${interval}ms后渲染完成`);
    }
    render() {
      return <OriginComponent {...origin}></OriginComponent>;
    }
  };
}

export default logRenderTime;
