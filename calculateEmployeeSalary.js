const employeeTypes = {SALARIED : 'SALARIED', COMMISSIONED : 'COMMISSIONED',CONTRACT : 'CONTRACT'}

const employeeSalaryParameters = {
    BASE_SALARIED: 150000,
    BASE_COMMISSIONED: 80000,
    PERCENTAGE_COMMISIONED: 0.085,
    PERCENTAGE_CONTRACT: 0.4
}

const errorMessages = {
    invalid_employee_type: "Please enter a valid employee type",
    invalid_salesPerMonth: "Please enter a valid amount generated for the month"
}

const employeeTypeValidation = (employeeType) => {
    if(!employeeTypes.hasOwnProperty(employeeType)){
        throw new Error(errorMessages.invalid_employee_type)
    }
}

const salesPerMonthValidation = (salesPerMonth) => {
    if(typeof(salesPerMonth) !== 'number' || salesPerMonth < 0){
        throw new Error(errorMessages.invalid_salesPerMonth)
    }
}

const calculateAllTypesOfEmployeeSalary = (baseSalary, percentage, salesPerMonth) =>{
    return baseSalary + (percentage * salesPerMonth)
}

const calculateSalariedEmployeeSalary = () => {
    return calculateAllTypesOfEmployeeSalary(employeeSalaryParameters.BASE_SALARIED, 0, 0)
}

const calculateCommissionedEmployeeSalary = (salesPerMonth) => {
    salesPerMonthValidation(salesPerMonth)
    return calculateAllTypesOfEmployeeSalary(employeeSalaryParameters.BASE_COMMISSIONED, employeeSalaryParameters.PERCENTAGE_COMMISIONED, salesPerMonth)
}

const calculateContractEmployeeSalary = (salesPerMonth) => {
    salesPerMonthValidation(salesPerMonth)
    return calculateAllTypesOfEmployeeSalary(0, employeeSalaryParameters.PERCENTAGE_CONTRACT, salesPerMonth)
}

const calculateEmployeeSalary = (employeeType, salesPerMonth) => {
    employeeTypeValidation(employeeType)

    if(employeeType === employeeTypes.SALARIED){
        return calculateSalariedEmployeeSalary();
    }
    if(employeeType === employeeTypes.COMMISSIONED){
        return calculateCommissionedEmployeeSalary(salesPerMonth);
    }
    if(employeeType === employeeTypes.CONTRACT){
        return calculateContractEmployeeSalary(salesPerMonth);
    }

    return "Oops! There was an error. We'll get back to you shortly"
}

// console.log(calculateEmployeeSalary('COMMISSIONED', null ))



module.exports = {
    employeeTypes,
    employeeSalaryParameters,
    errorMessages,
    employeeTypeValidation,
    salesPerMonthValidation,
    calculateAllTypesOfEmployeeSalary,
    calculateSalariedEmployeeSalary,
    calculateCommissionedEmployeeSalary,
    calculateContractEmployeeSalary,
    calculateEmployeeSalary
}

