let inputvalue = document.querySelector("#input_field");
let addbtn = document.querySelector("#submit_btn");
let displayname = document.querySelector(".taskList");
let error = document.querySelector(".error");

let nameList=[]
let li=document.createElement("li");

addbtn.addEventListener("click", (e)=> {
      e.preventDefault();

      if (inputvalue.value.trim() === "") {
          error.innerHTML = "Input field cannot be empty!";
          error.style.color = "red";
          displayname.insertBefore(error, displayname.firstChild);
      } else {
          if (confirm("Do you want to save this input?")) {
              error.innerHTML = "";
              nameList.push(inputvalue.value.trim());
              let list = "";
              for (let index = 0; index < nameList.length; index++) {
                  list += `<li>${nameList[index]}</li>`;
              }
              displayname.innerHTML = list;
              inputvalue.value = "";
          } else {
              inputvalue.value = "";
          }
      }
});
