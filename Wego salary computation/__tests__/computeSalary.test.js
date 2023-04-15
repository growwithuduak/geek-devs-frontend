const {
    validateEmployeeType, validateSalesPerMonth, 
    computeAllEmployeeTypeSalary, computeCommissionedEmployee, 
    computeContractEmployee, computeSalariedEmployee, 
    computeEmployeeSalary, EMPLOYEE_SALARY_INFO, 
    EMPLOYEE_TYPE, ERROR_MESSAGES
} = require("../src/computeSalary")

describe ("unit testing for all types of employee", () => {

    test("Correct logic for the salaried employee", () => {
        
        expect(computeEmployeeSalary("SALARIED")).toEqual(computeSalariedEmployee())
    })

    test("Correct logic for the commissioned employee", () => {
        expect(computeEmployeeSalary("COMMISSIONED", 321000)).toEqual(computeCommissionedEmployee(321000))
    })

    test("Correct logic for the contract employee", () => {
        expect(computeEmployeeSalary("CONTRACT", 123000)).toEqual(computeContractEmployee(123000))
    })
    
})

describe("Error handler", () => {

    test("Error handling for invalid employee type", () => {
        expect(() => {validateEmployeeType("INTERN").toThrow(ERROR_MESSAGES.EMPLOYEE_TYPE_ERROR)})
    })

    test("Error handling for invalid sales per month" , () => {
        expect(() => {validateSalesPerMonth(-19.45).toThrow(ERROR_MESSAGES.SALES_PER_MONTH_ERROR)})
    })
})