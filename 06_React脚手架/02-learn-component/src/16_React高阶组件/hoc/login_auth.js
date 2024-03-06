function loginAuth(OriginComponent) {
  return (props) => {
    const token = localStorage.getItem("token");
    if (token) {
      return <OriginComponent {...props} token={token}></OriginComponent>;
    } else {
      return <h2>您当前暂未登录，请先登录</h2>;
    }
  };
}

export default loginAuth;
