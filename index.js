const employeeType = document.querySelector('.employee-type');
const salariedEmployee = document.querySelector(".salaried-employee");
const commissionedEmployee = document.querySelector('.commission-employee');
const contractedEmployee = document.querySelector('.cotracted-employee');
const Total = document.querySelector('.total');
const select = document.querySelector('select');
const calculateWages = document.querySelector('.caculate-wages')
const Sales = document.querySelector('.sales');
const Input = document.querySelector('input');
const btn = document.querySelector('button');
const commisionedContracted = document.querySelector('.contracted-commisioned')

select.addEventListener ('change', ()=> {
    Total.innerText = ""
    if(select.value == "Salaried") {
        commisionedContracted.classList.remove('sales')
        salaried();


    } else if (select.value == "commisioned") {
        Total.innerHTML = "";
        commisionedContracted.classList.add('sales')
        commission();
        Input.value = "";

    } else if (select.value == "contract") {
        Total.innerHTML = "";
        commisionedContracted.classList.add('sales')
        contracted();
        Input.value = ""
    }
    
})

salaried = () => {
    Total.innerText = 'Your monthly pay is:  150,000';
}


commission = () => {
    btn.addEventListener('click', function() {
        
        let salesPerMonth = Input.value * 0.085;
        let commissionedSalary = 80000 + salesPerMonth;
        Total.innerText = 'Your monthly pay is: ' + commissionedSalary;
        commisionedContracted.classList.remove('sales')
       
    })
    
}

contracted = () => {
    btn.addEventListener('click', function() {
        let salesPerMonth = Input.value * 0.4;
        Total.innerText = 'Your monthly pay is: ' + salesPerMonth;
        commisionedContracted.classList.remove('sales')
    })
    
}