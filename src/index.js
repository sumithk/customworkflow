require("./style.css");

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

class Board extends React.Component {
  renderSquare(i, position) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i, position)}
      />
    );
  }
  render() {
    let rows = [];
    let cells = [];
    let cellNumber = 0;
    for (let outerLoop = 0; outerLoop < 3; outerLoop++) {
      for (let innerLoop = 0; innerLoop < 3; innerLoop++) {
        cells.push(
          this.renderSquare(
            cellNumber,
            "col: " + outerLoop + " row: " + innerLoop
          )
        );
        cellNumber++;
      }
      rows.push(
        <div key={outerLoop + cellNumber} className="board-row">
          {cells}
        </div>
      );
      cells = [];
    }
    return <div>{rows}</div>;
  }
}
Board.propTypes = {
  squares: PropTypes.array,
  onClick: PropTypes.func.isRequired
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          positions: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }
  handleClick(i, position) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const positions = current.positions.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    positions[i] = {
      stepNumber: this.state.stepNumber + 1,
      position: position
    };
    this.setState({
      history: history.concat([
        {
          squares: squares,
          positions: positions
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      let posstion = "";
      step.positions.forEach(function(position) {
        if (position === null) {
          return false;
        } else if (position.stepNumber === move) {
          posstion = position.position;
          return false;
        }
      });
      const desc = move
        ? "Go to move #" + move + " position #" + posstion
        : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i, position) => this.handleClick(i, position)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
