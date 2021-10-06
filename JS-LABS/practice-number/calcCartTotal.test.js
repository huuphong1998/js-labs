import { calcCartTotal } from './calcCartTotal';

describe('calcCartTotal()', () => {
    it('should return 0 if empty', () => {
        expect(calcCartTotal([])).toBe(0);
        expect(calcCartTotal({})).toBe(0);
        expect(calcCartTotal('')).toBe(0);
        expect(calcCartTotal(true)).toBe(0);
        expect(calcCartTotal(123)).toBe(0);
    });
    it('should return 0 if either price or quantity is zero', () => {
        const cartItemList = [
            { id: 1, product: { id: 1, price: 0 }, quantity: 1 },
            { id: 2, product: { id: 2, price: 100000 }, quantity: 0 },
        ];

        expect(calcCartTotal(cartItemList)).toBe(0);
    });
    it('should return correct total if price/quantity > 0', () => {
        const cartItemList = [
            { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
            { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
        ];

        expect(calcCartTotal(cartItemList)).toBe(250000);
    });
});
