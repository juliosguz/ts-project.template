import { isItEven } from './index';

describe('Even or odd numbers', () => {
  it('It is even', () => {
    const n = isItEven(2);
    expect(n).toBe(true);
  });
  
  it('It is odd', () => {
    const n = isItEven(3);
    expect(n).toBe(false);
  });
});
