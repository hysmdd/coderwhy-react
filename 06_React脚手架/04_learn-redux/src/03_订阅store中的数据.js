const store = require("./store");

const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化: ", store.getState());
});

// 修改state中的数据，必须action
store.dispatch({ type: "change_name", name: "actordex" });

store.dispatch({ type: "change_name", name: "coderqin" });
// 取消订阅
// unsubscribe();
// 修改age
store.dispatch({ type: "change_age", age: 19 });
