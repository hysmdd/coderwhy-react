import ThemeContext from "./theme-context";

function withTheme(OriginComponent) {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          return <OriginComponent {...props} {...value}></OriginComponent>;
        }}
      </ThemeContext.Consumer>
    );
  };
}

export default withTheme;
