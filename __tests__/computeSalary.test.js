const computeTakeHome = require('../computeSalary');

test('computeTakeHome for SALARIED employee', () => {
  const result = computeTakeHome('SALARIED');
  expect(result).toBe(150000);
});

test('computeTakeHome for COMMISSIONED employee with zero sales amount', () => {
    const result = computeTakeHome('COMMISSIONED', 0);
    expect(result).toBe(80000);
});

test('computeTakeHome for COMMISSIONED employee with positive sales amount', () => {
  const result = computeTakeHome('COMMISSIONED', 500);
  expect(result).toBe(80042.5); 
});

test('computeTakeHome for CONTRACT employee with positive sales amount', () => {
  const result = computeTakeHome('CONTRACT', 500);
  expect(result).toBe(200); 
});

test('computeTakeHome for CONTRACT employee with zero sales amount', () => {
  const result = computeTakeHome('CONTRACT', 0);
  expect(result).toBe(0);
});

test('tests to validate employeeType', () => {
  expect(() => {
    computeTakeHome('INVALID_EMPLOYEETYPE');
  }).toThrow('Invalid input. employeeType can either be SALARIED, COMMISSIONED, or CONTRACTED.');
});

test('validates salesPerMonth >= 0', () => {
  expect(() => {
    computeTakeHome('COMMISSIONED', -500);
  }).toThrow('Invalid sales amount. salesPerMonth must be a positive integer.');
});
