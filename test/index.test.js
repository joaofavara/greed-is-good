const { greedIsGood } = require('../src');

describe('Greed Is Good', () => {
    test('if has one 5 on dice rool should return 50 points', () => {
        expect(greedIsGood([2,3,5,4,6])).toBe(50);
    });

    test('if has 2 times 5 on dice rool should return 100 points', () => {
        expect(greedIsGood([5,5,2,3,4])).toBe(100);
    });

    test('if has 3 times 5 on dice rool should return 500 points', () => {
        expect(greedIsGood([5,5,5,2,3])).toBe(500);
    });

    test('if has 4 times 5 on dice rool should return 550 points', () => {
        expect(greedIsGood([5,5,5,5,2])).toBe(550);
    });

    test('if has 5 times 5 on dice rool should return 600 points', () => {
        expect(greedIsGood([5,5,5,5,5])).toBe(600);
    });

    test('if has one 1 on dice rool should return 100 points', () => {
        expect(greedIsGood([1,2,3,4,6])).toBe(100);
    });

    test('if has 2 times 1 on dice rool should return 200 points', () => {
        expect(greedIsGood([1,2,1,3,4])).toBe(200);
    });

    test('if has 3 times 1 on dice rool should return 1000 points', () => {
        expect(greedIsGood([1,1,1,2,3])).toBe(1000);
    });

    test('if has 4 times 1 on dice rool should return 1100 points', () => {
        expect(greedIsGood([1,1,1,1,2])).toBe(1100);
    });

    test('if has 5 times 1 on dice rool should return 1200 points', () => {
        expect(greedIsGood([1,1,1,1,1])).toBe(1200);
    });

    test('if has 3 times 2 on dice rool should return 200 points', () => {
        expect(greedIsGood([2,2,2,3,4])).toBe(200);
    });

    test('if has 3 times 3 on dice rool should return 300 points', () => {
        expect(greedIsGood([3,3,2,3,4])).toBe(300);
    });

    test('if has 3 times 4 on dice rool should return 400 points', () => {
        expect(greedIsGood([4,4,4,3,2])).toBe(400);
    });

    test('if has 3 times 6 on dice rool should return 600 points', () => {
        expect(greedIsGood([6,6,3,4,6])).toBe(600);
    });

    test('if has many time different values', () => {
        expect(greedIsGood([6,6,1,5,6])).toBe(750);
    });
});
