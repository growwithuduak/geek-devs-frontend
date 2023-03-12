let nameList = []

addButton.addEventListener('click', ()=> {
      nameList.push(mainInput.value)
      mainInput.value= ""

      renderNames()    
});
