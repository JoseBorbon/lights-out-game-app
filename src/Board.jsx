import React, { Component } from 'react';
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
    chanceLightStartsOn: 0.3,
  };
  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = { hasWon: false, board: this.createBoard() };
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < this.props.nRows; i++) {
      //generate a row based off nCols
      const newCol = Array.from({ length: this.props.nCols });
      for (let j = 0; j < newCol.length; j++) {
        //make it percentage chance for elements to be true vs false
        if (Math.random() < this.props.chanceLightStartsOn) {
          newCol[j] = true;
        } else {
          newCol[j] = false;
        }
      }
      board.push(newCol);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { nCols, nRows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split('-').map(Number); //-> coord will be a string, then space delimited by -,
    //then new array will be numbered version of row and column

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    this.setState({ board, hasWon: true });
  }

  /** Render game board or winning message. */

  render() {
    // if the game is won, just show a winning msg & render nothing else
    // TODO
    return this.state.hasWon ? 'NICE' : 'Sup';
    // make table board
    // TODO
  }
}

export default Board;
