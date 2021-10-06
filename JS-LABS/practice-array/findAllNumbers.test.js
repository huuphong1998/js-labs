import { findAllNumbers } from './findAllNumbers';

describe('findAllNumbers()', () => {
    it('should return empty array if list is empty', () => {
        expect(findAllNumbers([])).toEqual([]);
        expect(findAllNumbers()).toEqual([]);
        expect(findAllNumbers({})).toEqual([]);
        expect(findAllNumbers('')).toEqual([]);
        expect(findAllNumbers(true)).toEqual([]);
    });
    it('should return empty array if list has no number starts with odd digit', () => {
        expect(findAllNumbers([2, 423, 6243, -24345])).toEqual([]);
    });
    it('should return correct list of numbers starting with odd digit', () => {
        expect(findAllNumbers([2, 123, -56, 789012])).toEqual([123, -56, 789012]);
    });
});
