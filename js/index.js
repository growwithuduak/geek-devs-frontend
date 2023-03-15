const addToInputList = document.querySelector("#addName");
const addButton = document.querySelector("#addNameToList");
const addToOutputList = document.querySelector("#outputList");

// Function to append 
function addToList() {
    const ol = addToOutputList.querySelector("ol");
    const li = document.createElement("li");
    const paragraph = document.createElement("p");

    li.innerHTML = addToInputList.value;

    if (!li.innerHTML) {
        console.warn('Input text field cannot be empty');
    }
    else {
        ol.appendChild(li);
        ol.appendChild(paragraph);
        addToInputList.value = "";
    }
};


// Execute when the user click on ADD button on Interface
addButton.addEventListener("click", () => {
        addToList();
    }
);

// Execute when the user presses Enter key on the keyboard
addToInputList.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        addToList();
    }
  });
