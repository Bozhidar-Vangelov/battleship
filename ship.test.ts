import { describe, expect, test } from '@jest/globals';
import { Ship } from './Ship';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    const test = new Ship();
    expect(test.add(1, 2)).toBe(3);
  });
});
