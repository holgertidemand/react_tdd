import { newId } from './index';

describe('newId heler', () => {
  const array = [ { id: 1 }, { id: 2 }, { id: 3 } ]

  it('should return the object with highest value', () => {
    expect(newId(array)).toEqual(4)
  })

  it('should return 0 if array is empty', () => {
    expect(newId([])).toEqual(1);
  });
});