 const {
  employeeTypes,
  errorMessages,
  employeeTypeValidation,
  salesPerMonthValidation,
  calculateSalariedEmployeeSalary,
  calculateCommissionedEmployeeSalary,
  calculateContractEmployeeSalary,
  calculateEmployeeSalary
} = require("../calculateEmployeeSalary");


test("it calculates the correct salary for a salaried employee", () => {
  const salary = calculateEmployeeSalary(employeeTypes.SALARIED);
  const expectedSalary = calculateSalariedEmployeeSalary();
  expect(salary).toEqual(expectedSalary);
});

test("it calculates the correct salary for a commissioned employee", () => {
  const salesPerMonth = 100000;
  const salary = calculateEmployeeSalary(employeeTypes.COMMISSIONED, salesPerMonth);
  const expectedSalary = calculateCommissionedEmployeeSalary(salesPerMonth);
  expect(salary).toEqual(expectedSalary);
});

test("it calculates the correct salary for a contract  employee", () => {
  const salesPerMonth = 100000
  const salary = calculateEmployeeSalary(employeeTypes.CONTRACT, salesPerMonth);
  const expectedSalary = calculateContractEmployeeSalary(salesPerMonth);
  expect(salary).toEqual(expectedSalary);
});

test("it throws an error for invalid employee type", () => {
  expect(() => employeeTypeValidation("invalid-employee")).toThrow(
    errorMessages.invalid_employee_type
  );
});

test("it throws an error for invalid sales-per-month", () => {
  expect(() => salesPerMonthValidation(-2)).toThrow(
    errorMessages.invalid_salesPerMonth
  );
});