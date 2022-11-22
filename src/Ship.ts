export class Ship {
  public static shipLength: number;
  public static hits: boolean[];
  public static hit: () => void;

  constructor(shipLength: number) {
    Ship.shipLength = shipLength;
    Ship.hits = new Array(shipLength).fill(false);
  }

  hit(index: number) {
    Ship.hits[index] = true;
  }
}
