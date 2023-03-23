let inputvalue = document.querySelector("#input_field");
let addbtn = document.querySelector("#submit_btn");
let displayname = document.querySelector(".taskList");

let nameList=[]
let li=document.createElement("li");

addbtn.addEventListener("click", (e)=> {
      e.preventDefault();
      nameList.push( inputvalue.value);
      let list = "";
      for (let index = 0; index < nameList.length; index++) {
      list += `<li>${nameList[index]}</li>`;
     
}

      displayname.innerHTML = list;
      inputvalue.value = "";

})

