const addButton = document.getElementById("addToDo");
const inputFiled = document.getElementById("inputfield");
const listContainer = document.getElementById("list-container");

// addButton.addEventListener("click", function(){
//     var paragraph = document.createElement('p');
//     paragraph.classList.add("paragraph-styling")
//     paragraph.innerText= inputFiled.value;
//     toDos.appendChild(paragraph)
//     inputFiled.value = "";
//     paragraph.addEventListener("click", function(){
//         paragraph.style.textDecoration = "line-through";

//     });
//     paragraph.addEventListener("dblclick", function(){
//         toDos.removeChild(paragraph);

//     });
// })

function AddTask(){
    if(inputFiled.value == ""){
        alert("you must write something")
    }
    else{
        let il = document.createElement("li");
        li.innerHTML = inputFiled.value;
        listContainer.appendChild(li);

    }

}