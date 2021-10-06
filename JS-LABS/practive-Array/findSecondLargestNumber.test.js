import { findSecondLargestNumber } from './findSecondLargestNumber';

describe('findSecondLargestNumber()', () => {
    it('should return undefined when not an array or empty', () => {
        expect(findSecondLargestNumber([])).toBeUndefined();
        expect(findSecondLargestNumber([1])).toBeUndefined();
        expect(findSecondLargestNumber({})).toBeUndefined();
        expect(findSecondLargestNumber('')).toBeUndefined();
        expect(findSecondLargestNumber(true)).toBeUndefined();
        expect(findSecondLargestNumber(1)).toBeUndefined();
    });
    it('should return correct the second largest number ', () => {
        expect(findSecondLargestNumber([1, 2])).toBe(1);
        expect(findSecondLargestNumber([1, 2, 3, 4])).toBe(3);
    });
});
