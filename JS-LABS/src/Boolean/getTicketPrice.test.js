import { getTicketPrice } from './getTicketPrice';

describe('getTicketPrice()', () => {
    test('should return -1 when age <= 0', () => {
        expect(getTicketPrice(0)).toBe(-1);
    });
    test('should return -1 when age > 125', () => {
        expect(getTicketPrice(126)).toBe(-1);
    });
    test('should return 0 when age < 6', () => {
        expect(getTicketPrice(5)).toBe(0);
    });
    test('should return 0 when age >= 70', () => {
        expect(getTicketPrice(70)).toBe(0);
    });
    test('should return 0 when age in [6, 12]', () => {
        for (let i = 6; i < 13; i++) {
            expect(getTicketPrice(i)).toBe(20000);
        }
    });
    test('should return 0 when age >= 70', () => {
        for (let i = 13; i < 70; i++) {
            expect(getTicketPrice(i)).toBe(50000);
        }
    });
});
