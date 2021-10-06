import { calcCartTotal } from './calcCartTotal';

describe('calcCartTotal()', () => {
    it('should return 0 when cart is empty or not an array', () => {
        expect(calcCartTotal([])).toBe(0);
        expect(calcCartTotal({})).toBe(0);
        expect(calcCartTotal('')).toBe(0);
        expect(calcCartTotal(true)).toBe(0);
        expect(calcCartTotal(1)).toBe(0);
    });
    it('should return correct amount of the cart', () => {
        const cartItemList = [
            { id: 1, product: { id: 1, price: 100000 }, quantity: 4 },
            { id: 2, product: { id: 2, price: 50000 }, quantity: 2 },
        ];
        expect(calcCartTotal(cartItemList)).toBe(500000);
    });
});
