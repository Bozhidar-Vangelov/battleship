import { beforeEach, describe, expect, test } from '@jest/globals';
import { Directions } from '../types';
import { GameBoard } from '../GameBoard';

describe('GameBoard module', () => {
  let gameBoard: GameBoard;

  beforeEach(() => {
    gameBoard = new GameBoard(20);
  });

  test('has the right length', () => {
    expect(gameBoard.size).toBe(20);
  });

  test('places the ship correctly', () => {
    gameBoard.placeShip(Directions.HORIZONTAL, 3, 4, 5);

    expect(gameBoard.board[3][4]).not.toBe(false);
  });
});
