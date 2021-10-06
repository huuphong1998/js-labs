import { getTaxiCountV1, getTaxiCountV2 } from './gọi-taxi';

describe('getTaxiCountV1()', () => {
    test('should return 0 when passengersCount <= 0', () => {
        expect(getTaxiCountV1(0)).toBe(0);
    });
    test('should return correct taxi count <= 0', () => {
        expect(getTaxiCountV1(8)).toBe(2);
    });
});
describe('getTaxiCountV2()', () => {
    test('should return 0 when passengersCount <= 0', () => {
        expect(getTaxiCountV2(0)).toBe(0);
    });
    test('should return correct taxi count <= 0', () => {
        expect(getTaxiCountV2(8)).toBe(2);
    });
});
