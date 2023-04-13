'use strict';

const AllExports = require("../computeSalary.js");


//Arguments validation tests
describe('validate parameter types', () => {
    let employeeType="";
    let salesPerMonth=123;

    test('passed argument checker is called with correct arguments', () => {
        const mockPassedArguments = jest.fn();

        mockPassedArguments(employeeType, salesPerMonth);
        expect(mockPassedArguments).toHaveBeenCalledWith(expect.any(String), expect.any(Number));
      });
    
    test('employeeType argument is string type', () => {
        const mockStringValueChecker = jest.fn();

        mockStringValueChecker(employeeType);
        expect(mockStringValueChecker.mock.calls[0][0]).not.toBeNull();
        expect(mockStringValueChecker.mock.calls[0][0]).not.toBeUndefined();
        expect(mockStringValueChecker).toHaveBeenCalledWith(expect.any(String));
      });
    
    test('salesPerMonth argument is Number type', () => {
        const mockNumberValueChecker = jest.fn();

        mockNumberValueChecker(salesPerMonth);
        expect(mockNumberValueChecker.mock.calls[0][0]).not.toBeNull();
        expect(mockNumberValueChecker.mock.calls[0][0]).not.toBeUndefined();
        expect(mockNumberValueChecker.mock.calls[0][0]).toBeGreaterThanOrEqual(0);
        expect(mockNumberValueChecker).toHaveBeenCalledWith(expect.any(Number));    
      });
});


//Logic tests for functions 
describe('validata all compute salary functions', () => {

    test("logic for salaried employee", () => {
        let employeeType = "SALARIED";
        expect(AllExports.computeSalaried(employeeType)).toEqual(AllExports.EmployeeSalaryMap.SALARIED_BASE);
    });

    test("logic for commissioned employee", () => {
        let employeeType = "COMMISSIONED";
        let salesPerMonth = 10000;
        expect(AllExports.computeCommissioned(employeeType, salesPerMonth)).toEqual(80850);
    });

    test("logic for contract employee", () => {
        let employeeType = "CONTRACT";
        let salesPerMonth = 10000;
        expect(AllExports.computeContract(employeeType, salesPerMonth)).toEqual(4000);
    });
});
