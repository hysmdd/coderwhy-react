import React, { PureComponent } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="nav">
            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
          </div>
          <hr />
        </div>
        <div className="container">
          {/* 映射关系： path => component */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
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
