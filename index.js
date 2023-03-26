const wageCalculator = (employeeType) => {
          
    if (employeeType !="" && typeof employeeType === 'string') {
        if(employeeType === "Salaried" || employeeType === "salaried") {
            salaried();
    
        } else if (employeeType === "Commissioned" || employeeType === "commissioned") {
           salesPerMonth = prompt("Enter your total sales for this month: ")
        
            commission(salesPerMonth);   
    
        } else if (employeeType === "Contracted" || employeeType === "contracted") {
            salesPerMonth = prompt("Enter your total sales for this month: ")
            
            contracted(salesPerMonth);
          
    } else {
        alert('Employee Type should be either Salaried, Commissioned or Contracted')
    }
} else {
    alert('Please Enter a valid Employee type... (Salaried, Commissioned or Contracted) ')
}

}

const salaried = () => {
    
   return 150000;
}


const commission = (salesPerMonth) => {
  
        if(salesPerMonth >= 0 && salesPerMonth != "") {
            let commission = salesPerMonth * 0.085;
            let commissionedSalary = 80000 + commission;
          return 'Your pay for this month is: ' + commissionedSalary
        } 

}

const contracted = (salesPerMonth) => {
    if(salesPerMonth >= 0 && salesPerMonth != "") {
        let contractSalary = salesPerMonth * 0.4;
      return('Your pay for this month is: ' + contractSalary)
    } 
}




console.log(wageCalculator("salaried"))