
// Previous code
// function Add() {
//   document.getElementById("invalid").innerHTML = "";
//   let addText = document.getElementById("text").value;

// only you can compare the value not data type 

//   if (addText == "") {
//     document.getElementById("invalid").innerHTML = "Please enter some text";
//     console.log("error");
//   } else {
//     document.getElementById(
//       "list"
//     ).innerHTML += `<li>${addText} <i class="fa-solid fa-trash" id="del" onclick="del(event)"></i></li>`; 
//   }
//    addText = document.getElementById("text").value="";
//    addText = document.getElementById("text").focus();
// }

// function del(event) {
//   let list= event.target.parentElement
//   list.remove()
// }


// udated code 
const invalidMessage = document.getElementById("invalid");
const textInput = document.getElementById("text");
const listContainer = document.getElementById("list");

function clearInputAndFocus() {
  textInput.value = "";
  textInput.focus();
}

function addListItem(text) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${text} <i class="fa-solid fa-trash" id="del"></i>`;
  listItem.querySelector("#del").addEventListener("click", del);
  listContainer.appendChild(listItem);
}

function validateAndAdd() {
  const addText = textInput.value;
  if (addText === "") {
    invalidMessage.innerHTML = "Please enter some text";
    console.log("error");
  } else {
    invalidMessage.innerHTML = "";
    addListItem(addText);
    clearInputAndFocus();
  }
}

function del(event) {
  event.target.parentElement.remove();
}

