import { describe, expect, test } from '@jest/globals';
import { Ship } from './Ship';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    const test = new Ship(1, 2);
    expect(test.add()).toBe(3);
  });
});
