import { filterProducts } from './filterProducts';

describe('filterProducts()', () => {
    it('should return empty array if productList is empty', () => {
        const productList = [
            { id: 1, price: 10000 },
            { id: 2, price: 50000 },
            { id: 3, price: 70000 },
        ];

        expect(filterProducts([])).toEqual([]);
        expect(filterProducts({})).toEqual([]);
        expect(filterProducts('')).toEqual([]);
        expect(filterProducts(true)).toEqual([]);
        expect(filterProducts(productList)).toEqual([]);
    });
    it('should return correct list array when products having price > 100000', () => {
        const productList = [
            { id: 1, price: 100000 },
            { id: 2, price: 150000 },
            { id: 3, price: 270000 },
        ];
        expect(filterProducts(productList)).toEqual([
            { id: 2, price: 150000 },
            { id: 3, price: 270000 },
        ]);
    });
});
