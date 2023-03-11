const addToInputList = document.querySelector("#addName");
const addButton = document.querySelector("#addNameToList");
const addToOutputList = document.querySelector("#outputList");

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
        
    }
};


addButton.addEventListener("click", () => {
    addToList();

}
);
