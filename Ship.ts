type ShipType = {
  one: number;
  two: number;
};

export class Ship {
  x: number;
  y: number;

  add(x: number, y: number) {
    return x + y;
  }
}
