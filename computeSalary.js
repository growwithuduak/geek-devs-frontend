const computeTakeHome = (employeeType, salesPerMonth = 0) => {
    salesPerMonth = Number(salesPerMonth);
  
    if (!['SALARIED', 'COMMISSIONED', 'CONTRACT'].includes(employeeType)) {
      throw ('Invalid input. employeeType can either be SALARIED, COMMISSIONED, or CONTRACTED.');
    }
  
    if (isNaN(salesPerMonth) || salesPerMonth < 0) {
      throw ('Invalid sales amount. salesPerMonth must be a positive integer.');
    }
  
    let takeHome = 0;
  
    if (employeeType === 'SALARIED') {
      takeHome = 150000; 
    } else if (employeeType === 'COMMISSIONED') {
      takeHome = 80000; 
      if (salesPerMonth > 0) {
        takeHome += 0.085 * salesPerMonth;
      }
    } else if (employeeType === 'CONTRACT') {
      if (salesPerMonth > 0) {
        takeHome = 0.4 * salesPerMonth; 
      }
    } else {
      throw ('Invalid input. employeeType can either be SALARIED, COMMISSIONED, or CONTRACTED.');
    }
  
    return takeHome;
  };
  
  console.log(computeTakeHome('SALARIED'))
  console.log(computeTakeHome('COMMISSIONED', 500));
  console.log(computeTakeHome('CONTRACT', 500));
  
module.exports = computeTakeHome