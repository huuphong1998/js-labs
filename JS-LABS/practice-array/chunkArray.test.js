import { chunkArray } from './chunkArray';

describe('chunkArray()', () => {
    it('should return empty array if invalid parameters', () => {
        expect(chunkArray([])).toEqual([]);
        expect(chunkArray({})).toEqual([]);
        expect(chunkArray([1, 2, 3], -1)).toEqual([]);
        expect(chunkArray([1, 2, 3], 0)).toEqual([]);
    });
    it('should return correct corresponding subarray', () => {
        expect(chunkArray([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
        expect(chunkArray([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
        expect(chunkArray([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
    });
});
