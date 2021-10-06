import { findFirstIPhone } from './findFirstIPhone';

describe('findFirstIPhone()', () => {
    it('should return undefined when not an array or empty', () => {
        expect(findFirstIPhone([])).toBeUndefined();
        expect(findFirstIPhone({})).toBeUndefined();
        expect(findFirstIPhone('')).toBeUndefined();
        expect(findFirstIPhone(true)).toBeUndefined();
        expect(findFirstIPhone(1)).toBeUndefined();
    });
    it('should return undefined when there is no first product whose name starts with iphone', () => {
        const productList = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Nokia' },
            { id: 3, name: 'IPad' },
        ];
        expect(findFirstIPhone(productList)).toBeUndefined();
    });
    it('should return correct the first product whose name starts with iphone', () => {
        const productList = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'IPHONE X' },
            { id: 3, name: 'iphone 12 Pro' },
        ];
        expect(findFirstIPhone(productList)).toEqual({ id: 2, name: 'IPHONE X' });
    });
});
