const calcMonthlyPay = (employeeType, salesPerMonth) => {

    const baseSalary = 150000

    if (employeeType === "contract" || employeeType === "commissioned") {

        return checkEmployeeSalary(salesPerMonth);
    } else if (employeeType === "salaried") {

        return `$${baseSalary}`;
    } else {
        console.log("You have not entered the employee type")
    }
};

const checkEmployeeSalary = (salesEarned) => {

    if ("contract") {   
        const calcContract = (0.4 * salesEarned); 
        return `$${calcContract}`;
    } else if ("commissioned") {
        const calcCommision = ((80000) + (0.085 * salesEarned));
        return `$${calcCommision}`;
    } else {
        console.log("not a contract nor commissioned employee")
    }    
};


console.log(calcMonthlyPay("salaried"))
console.log(calcMonthlyPay("contract", 243900))
console.log(calcMonthlyPay("commissioned", 471050))
console.log(calcMonthlyPay("newSalary"))


// to-do:
// write code that diables the console from displaying "undefined"
// write code that enables checkEmployeeSalary get the value of salesPerMonth