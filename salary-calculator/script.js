const calcMonthlyPay = (employeeType, salesPerMonth) => { 

    if (employeeType === "contract" || employeeType === "commissioned") {
        
        return checkEmployeeSalary(employeeType, salesPerMonth);
    } else if (employeeType === "salaried") {

        const baseSalary = 150000
        return `$${baseSalary}`;
    } else {
        console.log("You have not entered the employee type")
    }
};


const checkEmployeeSalary = (hiredGoal, salesEarned) => {

    if (hiredGoal === "contract") { 

        const calcContract = (0.4 * salesEarned); 
        const estimatedSalary = Math.floor(calcContract);

        return `$${estimatedSalary}`;

    } else if (hiredGoal === "commissioned") {

        const baseSalary = 80000;
        const calcCommision = ((baseSalary) + (0.085 * salesEarned));
        const estimatedSalary = Math.floor(calcCommision);

        return `$${estimatedSalary}`;

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