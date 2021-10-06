import { statisticsNumbers } from './statisticsNumbers';

describe('statisticsNumbers()', () => {
    it('should return empty object when not an array or empty', () => {
        expect(statisticsNumbers([])).toEqual({});
        expect(statisticsNumbers({})).toEqual({});
        expect(statisticsNumbers('')).toEqual({});
        expect(statisticsNumbers(true)).toEqual({});
        expect(statisticsNumbers(1)).toEqual({});
    });
    it('should return correct object the number of occurrences of the numbers in the array', () => {
        expect(statisticsNumbers([1, 1, 1, 2, 2, 3])).toEqual({
            1: 3,
            2: 2,
            3: 1,
        });
    });
});
