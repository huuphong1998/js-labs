import { getLanguageCodeFromURL } from './getLanguageCodeFromURL';

describe('getLanguageCodeFromURL()', () => {
    it('should return default language if url is falsy', () => {
        expect(getLanguageCodeFromURL('https://abc.com')).toBe('en');
        expect(getLanguageCodeFromURL('https://ezfrontend.com/abc')).toBe('en');
    });
    it('should return cn if url trailing slash', () => {
        expect(getLanguageCodeFromURL('https://ezfrontend.com/vi/')).toBe('cn');
    });
    it('should return correct language if url is truthy', () => {
        expect(getLanguageCodeFromURL('https://ezfrontend.com/en')).toBe('en');
        expect(getLanguageCodeFromURL('https://ezfrontend.com/vi')).toBe('vi');
    });
});
