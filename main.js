function calculateEmployeeMonthlySalary (employeeType, salesPerMonth) {
    const baseSalaryForSalaried = 150000;
    const baseSalaryForCommissioned = 80000;
    const commissionRate = 0.085; // 8.5/100 
    const contractRate = 0.4; // 40/100 

    switch (employeeType) {
        case "SALARIED":
            monthlyPay = 150000;
            break;
        
        case "COMMISSIONED":
            monthlyPay = baseSalaryForCommissioned + (salesPerMonth * commissionRate);
            break;
        
        case "CONTRACT":
            monthlyPay = salesPerMonth * contractRate;
            break
        
        default:
            console.log("Invalid employee type");
            monthlyPay=0;
            break;
    }
        return monthlyPay;
}
