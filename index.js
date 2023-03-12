let names=[]
function myFunction()
{
 let x=document.getElementById("box");
  names.push(document.getElementById("name").value);
 x.innerHTML=names.join('<br/><br/>'); 
}

//for accessibility
let input = document.getElementById("name");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add-btn").click();
  }
}); 