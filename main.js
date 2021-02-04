//Selectors
const todoInput = document.querySelector(".todo-list-input");
const todoButton = document.querySelector("button");
const todoList = document.querySelector(".todo-list-item");
const todoContainer = document.querySelector(".todo-list-container");
const doneContainer = document.querySelector(".done-div-container");

//Event Listener
todoButton.addEventListener("click", addTodoItem)
todoContainer.addEventListener("click", deleteOrcheck)

//Functions
function addTodoItem(event) {
    event.preventDefault()
    inputValue = todoInput.value
    //ToDo Div
    const todoDiv = document.createElement("div");
    todoDiv.setAttribute("class", "todo-div");
    //ToDo Li
    const newTodoItem = document.createElement("li");
        newTodoItem.setAttribute("class", "new-todo-item");
        newTodoItem.innerText = inputValue
        todoDiv.appendChild(newTodoItem);
    //Done Button
    const doneButton = document.createElement("button");
        doneButton.innerHTML = '<i class="far fa-check-square"></i>'
        doneButton.setAttribute("class", "todo-done-button");
        todoDiv.appendChild(doneButton);
    //Delete Button
    const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
        deleteButton.setAttribute("class", "todo-delete-button");
        todoDiv.appendChild(deleteButton);
    //Append
    todoList.appendChild(todoDiv)
    todoInput.value = ""
}


function deleteOrcheck (event) {
    const target = event.target 
    const targetItem = target.parentElement
    //Delete Button
    if (target.classList.value === "todo-delete-button") {
        //target.classList returns DOMTokenList
        targetItem.remove()
    }
    //Done Button
    else 
        if (target.classList.value === "todo-done-button") {
        targetItem.firstChild.classList.toggle("done")
        if (targetItem.firstChild.classList.value === "new-todo-item done") {
            doneContainer.appendChild(targetItem); 
        }
        else {
            todoList.appendChild(targetItem)
        } 
    } 
}