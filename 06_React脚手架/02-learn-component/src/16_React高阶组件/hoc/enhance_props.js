import { PureComponent } from "react";

// 定义组件：给一些需要特殊数据的组件，注入props
function enhanceUserInfo(OriginComponent) {
  class NewComponent extends PureComponent {
    constructor() {
      super();

      this.state = {
        userInfo: {
          username: "dex",
          level: 99,
        },
      };
    }
    render() {
      const { userInfo } = this.state;
      return <OriginComponent {...this.props} {...userInfo} />;
    }
  }
  return NewComponent;
}

export default enhanceUserInfo;
