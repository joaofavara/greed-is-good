const { greedIsGood } = require('../src');

describe('Greed Is Good', () => {
    test('if has one 5 on dice rool should return 50 points', () => {
        expect(greedIsGood([5])).toBe(50);
    });

    test('if has 2 times 5 on dice rool should return 100 points', () => {
        expect(greedIsGood([5,5])).toBe(100);
    });

    test('if has 2 times 5 on dice rool should return 100 points', () => {
        expect(greedIsGood([5,5])).toBe(100);
    });

    test('if has 3 times 5 on dice rool should return 500 points', () => {
        expect(greedIsGood([5,5,5])).toBe(500);
    });

    test('if has 4 times 5 on dice rool should return 550 points', () => {
        expect(greedIsGood([5,5,5,5])).toBe(550);
    });

    test('if has 5 times 5 on dice rool should return 600 points', () => {
        expect(greedIsGood([5,5,5,5,5])).toBe(600);
    });

    test('if has one 1 on dice rool should return 100 points', () => {
        expect(greedIsGood([1])).toBe(100);
    });

    test('if has 3 times 2 on dice rool should return 200 points', () => {
        expect(greedIsGood([2,2,2])).toBe(200);
    });

    test('if has 3 times 3 on dice rool should return 300 points', () => {
        expect(greedIsGood([3,3,3])).toBe(300);
    });

    test('if has 3 times 4 on dice rool should return 400 points', () => {
        expect(greedIsGood([4,4,4])).toBe(400);
    });

    test('if has 3 times 6 on dice rool should return 600 points', () => {
        expect(greedIsGood([6,6,6])).toBe(600);
    });

    test('if has 3 times 1 on dice rool should return 1000 points', () => {
        expect(greedIsGood([1,1,1])).toBe(1000);
    });
});
