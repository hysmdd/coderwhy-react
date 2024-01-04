import React from "react";

class HelloWorld extends React.Component {
    constructor() {
        super()

        this.state = {
            message: '你从未离去'
        }
    }

    render() {
        const {message} = this.state
        return (<div>
            <h2>{message}</h2>
        </div>)
    }
}

export default HelloWorld