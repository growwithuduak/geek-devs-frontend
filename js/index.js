const addToInputList = document.getElementById("addName");
const addButton = document.getElementById("addNameToList");
const addToOutputList = document.getElementById("ordered-list");

// Function to append 
const addToList = () => {
    const li = document.createElement("li");
    const paragraph = document.createElement("p");

    li.innerHTML = addToInputList.value;

    if (!li.innerHTML) {
        alert('Input text field cannot be empty!');
    }
    else {
        addToOutputList.appendChild(li);
        addToOutputList.appendChild(paragraph);
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
    if (event.key === 'Enter') {
        event.preventDefault();
        addToList();
    }
  });
