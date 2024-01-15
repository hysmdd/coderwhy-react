import { Component } from "react";
import HelloWorld from "./HelloWorld";

class App extends Component {

    constructor() {
        super()

        this.state = {
            isShowHelloWorld: true
        }
    }

    switchShowHelloWorld() {
        this.setState({
            isShowHelloWorld: !this.state.isShowHelloWorld
        })
    }

    render() {
        const { isShowHelloWorld } = this.state;
        return (
            <div>
                <h1>终会与你同行</h1>
                <button onClick={e => this.switchShowHelloWorld()}>切换</button>
                { isShowHelloWorld && <HelloWorld />}
                {/* <HelloWorld /> */}
            </div>
        )
    }
}

export default App