import React, { PureComponent } from "react";
import { withRouter } from "../hoc";

export class HomePlayList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      playList: [
        { id: 339, name: "华语流行" },
        { id: 340, name: "古典音乐" },
        { id: 341, name: "摇滚音乐" },
      ],
    };
  }
  navigateTo(id) {
    const { navigate } = this.props.router;

    navigate("/detail/" + id);
  }
  render() {
    const { playList } = this.state;
    return (
      <div>
        <h1>HomePlayList</h1>
        <ul>
          {playList.map((item, index) => {
            return (
              <li key={item.id} onClick={(e) => this.navigateTo(item.id)}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(HomePlayList);
