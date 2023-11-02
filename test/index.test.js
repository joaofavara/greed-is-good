const { dummy } = require('../src');

describe('Dummy Test', () => {
    test('should return string "dummy"', () => {
        expect(dummy()).toBe('dummy');
    });
});
