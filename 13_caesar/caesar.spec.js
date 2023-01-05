const caesar = require('./caesar');

test('works with single letters', () => {
  expect(caesar('a', 1)).toBe('b');
});

test('works with no shift', () => {
  expect(caesar('a', 0)).toBe('a');
});
test('works with words', () => {
  expect(caesar('Aaa', 1)).toBe('Bbb');
});
test('works with phrases', () => {
  expect(caesar('Hello', 5)).toBe('Mjqqt');
});
test('works with phrases', () => {
  expect(caesar('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});

test('wraps', () => {
  expect(caesar('Z', 1)).toBe('A');
});

test('works with large shift factors', () => {
  expect(caesar('e', 75)).toBe('b');
});

test.skip('works with large shift factors', () => {
  expect(caesar('Hello, World!', 75)).toBe('Ebiil, Tloia!');
});

test.skip('works with negative shift', () => {
  expect(caesar('B', -1)).toBe('A');
});

test.skip('works with negative shift', () => {
  expect(caesar('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
});

test.skip('works with large negative shift factors', () => {
  expect(caesar('Hello, World!', -29)).toBe('Ebiil, Tloia!');
});
