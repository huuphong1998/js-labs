import { uniqueLetters } from './remove-duplicated-letters';

describe('uniqueLetters()', () => {
    it('should return empty when input empty', () => {
        expect(uniqueLetters('')).toBe('');
    });
    it('should return input when characters input do not appear twice', () => {
        expect(uniqueLetters('abc')).toBe('abc');
    });
    it('should return correct when characters input appear 2 or more times', () => {
        expect(uniqueLetters('easy frontend')).toBe('asy frotd');
        expect(uniqueLetters('aabccddeff')).toBe('be');
    });
});
