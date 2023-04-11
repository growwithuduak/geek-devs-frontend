
const EmployeeType = {
	COMMISSIONED: 'COMMISSIONED',
	CONTRACT: 'CONTRACT',
	SALARIED: 'SALARIED'
	//Add new type here
}

const EmployeeSalaryMap = {
	CONTRACT: 0.4,
	COMMISSIONED_BASE: 80000,
	COMMISSIONED_PERCENTAGE: 0.085,
	SALARIED: 150000
}

const ErrorMessages = {
	INVALID_EMPLOYEE_TYPE: 'Please enter a valid employee type',
	INVALID_SALES_PER_MONTH: 'Please enter a valid sales per month greater than 0'
}

const validateEmployeeType = (employeeType) => {
	if (!EmployeeType[employeeType]) {
		throw new Error(ErrorMessages.INVALID_EMPLOYEE_TYPE)
	}
}

const validateSalesPerMonth = (salesPerMonth) => {
	if (typeof (salesPerMonth) !== 'number' || salesPerMonth < 0) {
		throw new Error(ErrorMessages.INVALID_SALES_PER_MONTH)
	}
}


const computeAllTypeEmployeeSalary = (
	baseSalary,
	commission,
	salesPerMonth
) => baseSalary + (commission * salesPerMonth);


const computeSalariedEmployeeSalary = () => {
	return computeAllTypeEmployeeSalary(
		EmployeeSalaryMap.SALARIED,
		0,
		0
	)
}


const computeCommissionedEmployeeSalary = (salesPerMonth) => {
	validateSalesPerMonth(salesPerMonth);
	return computeAllTypeEmployeeSalary(
		EmployeeSalaryMap.COMMISSIONED_BASE,
		EmployeeSalaryMap.COMMISSIONED_PERCENTAGE,
		salesPerMonth
	)
}

const computeContractEmployeeSalary = (salesPerMonth) => {
	validateSalesPerMonth(salesPerMonth);
	return computeAllTypeEmployeeSalary(
		0,
		EmployeeSalaryMap.CONTRACT,
		salesPerMonth
	)
}



// This is the main function
const computeEmployeeSalary = (
	employeeType,
	salesPerMonth
) => {
	validateEmployeeType();

	if (employeeType === EmployeeType.SALARIED) {
		return computeSalariedEmployeeSalary();
	}

	if (employeeType === EmployeeType.COMMISSIONED) {
		return computeCommissionedEmployeeSalary(salesPerMonth);
	}

	if (employeeType === EmployeeType.CONTRACT) {
		return computeContractEmployeeSalary(salesPerMonth);
	}

	return 0; // 
}
