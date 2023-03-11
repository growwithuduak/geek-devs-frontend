const addButton = document.querySelector('.btn-add');
const mainInput = document.querySelector('.listInput');
const listNames = document.querySelector('.ol-el')

let nameList = []

addButton.addEventListener('click', ()=> {
      nameList.push(mainInput.value)
      mainInput.value= ""

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
    listNames.innerHTML = listItems
}










// let listnames = JSON.parse(localStorage.getItem('names')) || []


// addButton.addEventListener('click', (e)=> {
//    e.preventDefault()


//    const inputValue = mainInput.value

//    if (inputValue == '') {
//     return
//    }

//    const Fname = {
//     id: new Date().getTime(),
//     name: inputValue
//    }

//    listnames.push(Fname)
//    localStorage.setItem('names', JSON.stringify(listnames))

//    createName(Fname)


//    console.log(Fname)
 
// });

