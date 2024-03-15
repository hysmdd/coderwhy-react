import { useNavigate } from "react-router-dom";

// 高阶组件
function withRouter(WrapperComponent) {
  // class newComponent extends PureComponent {
  //   render() {
  //     return <WrapperComponent {...this.props} />;
  //   }
  // }
  return function (props) {
    const navigate = useNavigate();

    const router = { navigate };

    return <WrapperComponent {...props} router={router} />;
  };
}

export default withRouter;
