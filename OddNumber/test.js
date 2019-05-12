const findOdd = require('./OddNumber');

test('findOdd function is defined', () => {
    expect(typeof findOdd).toEqual('function');
});

test('findOdd of [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]',  () => {
    expect(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])).toEqual(5);
});

test('findOdd of [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]',  () => {
    expect(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).toEqual(-1);
});

test('findOdd of [10]',  () => {
    expect(findOdd([10])).toEqual(10);
});

test('findOdd of [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]',  () => {
    expect(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])).toEqual(10);
});

test('findOdd of [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]',  () => {
    expect(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])).toEqual(1);
});