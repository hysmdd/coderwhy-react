const store = require("./store");
const { changeAgeAction } = require("./store/actionCreators");

// store.subscribe(() => {
//   console.log("数据发生变化: ", store.getState());
// });

store.dispatch(changeAgeAction(25));
