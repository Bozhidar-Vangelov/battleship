export class Ship {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    (this.x = x), (this.y = y);
  }

  add() {
    return this.x + this.y;
  }
}
