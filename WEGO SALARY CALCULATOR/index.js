function showEmployeeTypes() {
    const employeeType = document.getElementById("employeeType").value;
    const salesPerMonthDiv = document.getElementById("salesPerMonth");
  
    if (employeeType === "SALARIED") {
      salesPerMonthDiv.style.display = "none";
    } else {
      salesPerMonthDiv.style.display = "block";
    }
  }
  
  function calculateSalary() {
    const employeeType = document.getElementById("employeeType").value;
    const salesPerMonth = Number(document.getElementById("sales").value);
    let salary = 0;
  
    if (employeeType === "SALARIED") {
      salary = 150000;
    } else if (employeeType === "COMMISSIONED") {
      salary = 80000 + 0.085 * salesPerMonth;
    } else if (employeeType === "CONTRACTED") {
      salary = 0.4 * salesPerMonth;
    }
  
    const showData = document.getElementById("showSalary");
    showData.innerHTML = `Employee Type: ${employeeType}<br><br>Take home is: ₦${salary.toFixed(
      2
    )}`;
    showData.style.display = "block";
  }
  
  function resetData() {
    document.getElementById("employeeType").value = "";
    document.getElementById("sales").value = "";
    document.getElementById("showSalary").style.display = "none";
    document.getElementById("salesPerMonth").style.display = "none";
  }