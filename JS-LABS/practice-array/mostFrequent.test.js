import { mostFrequent } from './mostFrequent';

describe('mostFrequent()', () => {
    it('should return undefined if not an array or empty', () => {
        expect(mostFrequent([])).toBeUndefined();
        expect(mostFrequent(true)).toBeUndefined();
        expect(mostFrequent({})).toBeUndefined();
        expect(mostFrequent(1)).toBeUndefined();
        expect(mostFrequent('')).toBeUndefined();
    });

    it('should return correct most frequent number', () => {
        expect(mostFrequent([1])).toBe(1);
        expect(mostFrequent([1, 2])).toBe(1);
        expect(mostFrequent([1, 2, 2])).toBe(2);
        expect(mostFrequent([1, 2, 2, 1, 1])).toBe(1);
    });
});
