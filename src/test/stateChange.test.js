/**
 * @jest-environment jsdom
 */

import stateChange from '../stateChange.js';

jest.mock('../stateChange');

describe('Status change function', () => {
  test('Check list item when status changes', () => {
    expect(stateChange()).toBe(true);
  });
});