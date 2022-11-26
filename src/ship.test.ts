import { beforeEach, describe, expect, test } from '@jest/globals';
import { Ship } from './Ship';

describe('sum module', () => {
  let ship: Ship;

  beforeEach(() => {
    ship = new Ship(5);
  });

  test('has the right length', () => {
    expect(ship.shipLength).toBe(5);
  });

  test('hits the right index', () => {
    ship.hit(4);
    expect(ship.hits).toContain(4);
  });

  test('ignores same spot hits', () => {
    ship.hit(3);
    ship.hit(3);
    expect(ship.hits.length).toBe(1);
  });

  test('sinks when hit on all indexes', () => {
    ship.hit(1);
    ship.hit(2);
    ship.hit(3);
    ship.hit(4);
    ship.hit(5);
    expect(ship.isSunk()).toBe(true);
  });
});
