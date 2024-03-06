import React, { PureComponent } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./style.css";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      actors: [
        { id: 1, name: "林默", actor: "邱泽", score: 88 },
        { id: 2, name: "ivy", actor: "张钧甯", score: 90.5 },
      ],
    };
  }
  addPeople() {
    const actors = [...this.state.actors];
    actors.push({
      id: new Date().getTime(),
      name: "小爱",
      actor: "邓恩熙",
      score: 92,
    });
    this.setState({ actors });
  }
  deletePeople(event, index) {
    const actors = [...this.state.actors];
    actors.splice(index, 1);
    this.setState({ actors });
  }
  render() {
    const { actors } = this.state;
    return (
      <div>
        <TransitionGroup component="ul">
          {actors.map((item, index) => {
            return (
              <CSSTransition key={item.id} classNames="dex" timeout={2000}>
                <li key={item.id}>
                  <span>
                    {item.name} - {item.actor} - {item.score}
                  </span>
                  <button
                    onClick={(event) => this.deletePeople(event, index)}
                    className="delete"
                  >
                    删除
                  </button>
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={() => this.addPeople()}>添加人员</button>
      </div>
    );
  }
}

export default App;
