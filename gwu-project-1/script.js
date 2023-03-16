const inputText = document.getElementById("input-text")
const addBtn = document.getElementById("add-btn")
const ol = document.querySelector("ol")
const notice = document.querySelector(".notice")

const resetInputText = () => {
    inputText.value = ""
}

const checkNameValue = () => {
    if (inputText.value == false ) {
        notice.style.display = "block"
    } else {
        notice.style.display = "none"
        addName();
        resetInputText();
    }
}

const addName = () => {
    let name = inputText.value
    let li = document.createElement("li")
    li.innerText = name;
    ol.appendChild(li)
}

addBtn.addEventListener("click", checkNameValue)