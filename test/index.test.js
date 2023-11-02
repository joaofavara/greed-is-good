const { greedIsGood } = require('../src');

describe('Greed Is Good', () => {
    test('if has one 5 on dice rool should return 50 points', () => {
        expect(greedIsGood(5)).toBe(50);
    });

    test('if has one 1 on dice rool should return 100 points', () => {
        expect(greedIsGood(1)).toBe(100);
    });
});
