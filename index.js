const addButton = document.querySelector('.btn-add');
const mainInput = document.querySelector('.listInput');
const listNames = document.querySelector('.ol-el')

let nameList = []

addButton.addEventListener('click', ()=> {
    if (mainInput.value !="" && mainInput.value != null){
      nameList.push(mainInput.value)
      mainInput.value= ""
    }
      renderNames()   
     
});

function renderNames() {
    let listItems = ""
    
    for (let i = 0; i < nameList.length; i++) {
       
        listItems += ` 
        <li>
           ${nameList[i]}
           </li>

        `
        
    
  
    }
    listNames.innerHTML = listItems;
    console.log(listItems)
}




