import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(339);
  useEffect(() => {
    console.log("监听redux中的数据变化，监听eventBus中的dex事件");
    return () => {
      console.log("取消监听redux中的数据变化，取消监听eventBus中的dex事件");
    };
  });
  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>{count}(+1)</button>
    </div>
  );
});

export default App;
