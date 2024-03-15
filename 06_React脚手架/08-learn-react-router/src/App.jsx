import React, { PureComponent } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./style.css";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import HomeRecommend from "./pages/HomeRecommend";
import HomeRanking from "./pages/HomeRanking";
import Category from "./pages/Category";
import Order from "./pages/Order";

export function App(props) {
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
  }
  return (
    <div className="app">
      <div className="header">
        header
        <div className="nav">
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/login">登录</Link>
          <button onClick={(e) => navigateTo("/category")}>分类</button>
          <span onClick={(e) => navigateTo("/order")}>订单</span>
        </div>
        <hr />
      </div>
      <div className="container">
        {/* 映射关系： path => component */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<Navigate to="/home/recommend" />} />
            <Route path="/home/recommend" element={<HomeRecommend />}></Route>
            <Route path="/home/ranking" element={<HomeRanking />}></Route>
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <div className="footer">
        <hr />
        Footer
      </div>
    </div>
  );
}

export default App;
