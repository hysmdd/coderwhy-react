import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(339);
  const [message, setMessage] = useState("Hello World");

  useEffect(() => {
    console.log("修改标题");
  }, [count]);
  useEffect(() => {
    console.log("监听redux中的数据变化");
    return () => {};
  }, []);
  useEffect(() => {
    console.log("监听eventBus中的dex事件");
    return () => {};
  }, []);
  useEffect(() => {
    console.log("发送网络请求，获取服务器数据");
  }, []);
  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>{count}(+1)</button>
      <button onClick={(e) => setMessage("终会与你同行")}>
        {message}(修改文本)
      </button>
    </div>
  );
});

export default App;
