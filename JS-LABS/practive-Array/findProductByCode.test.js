import { findProductByCode } from './findProductByCode';

describe('findProductByCode()', () => {
    it('should return -1 when not an array or empty', () => {
        expect(findProductByCode([], 'ip01')).toBe(-1);
        expect(findProductByCode({}, 'ip01')).toBe(-1);
        expect(findProductByCode('', 'ip01')).toBe(-1);
        expect(findProductByCode(true, 'ip01')).toBe(-1);
        expect(findProductByCode(1, 'ip01')).toBe(-1);
    });
    it('should return -1 when the product index could not be found', () => {
        const productList = [
            { id: 1, code: 'ip01', name: 'Iphone 16' },
            { id: 2, code: 'ip02', name: 'Iphone 16 Promax' },
        ];

        expect(findProductByCode(productList, 'ip03')).toBe(-1);
    });
    it('should return correct index of the product', () => {
        const productList = [
            { id: 1, code: 'ip01', name: 'Iphone 16' },
            { id: 2, code: 'ip02', name: 'Iphone 16 Promax' },
        ];

        expect(findProductByCode(productList, 'ip01')).toBe(0);
    });
});
