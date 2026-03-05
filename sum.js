const sum = (...numbers) =>
  numbers.reduce((previous, currnet) => previous + currnet, 0);

module.exports = sum;