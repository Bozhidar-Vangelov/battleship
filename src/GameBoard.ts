import { Directions } from './types';
import { Ship } from './Ship';

export class GameBoard {
  public board: Ship[][] | false[][];
  public size: number;

  constructor(size: number) {
    this.board = [];
    this.size = size;
    this.createBoard();
  }

  public createBoard() {
    for (let i = 0; i < this.size; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.size; j++) {
        this.board[i][j] = false;
      }
    }
  }

  public placeShip(
    direction: Directions,
    row: number,
    col: number,
    shipLength: number
  ) {
    if (this.board[row][col] instanceof Ship) {
      return "Ship can't be placed there";
    }

    const ship = new Ship(shipLength);

    if (direction === Directions.VERTICAL) {
      for (let i = 0; i < ship.shipLength; i++) {
        this.board[row + i][col] = ship;
      }
    } else {
      for (let i = 0; i < ship.shipLength; i++) {
        this.board[row][col + i] = ship;
      }
    }

    return true;
  }
}
