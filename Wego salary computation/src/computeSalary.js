const EMPLOYEE_TYPE = {
    SALARIED: "SALARIED",
    CONTRACT: "CONTRACT",
    COMMISSIONED: "COMMISSIONED"
}

const EMPLOYEE_SALARY_INFO = {
    COMMISSIONED_BASE_SALARY: 80000,
    COMMISSIONED_RATE: 0.085,
    CONTRACT_RATE: 0.4,
    SALARIED_BASE_SALARY: 150000
}

const ERROR_MESSAGES = {
    EMPLOYEE_TYPE_ERROR: "You have not entered the required employee type",
    SALES_PER_MONTH_ERROR: "Sales per month must be a number greater than zero"
}

const computeAllEmployeeTypeSalary = (baseSalary, rate, salesPerMonth) => {
    return baseSalary + (rate * salesPerMonth)
}

const computeSalariedEmployee = () => {
    return computeAllEmployeeTypeSalary(EMPLOYEE_TYPE.SALARIED, 0, 0);
}

const computeCommissionedEmployee = (salesPerMonth) => {
    validateSalesPerMonth(salesPerMonth)
    return computeAllEmployeeTypeSalary(EMPLOYEE_SALARY_INFO.COMMISSIONED_BASE_SALARY, EMPLOYEE_SALARY_INFO.COMMISSIONED_RATE, salesPerMonth)
}

const computeContractEmployee = (salesPerMonth) => {
    validateSalesPerMonth(salesPerMonth)
    return computeAllEmployeeTypeSalary(0, EMPLOYEE_SALARY_INFO.CONTRACT_RATE, salesPerMonth)
}


const computeEmployeeSalary = (employeeType, salesPerMonth) => {

    validateEmployeeType(employeeType);

    if (employeeType === EMPLOYEE_TYPE.SALARIED) {
        return computeSalariedEmployee(salesPerMonth);
    }

    if (employeeType === EMPLOYEE_TYPE.COMMISSIONED) {
        return computeCommissionedEmployee(salesPerMonth);
    }

    if (employeeType === EMPLOYEE_TYPE.CONTRACT) {
        return computeContractEmployee(salesPerMonth);
    }

    return 0;
}

const validateEmployeeType = (employeeType) => {
    if (employeeType !== EMPLOYEE_TYPE[employeeType]) {
        throw new Error (ERROR_MESSAGES.EMPLOYEE_TYPE_ERROR)
    }
}

const validateSalesPerMonth = (salesPerMonth) => {
    if (salesPerMonth < 0 || typeof(salesPerMonth) === "number") {
        throw new Error (ERROR_MESSAGES.SALES_PER_MONTH_ERROR)
    }
}
