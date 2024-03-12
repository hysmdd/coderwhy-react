const { createStore } = require("redux");

// 初始化数据
const initialState = {
  name: "dex",
  age: 18,
};

// 定义reducer函数：纯函数
// 两个参数
// 第1个参数：store中目前保存的store
// 第2个参数：
function reducer(state = initialState, action) {
  // 有数据更新的时候，返回一个新的state
  if (action.type === "change_name") {
    return { ...state, name: action.name };
  } else if (action.type === "change_age") {
    return { ...state, age: action.age };
  }
  // 返回之前的state
  return state;
}

// 创建的store
const store = createStore(reducer);

module.exports = store;
