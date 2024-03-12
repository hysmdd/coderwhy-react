const store = require("./store");

console.log(store.getState());

// 修改state中的数据，必须action
const nameAction = { type: "change_name", name: "actordex" };
store.dispatch(nameAction);

console.log(store.getState());

const nameAction2 = { type: "change_name", name: "coderqin" };
store.dispatch(nameAction2);

console.log(store.getState());

// 修改age
const ageAction = { type: "change_age", age: 19 };
store.dispatch(ageAction);

console.log(store.getState());
