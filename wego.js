const wageCalculator = (employeeType) => {
          
    if (employeeType !="" && typeof employeeType === 'string') {
        if(employeeType === "Salaried" || employeeType === "salaried") {
            salariedEmployee();
    
        } else if (employeeType === "Commissioned" || employeeType === "commissioned") {
           salesPerMonth = prompt("Enter your total sales for this month: ")
        
            commissionEmployee(salesPerMonth);   
    
        } else if (employeeType === "Contracted" || employeeType === "contracted") {
            salesPerMonth = prompt("Enter your total sales for this month: ")
            
            contractedEmployee(salesPerMonth);
          
    } else {
        alert('Employee Type should be either Salaried, Commissioned or Contracted')
    }
} else {
    alert('Please Enter a valid Employee type... (Salaried, Commissioned or Contracted) ')
}

}

const salariedEmployee = () => {
    
   return 150000;
}


const commissionEmployee = (salesPerMonth) => {
  
        if (salesPerMonth != "" && salesPerMonth >= 0 ) {
            let commission = salesPerMonth * 0.085;
            let commissionedSalary = 80000 + commission;
          return commissionedSalary;
        } 

}

const contractedEmployee = (salesPerMonth) => {
    if(salesPerMonth != "" && salesPerMonth >= 0  ) {
        let contractSalary = salesPerMonth * 0.4;
      return contractSalary;
    } 
}




