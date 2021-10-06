import { isStrongPassword } from './isStrongPassword';

describe('isStrongPassword()', () => {
    it('should return false when password is empty', () => {
        expect(isStrongPassword('')).toBe(false);
    });
    it('should return false when password < 8 characters', () => {
        expect(isStrongPassword('Nguyen*')).toBe(false);
    });
    it('should return false when password is not strong enough', () => {
        expect(isStrongPassword('super strong')).toBe(false);
    });
    it('should return true when password is strong enough', () => {
        expect(isStrongPassword('Sup3rC0o!')).toBe(true);
    });
});
