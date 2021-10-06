import { removeDuplicatedNumbers } from './removeDuplicatedNumbers';

describe('removeDuplicatedNumbers()', () => {
    it('should return empty array when not an array or empty', () => {
        expect(removeDuplicatedNumbers([])).toEqual([]);
        expect(removeDuplicatedNumbers({})).toEqual([]);
        expect(removeDuplicatedNumbers('')).toEqual([]);
        expect(removeDuplicatedNumbers(true)).toEqual([]);
        expect(removeDuplicatedNumbers(1)).toEqual([]);
    });
    it('should return input when there are no matching numbers', () => {
        expect(removeDuplicatedNumbers([1, 2, 3])).toEqual([1, 2, 3]);
    });
    it('should return correct array when a number occurs more than 1 times', () => {
        expect(removeDuplicatedNumbers([1, 1, 2, 3, 2])).toEqual([3]);
        expect(removeDuplicatedNumbers([1, 1])).toEqual([]);
    });
});
