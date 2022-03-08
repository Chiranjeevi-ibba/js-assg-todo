let todosContainer = document.getElementById("todosContainer");

let addBtn = document.getElementById("addBtn")

let todosList = [
    {
        labelText: "Learn Html",
        uniqueNo: 1
    }
]

addBtn.onclick = function() {
    let userInput = document.getElementById("userInput");

    if (addBtn.textContent === "Add") {
        id = todosList.length +1
        if (userInput.value !== "") {
            updatingTodoList(userInput.value)
            userInput.value = ""
        }
    }else{
        let id = addBtn.value
            todosList = todosList.map(obj => {
                if (obj.uniqueNo == id) {
                    return {...obj, labelText: userInput.value};
                }
                    return obj;
             });
        renderTodoList()
        addBtn.textContent = "Add"
         userInput.value = ""
        
     }
    
}


function createTodo(todo) {
    let liEle = document.createElement("li")
    liEle.classList.add("li-item")
    todosContainer.appendChild(liEle)

    let spanEle = document.createElement("span")
    spanEle.textContent = todo.uniqueNo + "."
    liEle.appendChild(spanEle)

    let paragraph = document.createElement("p")
    paragraph.textContent = todo.labelText;
    paragraph.classList.add("m-0")
    liEle.appendChild(paragraph)

    let btnsContainer = document.createElement("div")
    liEle.appendChild(btnsContainer)

    let removeBtn = document.createElement("button")
    removeBtn.classList.add("btn", "btn-danger", "m-2")
    removeBtn.textContent = "Delete"
    removeBtn.onclick = function() {
        todosContainer.removeChild(liEle)
        todosList = todosList.filter(ele => ele.uniqueNo !== todo.uniqueNo)
        onremove(todosList)
        console.log(todosList);
    }
    btnsContainer.appendChild(removeBtn)

    let editBtn = document.createElement("button")
    editBtn.classList.add("btn", "btn-success", "m-2")
    editBtn.textContent = "Edit"
    editBtn.onclick = function() {
        userInput.value = todo.labelText
        addBtn.textContent = "Update"
        addBtn.value = todo.uniqueNo;
        
    }
    btnsContainer.appendChild(editBtn)
}
function renderTodoList() {
    todosContainer.innerHTML = "";
    for (let i of todosList) {
        createTodo(i)
    }
}
function updatingTodoList(inputValue) {
    todosContainer.innerHTML = ""
    let newTodo = {
        labelText: inputValue,
        uniqueNo: todosList.length  + 1
    }
    todosList.push(newTodo)
    for (let i of todosList) {
        createTodo(i)
    }
}
function onremove(todosList) {
    console.log(todosList);
    todosList.filter(ele => ele.uniqueNo = todosList.indexOf(ele) + 1)
    renderTodoList()
}

for (let i of todosList) {
    createTodo(i)
}



