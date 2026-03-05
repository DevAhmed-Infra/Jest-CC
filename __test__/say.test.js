const sayHello = require('../say');

test('returns Hello, John! when passed John', () => {
  expect(sayHello('John')).toBe('Hello, John!');
});

test('returns Hello, ! when passed empty string', () => {
  expect(sayHello('')).toBe('Hello, !');
});

test('returns Hello, Sarah! when passed Sarah', () => {
  expect(sayHello('Sarah')).toBe('Hello, Sarah!');
});
