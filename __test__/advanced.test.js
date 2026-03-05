
describe('Advanced Test Examples', () => {

  describe('String operations', () => {
    it('concatenation works', () => {
      const str1 = 'Hello';
      const str2 = ' World';
      expect(str1 + str2).toBe('Hello World');
    });

    it('string length', () => {
      const str = 'JavaScript';
      expect(str).toHaveLength(10);
    });
  });

  describe('Array operations', () => {
    const numbers = [1, 2, 3, 4, 5];

    it('array contains expected values', () => {
      expect(numbers).toEqual([1, 2, 3, 4, 5]);
    });

    it('array has correct length', () => {
      expect(numbers).toHaveLength(5);
    });

    it('array includes specific value', () => {
      expect(numbers).toContain(3);
    });
  });

  describe('Data type checks', () => {
    it('typeof checks', () => {
      expect(typeof 42).toBe('number');
      expect(typeof 'hello').toBe('string');
      expect(typeof true).toBe('boolean');
      expect(typeof []).toBe('object');
      expect(typeof {}).toBe('object');
      expect(typeof (() => {})).toBe('function');
    });

    it('constructor checks', () => {
      expect([]).toBeInstanceOf(Array);
      expect(new Date()).toBeInstanceOf(Date);
      expect(/test/).toBeInstanceOf(RegExp);
    });
  });

});
