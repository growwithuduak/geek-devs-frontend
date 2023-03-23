const calcMonthlyPay = (employeeType, salesPerMonth) => {

    const baseSalary = 150000

    if ((employeeType === "contract" || employeeType === "commissioned") ) {
        checkEmployeeSalary()
    } else if (employeeType === "salaried") {
        return `$${baseSalary}`;
    } else {
        console.log("You have not entered the employee type")
    }
};

const checkEmployeeSalary = () => {

    let salesPerMonth;

    if ("contract") {
        const calcContract = (0.4 * salesPerMonth);
        return `$${calcContract}`;
    } else {
        const calcCommision = ((80000) + (0.085 * salesPerMonth));
        return `$${calcCommision}`;
    }
}

console.log(calcMonthlyPay("salaried"))
console.log(calcMonthlyPay("contract", 200000))
console.log(calcMonthlyPay("commissioned", 200000))
console.log(calcMonthlyPay("newSalary"))

// write code that diables the console from displaying "undefined"
    