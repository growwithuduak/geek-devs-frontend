let listOfAwesomeWomenArray = [];

const addToList = () => {
  let inputValue = document.getElementById('inputText');

  if (inputValue.value === '') {
    alert('Please enter the name of any woman you know');
  } else {
    listOfAwesomeWomenArray.push(inputValue.value);

    let listItems = '';
    
    for (let a = 0; a < listOfAwesomeWomenArray.length; a++) {
      listItems += `<li>${listOfAwesomeWomenArray[a]}</li>`;
    }

    document.getElementById('nameList').innerHTML = listItems;

    inputValue.value = '';
  }
};
