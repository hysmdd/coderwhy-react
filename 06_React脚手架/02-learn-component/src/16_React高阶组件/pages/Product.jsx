import React, { PureComponent } from "react";
import ThemeContext from "../context/theme-context";
import withTheme from "../context/with_theme";

// export class Product extends PureComponent {
//   render() {
//     return (
//       <div>
//         <ThemeContext.Consumer>
//           {(value) => {
//             return (
//               <h2>
//                 Product: {value.color} - {value.size}
//               </h2>
//             );
//           }}
//         </ThemeContext.Consumer>
//       </div>
//     );
//   }
// }

// export default Product;

export class Product extends PureComponent {
  render() {
    const { color, size } = this.props;
    return (
      <h2>
        Product: {color} - {size}
      </h2>
    );
  }
}

export default withTheme(Product);
