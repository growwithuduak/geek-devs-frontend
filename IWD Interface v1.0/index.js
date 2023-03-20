const inputField = document.getElementById("name")
const addBtn = document.getElementById("add-btn")
const inputNames = document.getElementById("box")

let namesArray = []

inputField.addEventListener('input', function() {
  addBtn.disabled = inputField.value.trim() === '';
});

addBtn.addEventListener('click', function(addName) {
  namesArray.push(inputField.value.trim(addName));
  inputField.value = '';
  addBtn.disabled = true;

  showNames();
});

function showNames() {
  inputNames.innerHTML = '';

  const listNames = document.createElement('ol');
  namesArray.forEach(function(namesText) {
    const listData = document.createElement('li');
    const textNode = document.createTextNode(namesText);
    listData.appendChild(textNode);
    listNames.appendChild(listData);
  });

  inputNames.appendChild(listNames);
}

//for accessibility
inputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.getElementById("add-btn").click();
  }
});