import React, { PureComponent } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./style.css";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import HomeRecommend from "./pages/HomeRecommend";
import HomeRanking from "./pages/HomeRanking";

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          header
          <div className="nav">
            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
            <Link to="/login">登录</Link>
            {/* <NavLink
              to="/home"
              style={({ isActive }) => ({
                color: isActive ? "red" : "#000",
              })}
            >
              首页
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "red" : "#000",
              })}
            >
              关于
            </NavLink> */}
            {/* <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              首页
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              关于
            </NavLink> */}
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
}

export default App;
