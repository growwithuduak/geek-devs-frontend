const { Contract } = require("ethers");
const { computeEmployeeSalary,
   validateEmployeeType, 
   validateSalesPerMonth, 
   computeCommissionedEmployeeSalary, 
   computeSalariedEmployeeSalary, 
   computeContractEmployeeSalary,
   ErrorMessages
   } = require("../computeSalary");


describe('check Logic for each Employee type', () => {
  test('Salary Employee: ', () => {
    expect(computeEmployeeSalary("SALARIED")).toEqual(computeSalariedEmployeeSalary())
  });

  test('isContracted: ', () => {
    const salesPerMonth = 120000
    expect(computeEmployeeSalary("CONTRACT", salesPerMonth)).toEqual(computeContractEmployeeSalary(salesPerMonth))
  });

  test('isCommssioned: ', () => {
    const salesPerMonth = 200000
    expect(computeEmployeeSalary("COMMISSIONED", salesPerMonth)).toEqual(computeCommissionedEmployeeSalary(salesPerMonth))
  });

})


describe('Error handling', () => {
  test('Invalid Employee type', () => {
    expect(() => {validateEmployeeType("Daily").toThrow(ErrorMessages.EmployeeType)})
  })
  test('Invalid Sales amount', () => {
    expect(() => {validateSalesPerMonth(0).toThrow(ErrorMessages.salesPerMonth)})
  })
})


describe('Check correct percentage', () => {
  test('check if the contract percentage is correct: ', () => {
    const salesPerMonth = 10000
    const expectedPercentage = 0.4
    const percentageEarned =   computeContractEmployeeSalary(salesPerMonth) / salesPerMonth
    expect(percentageEarned).toEqual(expectedPercentage)
  })


  test('check if the commissioned percentage is correct: ', () => {
    const salesPerMonth = 10000
    const baseSalary = 80000
    const expectedPercentage = 0.085
    const percentageEarned =   (computeCommissionedEmployeeSalary(salesPerMonth) -baseSalary) / salesPerMonth
    expect(percentageEarned).toEqual(expectedPercentage)
  })
  


})
