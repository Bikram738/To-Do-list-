function Add() {
  document.getElementById("invalid").innerHTML = "";
  let addText = document.getElementById("text").value;
  if (addText == "") {
    document.getElementById("invalid").innerHTML = "Please enter some text";
    console.log("error");
  } else {
    document.getElementById(
      "list"
    ).innerHTML += `<li>${addText} <i class="fa-solid fa-trash" id="del" onclick="del(event)"></i></li>`; 
  }
   addText = document.getElementById("text").value="";
   addText = document.getElementById("text").focus();
}

function del(event) {
  let list= event.target.parentElement
  list.remove()
}


