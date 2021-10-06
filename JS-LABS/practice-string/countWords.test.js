import { countWords } from './countWords';

describe('countWords()', () => {
    it('should return 0 when string is empty', () => {
        expect(countWords('')).toBe(0);
    });
    it('should return 1 if has only one word', () => {
        expect(countWords('easy')).toBe(1);
    });
    it('should return correct if have more than 1 word', () => {
        expect(countWords('easy frontend')).toBe(2);
        expect(countWords('     easy     frontend')).toBe(2);
    });
});
