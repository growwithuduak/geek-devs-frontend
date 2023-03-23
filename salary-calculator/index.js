const calculateEmployeeTakeHomeSalary = (employeeType, salesPerMonth) => {
  if (typeof(employeeType) !== 'string')
    return 'Employee type should be either SALARIED, COMMISSIONED or CONTRACT';
  if (isNaN(salesPerMonth) || salesPerMonth <= 0)
    return 'Sales Per Month should be a number greater than 0';
  if (
    employeeType !== 'SALARIED' &&
    employeeType !== 'COMMISSIONED' &&
    employeeType !== 'CONTRACT'
  )
    return 'Employee type should be either SALARIED, COMMISSIONED or CONTRACT';

  const commissionRate = 0.085;
  const contractRate = 0.4;
  const salariedEmployee = 150000;
  const commissionedEmployee = 80000 + commissionRate * salesPerMonth;
  const contractedEmployee = contractRate * salesPerMonth;

  return `Monthly pay is ₦${
    employeeType === 'SALARIED'
      ? salariedEmployee.toLocaleString()
      : employeeType === 'COMMISSIONED'
      ? commissionedEmployee.toLocaleString()
      : contractedEmployee.toLocaleString()
  }`;
};
