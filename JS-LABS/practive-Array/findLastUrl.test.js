import { findLastUrl } from './findLastUrl';

describe('findLastUrl()', () => {
    it('should return undefined when not an array or empty', () => {
        expect(findLastUrl([])).toBeUndefined();
        expect(findLastUrl({})).toBeUndefined();
        expect(findLastUrl('')).toBeUndefined();
        expect(findLastUrl(true)).toBeUndefined();
        expect(findLastUrl(1)).toBeUndefined();
    });
    it('should return undefined when there is no matching url', () => {
        expect(findLastUrl(['https://ab.com', 'wss://easy.frontend'])).toBeUndefined();
    });
    it('should return correct the last url in the array', () => {
        expect(findLastUrl(['https://google.com', 'wss://chat.sample.com'])).toBe('wss://chat.sample.com');
    });
});
