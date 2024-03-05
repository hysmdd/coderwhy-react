import React, { PureComponent } from "react";
import "./style.css";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      actors: [
        { id: 1, name: "林默", gender: "male", actor: "邱泽", score: 82 },
        { id: 2, name: "ivy", gender: "female", actor: "张钧甯", score: 83.5 },
      ],
    };
  }

  addActor() {
    const actor = {
      id: 3,
      name: "小爱",
      gender: "female",
      actor: "邓恩熙",
      score: 79,
    };
    const actors = [...this.state.actors];
    actors.push(actor);
    this.setState({
      actors: actors,
    });
  }

  render() {
    const { actors } = this.state;
    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>序号</th>
              <th>人物名</th>
              <th>性别</th>
              <th>演员名</th>
              <th>热力值</th>
              <th>操作</th>
            </tr>
          </thead>
          {actors.map((actor, index) => {
            return (
              <tbody key={index}>
                <tr key={actor.id}>
                  <td>{actor.id}</td>
                  <td>{actor.name}</td>
                  <td>{actor.gender === "male" ? "男" : "女"}</td>
                  <td>{actor.actor}</td>
                  <td>{actor.score}</td>
                  <td>
                    <button>投票</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <button onClick={() => this.addActor()} className="add-btn">
          添加人物
        </button>
      </div>
    );
  }
}

export default App;
