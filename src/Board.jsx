import React, { Component } from "react";

class Board extends Component {
  state = {
    board: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
    player1: [],
    player2: [],
    player1Turn: true,
    gameOver: false,
  };
  isGameOver = () => {
    const winConditions = {
      row1: [0, 1, 2],
      row2: [3, 4, 5],
      row3: [6, 7, 8],
      col1: [0, 3, 6],
      col2: [1, 4, 7],
      col3: [2, 5, 8],
      dia1: [0, 4, 8],
      dia2: [2, 4, 6],
    };
    for (let win in winConditions) {
      if (this.state.player1Turn) {
        // console.log(winConditions[win], this.state.player1);
        const isWinner = winConditions[win].every((element) =>
          this.state.player1.includes(element)
        );
       return isWinner ? this.setState({gameOver:true}): null
        // check player1 array contains every value from winConditions[win]
        // if it does change gameOver in state to true
        // set winner value
      }
    }
  };

  handleClick = (event) => {
    const newBoard = [...this.state.board];
    let newPlayer = [];

    this.setState((currState) => {
      if (this.state.player1Turn) {
        newPlayer = [...currState.player1, event.target.value];
        newBoard[event.target.value] = "🥦";
        return {
          board: newBoard,
          player1Turn: !currState.player1Turn,
          player1: newPlayer,
        };
      } else {
        newPlayer = [...currState.player2, event.target.value];
        newBoard[event.target.value] = "🦁";
        
        return {
          board: newBoard,
          player1Turn: !currState.player1Turn,
          player2: newPlayer,
        };
      }
    });
    this.isGameOver();
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
