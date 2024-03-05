import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      isAgree: false,
      hobbies: [
        { name: "sing", value: "唱", checked: false },
        { name: "dance", value: "跳", checked: false },
        { name: "rap", value: "rap", checked: false },
        { name: "basketball", value: "打篮球", checked: false },
      ],
    };
  }
  handleSubmitClick(e) {
    e.preventDefault();
    // 获取所有的输入内容
    console.log("username: ", this.state.username);
    console.log("password: ", this.state.password);
    const hobbies = this.state.hobbies
      .filter((item) => item.checked === true)
      .map((item) => item.value);
    console.log("选中的爱好：", hobbies);
  }
  handleInputChange(e) {
    // console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleAgreeChange(e) {
    console.log(e.target.checked);
    this.setState({
      isAgree: e.target.checked,
    });
  }
  handleCheckChange(event, index) {
    const hobbies = [...this.state.hobbies];
    hobbies[index].checked = event.target.checked;
    this.setState({
      hobbies: hobbies,
    });
  }
  render() {
    const { username, password, isAgree, hobbies } = this.state;
    return (
      <div>
        <div>
          <form onSubmit={(e) => this.handleSubmitClick(e)}>
            <label htmlFor="username">
              用户：
              <input
                id="username"
                value={username}
                name="username"
                type="text"
                onChange={(e) => this.handleInputChange(e)}
              ></input>
            </label>
            <label htmlFor="password">
              密码：
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => this.handleInputChange(e)}
              />
            </label>
            {/* checkbox */}
            <div>
              <label htmlFor="agree">
                <input
                  id="agree"
                  checked={isAgree}
                  type="checkbox"
                  onChange={(e) => this.handleAgreeChange(e)}
                />
                同意协议
              </label>
            </div>
            {/* checkbox多选 */}
            <div>
              {/* 您的爱好： */}
              {/* <label htmlFor="sing">
                <input type="checkbox" id="sing" name="sing" />唱
              </label>
              <label htmlFor="dance">
                <input type="checkbox" id="dance" name="dance" />跳
              </label>
              <label htmlFor="rap">
                <input type="checkbox" id="rap" name="rap" />
                rap
              </label>
              <label htmlFor="basketball">
                <input type="checkbox" id="basketball" name="basketball" />
                打篮球
              </label> */}
              您的爱好：
              {hobbies.map((item, index) => {
                return (
                  <label key={item.name} htmlFor={item.name}>
                    <input
                      type="checkbox"
                      id={item.name}
                      name={item.name}
                      checked={item.checked}
                      onChange={(event) => this.handleCheckChange(event, index)}
                    />
                    {item.value}
                  </label>
                );
              })}
            </div>
            <div>
              <button type="submit">提交</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
