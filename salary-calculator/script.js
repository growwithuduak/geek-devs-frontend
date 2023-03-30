let baseSalary;

const calcMonthlyPay = (employeeType, salesPerMonth) => {  

    validateSalesAndEmployeeType(employeeType, salesPerMonth);

    if (employeeType === "CONTRACT" || employeeType === "COMMISSIONED") {

        return computeEmployeeSalary(employeeType, salesPerMonth);    
    }; 

    if (employeeType === "SALARIED" && !salesPerMonth) {
        return computeEmployeeSalary(employeeType, salesPerMonth); 
    }
        
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


const validateSalesAndEmployeeType = (employeeType, salesPerMonth) => {

    if ((employeeType === "SALARIED") && (typeof(salesPerMonth) === "number" || typeof(salesPerMonth) === "string")) {
        throw new Error ("Salaried employees do not depend on sales made per month");
    };

    if ((employeeType === "COMMISSIONED" || employeeType === "CONTRACT") && (isNaN(salesPerMonth) || salesPerMonth <= 0 )) {
        throw new Error ("Sales per month must be a number greater than zero");
    };

};


console.log(calcMonthlyPay("SALARIED", 11111))