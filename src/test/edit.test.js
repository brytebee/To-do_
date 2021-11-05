/**
 * @jest-environment jsdom
 */

import editItem from '../edit.js';

jest.mock('../edit');

describe('Edit function', () => {
  test('Edit a list item', () => {
    expect(editItem()).toBe('some state...');
  });
});