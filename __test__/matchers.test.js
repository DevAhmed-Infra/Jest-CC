
describe('Basic Matchers', () => {
  
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  it('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  it('null is falsy', () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
  });

  it('zero is falsy but not null', () => {
    const z = 0;
    expect(z).toBeFalsy();
    expect(z).not.toBeTruthy();
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
  });

  it('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);
  });

  it('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
  });

  it('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });

  it('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

});
