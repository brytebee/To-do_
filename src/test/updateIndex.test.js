/**
 * @jest-environment jsdom
 */

 import updateIndex from '../updateIndex.js';

jest.mock('../updateIndex');

describe('Index update function', () => {
  test('Update the index of list when one item is deleted', () => {
    expect(updateIndex()).toEqual([1, 2]);
  });
});