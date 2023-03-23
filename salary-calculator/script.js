const monthlyPay = (employeeType, salesPerMonth) => {
    if (employeeType === "salaried") {
        employeeSalary = 150000
        return employeeSalary;
    } else if (employeeType === "commissioned") {
        employeeSalary = ((80000) + (0.085 * salesPerMonth))
        return employeeSalary;
    } else if (employeeType === "contract") {
        employeeSalary = (0.4 * salesPerMonth);
        return employeeSalary;
    } else {
        console.log("nothing")
    }
}

let d = monthlyPay("commissioned", 427000)

console.log(d);