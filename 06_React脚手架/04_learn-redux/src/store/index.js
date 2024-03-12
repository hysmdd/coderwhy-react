const { createStore } = require("redux");

// 初始化数据
const initialState = {
  name: "dex",
  age: 18,
};

// 定义reducer函数：纯函数
function reducer() {
  return initialState;
}

// 创建的store
const store = createStore(reducer);

module.exports = store;
