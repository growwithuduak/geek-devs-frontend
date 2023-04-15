const EMPLOYEE_TYPE = {
    SALARIED: 'SALARIED',
    COMMISSIONED: 'COMMISSIONED',
    CONTRACT: 'CONTRACT'
  };
  
  const EMPLOYEE_SALARY_STRUCTURE = {
    SALARIED_BASE_SALARY: 150000,
    COMMISSIONED_BASE_SALARY: 80000,
    COMMISSION_RATE: 0.085, 
    CONTRACT_RATE: 0.4
  };
  
  const ERROR_MESSAGES = {
    INVALID_EMPLOYEE_TYPE: "Please enter a valid employee type",
    INVALID_EMPLOYEE_DATA_TYPE: "Employee type must not be a number",
    INVALID_SALES_PER_MONTH: "Generated amount must be a number"
  };
  
  const validateEmployeeDataType = employeeType => {
    if (typeof employeeType !== 'string') {
      throw new Error(ERROR_MESSAGES.INVALID_EMPLOYEE_TYPE);
    }
  };
  
  const validateEmployeeType = employeeType => {
    if (!(employeeType in EMPLOYEE_TYPE)) {
      throw new Error(ERROR_MESSAGES.INVALID_EMPLOYEE_DATA_TYPE);
    }
  };
  
  const validateSalesPerMonth = salesPerMonth => {
    if (typeof salesPerMonth !== 'number' || salesPerMonth < 0) {
      throw new Error(ERROR_MESSAGES.INVALID_SALES_PER_MONTH);
    }
  };
  
  const computeAllEmployeeTypeSalary = (baseSalary, commission, salesPerMonth) =>
    baseSalary + (commission * salesPerMonth);
  
  const computeSalariedEmployeeSalary = () => 
    computeAllEmployeeTypeSalary(EMPLOYEE_SALARY_STRUCTURE.SALARIED_BASE_SALARY, 0, 0);
  
  const computeCommissionedEmployeeSalary = salesPerMonth => {
    validateSalesPerMonth(salesPerMonth);
    return computeAllEmployeeTypeSalary(
      EMPLOYEE_SALARY_STRUCTURE.COMMISSIONED_BASE_SALARY, 
      salesPerMonth, 
      EMPLOYEE_SALARY_STRUCTURE.COMMISSION_RATE
    );
  };
  
  const computeContractEmployeeSalary = salesPerMonth => {
    validateSalesPerMonth(salesPerMonth);
    return computeAllEmployeeTypeSalary(
      0, 
      salesPerMonth, 
      EMPLOYEE_SALARY_STRUCTURE.CONTRACT_RATE
    );
  };
  
  const computeEmployeeSalary = (employeeType, salesPerMonth) => {
    validateEmployeeDataType(employeeType);
    validateEmployeeType(employeeType);
  
    if (employeeType === EMPLOYEE_TYPE.SALARIED) {
      return computeSalariedEmployeeSalary();
    }
  
    if (employeeType === EMPLOYEE_TYPE.COMMISSIONED) {
      return computeCommissionedEmployeeSalary(salesPerMonth);
    }
  
    if (employeeType === EMPLOYEE_TYPE.CONTRACT) {
      return computeContractEmployeeSalary(salesPerMonth);
    }
  
    return 0;
  };
  

  module.exports = {
    validateEmployeeDataType,
    validateEmployeeType,
    validateSalesPerMonth,
    computeAllEmployeeTypeSalary,
    computeSalariedEmployeeSalary,
    computeCommissionedEmployeeSalary,
    computeContractEmployeeSalary,
    computeEmployeeSalary,
  }