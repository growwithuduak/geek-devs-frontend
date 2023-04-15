// Correct logic for the salaried employee
// Correct logic for the contract employee
// Correct logic for the commissioned employee
// Error handling for invalid employee type
// Error handling for invalid sales amount

const {
  computeEmployeeSalary,
  EmployeeType,
  EmployeeSalaryMap,
  ErrorMessages,
  validateEmployeeType,
  validateSalesPerMonth,
  computeAllTypeEmployeeSalary,
  computeSalariedEmployeeSalary,
  computeCommissionedEmployeeSalary,
  computeContractEmployeeSalary,
} = require('../salary-calculator');

//test case 1

const salesPerMonth = 80000;

test('salaried employee is to take home 150,000 as their salary', () => {
  const employeeSalary = computeEmployeeSalary(EmployeeType.SALARIED);
  const baseSalary = computeSalariedEmployeeSalary();
  expect(employeeSalary).toBe(baseSalary);
});

test('contract employee is to take home 4% of their total sales for a month  as their salary', () => {
  const employeeSalary = computeEmployeeSalary(
    EmployeeType.CONTRACT,
    salesPerMonth
  );
  const baseSalary = computeContractEmployeeSalary(salesPerMonth);
  expect(employeeSalary).toBe(baseSalary);
});

test('commissioned employee is to take home 80000 plus 8.5% commission of their total sales for a month  as their salary', () => {
  const employeeSalary = computeEmployeeSalary(
    EmployeeType.COMMISSIONED,
    salesPerMonth
  );
  const baseSalary = computeCommissionedEmployeeSalary(salesPerMonth);
  expect(employeeSalary).toBe(baseSalary);
});

test('check if employee type is invalid', () => {
  expect(() => {
    validateEmployeeType('invalid employee');
  }).toThrow(ErrorMessages.INVALID_EMPLOYEE_TYPE);
});

test('check if sales per month type is invalid', () => {
  expect(() => validateSalesPerMonth('5')).toThrow(
    ErrorMessages.INVALID_SALES_PER_MONTH
  );
});
