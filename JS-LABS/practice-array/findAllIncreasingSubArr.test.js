import { findAllIncreasingSubArr } from './findAllIncreasingSubArr';

describe('findAllIncreasingSubArr()', () => {
    it('should return empty array when not an array or array empty', () => {
        expect(findAllIncreasingSubArr([])).toEqual([]);
        expect(findAllIncreasingSubArr([1])).toEqual([]);
        expect(findAllIncreasingSubArr({})).toEqual([]);
        expect(findAllIncreasingSubArr('')).toEqual([]);
        expect(findAllIncreasingSubArr(true)).toEqual([]);
        expect(findAllIncreasingSubArr(1)).toEqual([]);
    });
    it('should return empty array when no continuous incrementing numbers', () => {
        expect(findAllIncreasingSubArr([9, 7, 5, 3, 1])).toEqual([]);
    });
    it('should return correct sub array list if has incrementing numbers', () => {
        expect(findAllIncreasingSubArr([1, 2, 5, -4, 6, 8])).toEqual([
            [1, 2, 5],
            [-4, 6, 8],
        ]);
    });
});
