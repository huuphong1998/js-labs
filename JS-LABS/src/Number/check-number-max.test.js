import { convertHoursToSeconds, findMax, findMaxEven } from './check-number-max';

const SECONDS_PER_HOUR = 3600;
describe('convertHoursToSeconds()', () => {
    test('should return -1 when hours < 0', () => {
        expect(convertHoursToSeconds(-1)).toBe(-1);
    });
    test('should return 0 when hours = 0', () => {
        expect(convertHoursToSeconds(0)).toBe(0);
    });
    test('should return seconds when hours > 0', () => {
        expect(convertHoursToSeconds(2)).toBe(2 * SECONDS_PER_HOUR);
    });
});

describe('findMax()', () => {
    test('should return max when max is the largest number', () => {
        expect(findMax(4, 2, 3)).toBe(4);
    });
});

describe('findMaxEven()', () => {
    test('should return max when max is the largest even number', () => {
        expect(findMaxEven(1, 2, 4)).toBe(4);
    });
});
