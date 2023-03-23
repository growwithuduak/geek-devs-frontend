const calcMonthlyPay = (employeeType, salesPerMonth) => {

    let baseSalary = 150000

    if (employeeType === "contract" || employeeType === "commisioned" ) {
        checkEmployeeSalary()
    } else if (employeeType === "salaried") {
        return `${baseSalary}`;
    } else {
        console.log("You have not entered the employee type")
    }
};

const checkEmployeeSalary = () => {
    let salesPerMonth;
    if ("contract") {
        const calcContract = (0.4 * salesPerMonth);
        return calcContract;
    } else {
        const calcCommision = ((80000) + (0.085 * salesPerMonth));
        return calcCommision;
    }
}

console.log(calcMonthlyPay("salaried"))
    