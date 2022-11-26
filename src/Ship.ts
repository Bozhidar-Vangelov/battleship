export class Ship {
  public shipLength: number;
  public hits: number[];

  constructor(shipLength: number) {
    this.shipLength = shipLength;
    this.hits = [];
  }

  hit(location: number) {
    if (
      this.hits.includes(location) ||
      location < 0 ||
      location > this.shipLength
    ) {
      return;
    }
    this.hits.push(location);
  }

  isSunk() {
    return this.shipLength === this.hits.length;
  }
}
