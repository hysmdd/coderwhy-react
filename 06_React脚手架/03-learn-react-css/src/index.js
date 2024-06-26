import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

// import App from "./01_内联样式的css/App";
// import App from "./02_普通css的写法/App";
// import App from "./03_CSS_Modules/App";
// import App from "./04_Less编写方式/App";
// import App from "./05_CSS_in_js/App";
import App from "./06_classnames库/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={{ color: "#ff6700", size: "50px" }}>
    <App />
  </ThemeProvider>
);

// const name = "coderdex";
// const age = 18;
// const str = `my name is ${name}, age is ${age}`;
// console.log(str);

// function foo(...args) {
//   console.log(args);
// }

// foo("coderdex", 18, "chongqing");

// foo`my name is ${name}, age is ${age}`;
