import React, { Component } from "react";

class Board extends Component {
  state = {
    board: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
    player: true,
  };

  handleClick = (event) => {
    const newBoard = [...this.state.board];
    this.state.player
      ? (newBoard[event.target.value] = "🥦")
      : (newBoard[event.target.value] = "🦁");
    this.setState((currState) => {
      return { board: newBoard, player: !currState.player };
    });
  };

  render() {
    return (
      <ul>
        {this.state.board.map((square, i) => {
          return (
            <li key={i} value={i} onClick={this.handleClick}>
              {square}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Board;
