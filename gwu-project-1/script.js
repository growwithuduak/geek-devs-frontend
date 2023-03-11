let inputText = document.querySelector("#input-text");
let addBtn = document.querySelector("#add-btn");
let ol = document.querySelector("ol");

let addName = () => {
    let name = inputText.value
    let li = document.createElement("li")
    
    li.innerText = name
    ol.appendChild(li)

    inputText.value=""
}

addBtn.addEventListener("click", addName);