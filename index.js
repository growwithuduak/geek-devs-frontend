const Home = document.querySelector('.home')
const Total = document.querySelector('.total')
const select = document.querySelector('select')
const calculateWages = document.querySelector('.calculate-wages')
const totalSales = document.querySelector('.total-sales')
const btn2 = document.querySelector('.btn-2')
const btn1 = document.querySelector('.btn-1')
const nameOfEmployee = document.querySelector('.employee-name')
const commisionedContracted = document.querySelector('.contracted-commisioned')
const salaryBreakdown = document.querySelector('.salary-breakdown')



btn1.addEventListener('click', ()=> {
    if(nameOfEmployee.value != " " && nameOfEmployee.value != null){
        Home.classList.add('home-page')
        calculateWages.classList.remove('inactive')
    }
    
})

select.addEventListener ('change', ()=> {
    Total.innerText = ""

    if(select.value == "Salaried") {
        commisionedContracted.classList.remove('sales')
        salaried();


    } else if (select.value == "commisioned") {
        Total.innerHTML = "";
        salaryBreakdown.innerHTML = ""
        commisionedContracted.classList.add('sales')
        commission();
        totalSales.value = "";

    } else if (select.value == "contract") {
        Total.innerHTML = "";
        salaryBreakdown.innerHTML = "";
        commisionedContracted.classList.add('sales')
        contracted();
        totalSales.value = "";
      
    } else {
        commisionedContracted.classList.remove('sales')
    }
    
})


salaried = () => {
    Total.innerText = nameOfEmployee.value + ' your monthly pay is:  150,000 naira';
}


commission = () => {
    btn2.addEventListener('click', function() {
        if(totalSales.value != 0 && totalSales != "") {
            let salesPerMonth = totalSales.value * 0.085;
            let commissionedSalary = 80000 + salesPerMonth;
            Total.innerText =  nameOfEmployee.value + ' your monthly pay is: ' + commissionedSalary;
            salaryBreakdown.innerHTML = ` Here's the summary of your monthly pay:
             <br/> Base salary = 80,000 
             <br/> Commission = 8.5% of 
             ${totalSales.value} `;
            commisionedContracted.classList.remove('sales')
        } 
    }) 

}

contracted = () => {
    btn2.addEventListener('click', function() {
        if(totalSales.value != 0 && totalSales != "") {
        let salesPerMonth = totalSales.value * 0.4;
        Total.innerText = nameOfEmployee.value + ' Your monthly pay is: ' + salesPerMonth;
        salaryBreakdown.innerHTML =  `You got 40% of 
        ${totalSales.value} `;
        commisionedContracted.classList.remove('sales');
        }
    })
}
