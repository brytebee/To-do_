/**
 * @jest-environment jsdom
 */

import add from '../addItem.js';

jest.mock('../addItem');

describe('Add or Remove item', () => {
  test('Add an item to list', () => {
    expect(add().length).toBe(1);
  });
});