import { findSumPair } from './findSumPair';

describe('findSumPair()', () => {
    it('should return empty array when not an array or empty', () => {
        expect(findSumPair([], 10)).toEqual([]);
        expect(findSumPair({})).toEqual([]);
        expect(findSumPair('')).toEqual([]);
        expect(findSumPair(true)).toEqual([]);
        expect(findSumPair(1)).toEqual([]);
    });
    it('should return empty array when no 2 numbers have a sum equal to targetSum', () => {
        expect(findSumPair([1, 2], 2)).toEqual([]);
    });
    it('should return correct array when there are 2 numbers have a sum is equal to targetSum', () => {
        expect(findSumPair([3, 2, 1], 5)).toEqual([2, 3]);
    });
});
