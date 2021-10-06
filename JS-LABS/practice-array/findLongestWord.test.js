import { findLongestWord } from './findLongestWord';

describe('findLongestWord()', () => {
    it('should return empty string when not an array or empty', () => {
        expect(findLongestWord([])).toBe('');
        expect(findLongestWord({})).toBe('');
        expect(findLongestWord('')).toBe('');
        expect(findLongestWord(true)).toBe('');
        expect(findLongestWord(1)).toBe('');
    });
    it('should return empty string when can not find a word that meets the condition', () => {
        expect(findLongestWord(['nguyen', 'phongs'])).toBe('');
    });
    it('should return correct conditional word', () => {
        expect(findLongestWord(['super', 'cool'])).toBe('super');
        expect(findLongestWord(['super', 'super cool'])).toBe('super');
        expect(findLongestWord(['sup e', 'super'])).toBe('super');
    });
});
