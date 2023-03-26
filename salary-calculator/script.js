let baseSalary;

const calcMonthlyPay = (employeeType, salesPerMonth) => { 

    validateMonthlyPayError(employeeType, salesPerMonth);

        if (employeeType === "CONTRACT") {

            return computeEmployeeSalary(employeeType, salesPerMonth);
        }; 
        
        if (employeeType === "COMMISSIONED") {
            
            return computeEmployeeSalary(employeeType, salesPerMonth);
        }; 
        
        if (employeeType === "SALARIED" && typeof(salesPerMonth) === "number") {
            return "Salaried employees do not depend on sales made per month"
        };

        if (employeeType === "SALARIED") {
    
            return computeEmployeeSalary(employeeType, salesPerMonth);    
        }; 

 
        
};


const computeEmployeeSalary = (employeeType, salesPerMonth) => {

    if (employeeType === "CONTRACT") { 

        const calcContract = (0.4 * salesPerMonth); 
        return calcContract;
    } 

    if (employeeType === "COMMISSIONED") {

        baseSalary = 80000;
        const calcCommision = ((baseSalary) + (0.085 * salesPerMonth));

        return calcCommision;
    };

    if (employeeType === "SALARIED") {

        baseSalary = 150000
        return baseSalary;
    };
}

const confirmEmployeeType = (employeeType, salesPerMonth) => {
    if (employeeType !== "SALARIED" || employeeType !== "CONTRACT" || employeeType !== "COMMISIONED") {

        return "You have not entered the required employee type"
   };

}

const confirmSalesPerMonth = (employeeType, salesPerMonth) => {

   if (typeof(salesPerMonth) !== "number" || salesPerMonth <= 0 ) {

        return "Sales per month must be a number greater than zero"
    };

    if (!salesPerMonth || typeof(salesPerMonth) === "undefined") {
        return "This is not the required input format"
    }

};

const validateMonthlyPayError = (employeeType, salesPerMonth) => {
   
    confirmEmployeeType(employeeType, salesPerMonth);
    confirmSalesPerMonth(employeeType, salesPerMonth);
}

console.log(calcMonthlyPay("SALARIED"))
console.log(calcMonthlyPay("SALARIED", 200000))

console.log(calcMonthlyPay("CONTRACT", "letters"))
console.log(calcMonthlyPay("COMMISSIONED", 47103.50))
console.log(calcMonthlyPay("CONTRACT", -88920))

console.log(calcMonthlyPay("COMMISSIONED", 0));
console.log(calcMonthlyPay("CONTRACT", 0));

console.log(calcMonthlyPay("newAge"));
console.log(calcMonthlyPay("COMMISIONED"))
//console.log(calcMonthlyPay("CONTRACT", y))