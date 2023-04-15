const {
    validateEmployeeDataType,
    validateEmployeeType,
    validateSalesPerMonth,
    computeAllEmployeeTypeSalary,
    computeSalariedEmployeeSalary,
    computeCommissionedEmployeeSalary,
    computeContractEmployeeSalary,
    computeEmployeeSalary,
  } = require('../script.js');
  
  const employeeType = {
    SALARIED: 'SALARIED',
    COMMISSIONED: 'COMMISSIONED',
    CONTRACT: 'CONTRACT'
  };
  
  const employeeSalaryStructure = {
    salariedBaseSalary: 150000,
    commissionedBaseSalary: 80000,
    commissionRate: 0.085,
    contractRate: 0.4
  };
  
  const errorMessages = {
    invalidEmployeeType: "Please enter a valid employee type",
    invalidEmployeeDataType: "Employee type must not be a number",
    invalidSalesPerMonth: "Please enter a valid amount generated for the month."
  };
  
  describe('validateEmployeeDataType', () => {
    it('should throw an error when the employee type is not a string', () => {
      expect(() => {
        validateEmployeeDataType(1);
      }).toThrow(errorMessages.invalidEmployeeType);
    });
  
    it('should not throw an error when the employee type is a string', () => {
      expect(() => {
        validateEmployeeDataType('SALARIED');
      }).not.toThrow();
    });
  });
  
  describe('validateEmployeeType', () => {
    it('should throw an error when the employee type is not in the employeeType object', () => {
      expect(() => {
        validateEmployeeType('INVALID_TYPE');
      }).toThrow(errorMessages.invalidEmployeeDataType);
    });
  
    it('should not throw an error when the employee type is in the employeeType object', () => {
      expect(() => {
        validateEmployeeType('SALARIED');
      }).not.toThrow();
    });
  });
  
  describe('validateSalesPerMonth', () => {
    it('should throw an error when the sales per month is not a number', () => {
      expect(() => {
        validateSalesPerMonth('not a number');
      }).toThrow(errorMessages.invalidSalesPerMonth);
    });
  
    it('should throw an error when the sales per month is less than zero', () => {
      expect(() => {
        validateSalesPerMonth(-1);
      }).toThrow(errorMessages.invalidSalesPerMonth);
    });
  
    it('should not throw an error when the sales per month is a positive number', () => {
      expect(() => {
        validateSalesPerMonth(1000);
      }).not.toThrow();
    });
  });
  
  describe('computeAllEmployeeTypeSalary', () => {
    it('should return the correct salary for a salaried employee', () => {
      expect(computeAllEmployeeTypeSalary(employeeSalaryStructure.salariedBaseSalary, 0, 0))
        .toBe(employeeSalaryStructure.salariedBaseSalary);
    });
  
    it('should return the correct salary for a commissioned employee', () => {
      expect(computeAllEmployeeTypeSalary(employeeSalaryStructure.commissionedBaseSalary, 1000, employeeSalaryStructure.commissionRate))
        .toBeCloseTo(87200, 2);
    });
  
    it('should return the correct salary for a contract employee', () => {
      expect(computeAllEmployeeTypeSalary(0, 1000, employeeSalaryStructure.contractRate))
        .toBe(400);
    });
  });
  
  