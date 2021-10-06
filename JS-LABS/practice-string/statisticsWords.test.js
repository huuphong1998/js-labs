import { statisticsWordsV1, statisticsWordsV2 } from './statisticsWords';

describe('statisticsWordsV1()', () => {
    it('should return empty object in case str is empty', () => {
        expect(statisticsWordsV1('')).toEqual({});
    });
    it("should return corrrect statistics when str doesn't have redundant spaces", () => {
        expect(statisticsWordsV1('easy frontend is very easy')).toEqual({
            easy: 2,
            frontend: 1,
            is: 1,
            very: 1,
        });
    });
    it('should return corrrect statistics when str has have redundant spaces', () => {
        expect(statisticsWordsV1('     easy     frontend   is   very    easy    ')).toEqual({
            easy: 2,
            frontend: 1,
            is: 1,
            very: 1,
        });
    });
});

describe('statisticsWordsV2()', () => {
    it('should return empty object in case str is empty', () => {
        expect(statisticsWordsV2('')).toEqual({});
    });
    it("should return corrrect statistics when str doesn't have redundant spaces", () => {
        expect(statisticsWordsV2('easy frontend is very easy')).toEqual({
            easy: 2,
            frontend: 1,
            is: 1,
            very: 1,
        });
    });
    it('should return corrrect statistics when str has have redundant spaces', () => {
        expect(statisticsWordsV2('     easy     frontend   is   very    easy    ')).toEqual({
            easy: 2,
            frontend: 1,
            is: 1,
            very: 1,
        });
    });
});
