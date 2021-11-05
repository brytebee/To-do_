/**
 * @jest-environment jsdom
 */

import removeItem from '../delete.js';

jest.mock('../delete');

describe('Add or Remove item', () => {
  test('Remove an item from list', () => {
    expect(removeItem().length).toBe(0);
  });
});