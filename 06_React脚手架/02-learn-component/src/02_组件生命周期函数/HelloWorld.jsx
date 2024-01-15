import React from "react";

class HelloWorld extends React.Component {
    // 1. 执行constructor函数
    constructor() {
        console.log("HelloWorld constructor");
        super()

        this.state = {
            message: "你从未离去"
        }
    }

    changeText() {
        this.setState({
            message: "终会与你同行"
        })
    }

    // 2. 执行render函数
    render() {
        console.log("HelloWorld render");
        const { message } = this.state
        return (
            <div>
                <h2>{message}</h2>
                <p>{message}，对吗？</p>
                <button onClick={e => this.changeText()}>切换文本</button>
            </div>
        )
    }
    // 3. 组件被渲染到DOM；被挂载到DOM
    componentDidMount() {
        console.log("HelloWorld componentDidMount");
    }
    // 4. 组件的DOM更新完成；DOM发生更新
    componentDidUpdate() {
        console.log("HelloWorld componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("HelloWorld componentWillUnmount")
    }
}

export default HelloWorld