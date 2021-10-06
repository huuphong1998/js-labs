import { findAllDecreasingSubArr } from './findAllDecreasingSubArr';

describe('findAllDecreasingSubArr()', () => {
    it('should return empty array when not an array or empty', () => {
        expect(findAllDecreasingSubArr([])).toEqual([]);
        expect(findAllDecreasingSubArr([3, 2])).toEqual([]);
        expect(findAllDecreasingSubArr({})).toEqual([]);
        expect(findAllDecreasingSubArr('')).toEqual([]);
        expect(findAllDecreasingSubArr(true)).toEqual([]);
        expect(findAllDecreasingSubArr(1)).toEqual([]);
    });
    it('should return empty array when no continuous decrementing numbers', () => {
        expect(findAllDecreasingSubArr([1, 2, 3, 4, 5, 6])).toEqual([]);
    });
    it('should return correct sub array list if has decrementing numbers', () => {
        expect(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20])).toEqual([[3, 2, 1]]);
    });
});
