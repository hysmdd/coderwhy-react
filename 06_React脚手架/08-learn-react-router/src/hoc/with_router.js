import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

// 高阶组件
function withRouter(WrapperComponent) {
  // class newComponent extends PureComponent {
  //   render() {
  //     return <WrapperComponent {...this.props} />;
  //   }
  // }
  return function (props) {
    // 导航
    const navigate = useNavigate();
    // 动态路由的参数： /detail/:id
    const params = useParams();
    // 查询字符串的参数： /user?name=dex&age=18
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const query = Object.fromEntries(searchParams);

    const router = { navigate, params, location, query };

    return <WrapperComponent {...props} router={router} />;
  };
}

export default withRouter;
