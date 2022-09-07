const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
todoInput.addEventListener("change", addNewTask);
todoButton.addEventListener('click', showToDo);

function addNewTask() {
    if(todoInput.value){
        const newTask = document.createElement('li');
        newTask.classList.add("todo-list-element");
        newTask.textContent = todoInput.value;
        const checkbox = document.createElement('span');
        checkbox.classList.add("todo-list-element-checkbox");        
        document.querySelector('.todo-list').append(newTask);
        newTask.append(checkbox);
        const del = document.createElement('span');
        del.classList.add('delete-task')
        del.innerHTML = "<i class='fa-solid fa-trash-can'></i>"
        newTask.append(del);
        checkbox.addEventListener("click", changeTaskStatus)
        del.addEventListener("click", removeTask)   
    }
    return    
}
function changeTaskStatus(event){
    event.target.classList.toggle('checkbox-done');
    let index = [...document.querySelectorAll('.todo-list-element')].indexOf(event.target.parentElement);
    document.querySelectorAll(".todo-list-element")[index].classList.toggle('list-element-done')   
}
function removeTask(event){
    let index = [...document.querySelectorAll('.todo-list-element')].indexOf(event.target.parentElement.parentElement);
    document.querySelectorAll(".todo-list-element")[index].remove()
}
function showToDo() {
    document.querySelector(".todo-box").classList.toggle('todo-box-active')
}
