import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Cell from './Cell';
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nRows: 5,
    nCols: 5,
    chanceLightStartsOn: 0.15,
  };
  constructor(props) {
    super(props);
    this.state = { hasWon: false, board: this.createBoard() };
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let y = 0; y < this.props.nRows; y++) {
      //generate a row based off nCols
      const newCol = Array.from({ length: this.props.nCols });
      for (let x = 0; x < newCol.length; x++) {
        //make it percentage chance for elements to be true vs false
        if (Math.random() < this.props.chanceLightStartsOn) {
          newCol[x] = true;
        } else {
          newCol[x] = false;
        }
      }
      board.push(newCol);
    }
    return board;
  }

  renderBoard() {
    //use state board in order to render Cells with info we need
    const renderedBoard = [];
    for (let y = 0; y < this.props.nRows; y++) {
      const newCol = Array.from({ length: this.props.nCols });
      for (let x = 0; x < newCol.length; x++) {
        //get the current boolean from state at given position
        const currentCellBool = this.state.board[y][x];
        newCol[x] = (
          <Cell
            isLit={currentCellBool}
            flipCellsAroundMe={this.flipCellsAround}
            id={`${y}-${x}`}
            key={uuidv4()}
          />
        );
      }
      renderedBoard.push(<tr key={uuidv4()}>{newCol}</tr>);
    }
    return renderedBoard;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { nCols, nRows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split('-').map(Number); //-> coord will be a string, then space delimited by -,
    //then new array will be numbered version of row and column  '2-3'

    (function flipCells(y, x) {
      // if these coord are actually on board, flip them
      /* LAYOUT    ( y - 1, x) 
        (y, x - 1) (  y , x  )  (y, x + 1 )
                   (y + 1, x ) */

      //top coord
      if (x >= 0 && x < nCols && y - 1 >= 0 && y - 1 < nRows) {
        board[y - 1][x] = !board[y - 1][x];
      }
      //right coord
      if (x + 1 >= 0 && x + 1 < nCols && y >= 0 && y < nRows) {
        board[y][x + 1] = !board[y][x + 1];
      }
      //center coord
      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        board[y][x] = !board[y][x];
      }
      //left coord
      if (x - 1 >= 0 && x - 1 < nCols && y >= 0 && y < nRows) {
        board[y][x - 1] = !board[y][x - 1];
      }
      //bottom coord
      if (x >= 0 && x < nCols && y + 1 >= 0 && y + 1 < nRows) {
        board[y + 1][x] = !board[y + 1][x];
      }
    })(y, x);
    this.setState({ board: board });

    // win when every cell is turned off
    for (let y = 0; y < nRows; y++) {
      for (let x = 0; x < nCols; x++) {
        //if any of the columns have a truthy value in it, break out since game hasn't been won
        if (board[y][x]) {
          return;
        }
      }
    }
    this.setState({ hasWon: true });
  }

  /** Render game board or winning message. */
  render() {
    const renderedBoard = this.renderBoard();
    // if the game is won, just show a winning msg & render nothing else
    // TODO
    return this.state.hasWon ? (
      <h1>NICE, YOU WON!</h1>
    ) : (
      <table>
        <tbody>{renderedBoard}</tbody>
      </table>
    );
    // make table board
    // TODO
  }
}

export default Board;
