import { findFirstEmail } from './findFirstEmail';

describe('findFirstEmail()', () => {
    it('should return undefined when not an array or empty', () => {
        expect(findFirstEmail([])).toBeUndefined();
        expect(findFirstEmail({})).toBeUndefined();
        expect(findFirstEmail('')).toBeUndefined();
        expect(findFirstEmail(true)).toBeUndefined();
        expect(findFirstEmail(1)).toBeUndefined();
    });
    it('should return undefined when email invalid', () => {
        expect(findFirstEmail(['abc@easy.frontend'])).toBeUndefined();
    });
    it('should return undefined when email valid', () => {
        expect(findFirstEmail(['abc@easy.frontend', 'abc@gmail.com'])).toBe('abc@gmail.com');
    });
});
