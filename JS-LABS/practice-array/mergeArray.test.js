import { mergeArray } from './mergeArray';

describe('mergeArray()', () => {
    it('should return empty array if non of them are non-array', () => {
        expect(mergeArray({}, {})).toEqual([]);
        expect(mergeArray(1, '')).toEqual([]);
        expect(mergeArray(true, 1)).toEqual([]);
    });
    it('should return empty array if both are empty', () => {
        expect(mergeArray([], [])).toEqual([]);
    });
    it('should return another array if one is empty', () => {
        expect(mergeArray([], [1, 2, 3])).toEqual([1, 2, 3]);
        expect(mergeArray([1, 2, 3], [])).toEqual([1, 2, 3]);
    });
    it('should return correct array if both contain the value', () => {
        expect(mergeArray([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
});
