'use strict';

const EmployeeType = {
    COMMISSIONED: 'COMMISSIONED',
    CONTRACT: 'CONTRACT',
    SALARIED: 'SALARIED',
    //Add new type here
}


const EmployeeSalaryMap = {
    CONTRACT_RATE: 0.4,
    COMMISSIONED_BASE: 80000,
    COMMISSIONED_RATE: 0.085,
    SALARIED_BASE: 150000,
}


const ErrorMessage = {
    INVALID_EMPLOYEE_TYPE: 'Enter the approprite employee type input',
    STRING_VALUE: 'String input value is required for employee type argument',
    NUMBER_VALUE: 'Number greater than zero input value is required for sales per month argument',
    REQUIRED_TWO_ARGUMENTS: 'Two arguments required',
    REQUIRED_ONE_ARGUMENT: 'One Argument missing',
}


const stringValueChecker = (employeeType) => {
    if (typeof(employeeType) !== 'string') throw new Error (ErrorMessage.STRING_VALUE);
}


const numberValueChecker = (salesPerMonth) => {
    if (typeof(salesPerMonth) !== 'number' || salesPerMonth < 0) throw new Error (ErrorMessage.NUMBER_VALUE);
}


const passedArgumentChecker = (employeeType, salesPerMonth) => {
    if (employeeType===0) throw new Error(ErrorMessage.INVALID_EMPLOYEE_TYPE);
    if(salesPerMonth===0) return 0;
    if(salesPerMonth===null) throw new Error(ErrorMessage.NUMBER_VALUE);
    if((!employeeType && salesPerMonth) || (employeeType && !salesPerMonth)) throw new Error (ErrorMessage.REQUIRED_ONE_ARGUMENT);
    if(!employeeType && !salesPerMonth) throw new Error (ErrorMessage.REQUIRED_TWO_ARGUMENTS);
}


const computeAllSalaryTypes = (baseSalary, salesPerMonth, rate) => {
    return baseSalary + (salesPerMonth * rate);
}


const computeSalaried = (employeeType) => {
    try {
        stringValueChecker(employeeType);
        if (employeeType.toUpperCase() === EmployeeType.SALARIED) {
            return computeAllSalaryTypes(
                EmployeeSalaryMap.SALARIED_BASE, 
                0, 
                0,
            );
        };
        if (employeeType !== EmployeeType.SALARIED) throw new Error (ErrorMessage.INVALID_EMPLOYEE_TYPE);
    }
    catch(e) {
        console.error(e);
    }
}


const computeCommissioned = (employeeType, salesPerMonth) => {
    try {
        passedArgumentChecker(employeeType, salesPerMonth);
        stringValueChecker(employeeType);
        numberValueChecker(salesPerMonth);
        if (employeeType.toUpperCase() === EmployeeType.COMMISSIONED) {
            return computeAllSalaryTypes(
                EmployeeSalaryMap.COMMISSIONED_BASE, 
                salesPerMonth, 
                EmployeeSalaryMap.COMMISSIONED_RATE,
            );
        };
        if (employeeType !== EmployeeType.COMMISSIONED) throw new Error (ErrorMessage.INVALID_EMPLOYEE_TYPE);
    }
    catch(e) {
        console.error(e);
    }
}


const computeContract = (employeeType, salesPerMonth) => {
    try {
        passedArgumentChecker(employeeType, salesPerMonth);
        stringValueChecker(employeeType);
        numberValueChecker(salesPerMonth);
        if (employeeType.toUpperCase() === EmployeeType.CONTRACT) {
            return computeAllSalaryTypes(
                0,
                salesPerMonth, 
                EmployeeSalaryMap.CONTRACT_RATE,
            );
        };
        if (employeeType !== EmployeeType.COMMISSIONED) throw new Error (ErrorMessage.INVALID_EMPLOYEE_TYPE);
    }
    catch(e) {
        console.error(e);
    }
}


// Export objects and functions
module.exports = {
    EmployeeSalaryMap,
    ErrorMessage,
    stringValueChecker,
    numberValueChecker,
    passedArgumentChecker,
    computeAllSalaryTypes,
    computeSalaried,
    computeCommissioned,
    computeContract,
};


//USAGE
console.log(computeSalaried('SALARIED'));
console.log(computeCommissioned('COMMISSIONED', 10000));
console.log(computeContract('CONTRACT', 10000));
