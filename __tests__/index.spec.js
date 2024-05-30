require('../src');

describe('api.basic test', () => {
  test('max by key is string', () => {
    const arr = [
      { name: 'apple', price: 10 },
      { name: 'banana', price: 5 },
      { name: 'orange', price: 15 }
    ];
    const result = nx.maxBy(arr, 'price');
    expect(result).toEqual({ name: 'orange', price: 15 });
  });

  test('max by key is function(some key is null)', () => {
    const arr = [
      { name: 'apple', price: 10 },
      { name: 'banana', price: 5 },
      { name: 'orange', price: 15 },
      { name: 'pear', price: null }
    ];
    const result = nx.maxBy(arr, (item) => item.price);
    expect(result).toEqual({ name: 'orange', price: 15 });
  });

  test('max key is dot path', () => {
    const arr = [
      { name: 'apple', price: { amount: 10, currency: 'USD' } },
      { name: 'banana', price: { amount: 5, currency: 'USD' } },
      { name: 'orange', price: { amount: 15, currency: 'USD' } }
    ];
    const result = nx.maxBy(arr, 'price.amount');
    expect(result).toEqual({ name: 'orange', price: { amount: 15, currency: 'USD' } });
  })

  test('max when key is not exist, result is null', () => {
    const arr = [
      { name: 'apple', price: 10 },
      { name: 'banana', price: 5 },
      { name: 'orange', price: 15 }
    ];
    const result = nx.maxBy(arr, 'color');
    expect(result).toBe(null)
  })
});
