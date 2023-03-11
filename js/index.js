const addToInputList = document.querySelector("#addName");
const addButton = document.querySelector("#addNameToList");
const addToOutputList = document.querySelector("#outputList");

function addToList() {
    const ol = addToOutputList.querySelector("ol");
    const li = document.createElement("li");
    const paragraph = document.createElement("p");

    li.innerHTML = addToInputList.value;

    if (!li.innerHTML) {
        console.error('Enter the name of any woman you know!')
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
