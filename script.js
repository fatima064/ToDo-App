function onAddTodo() {
    const todoInput = document.getElementById("todo-input");
    if (!Boolean(todoInput)) {
        return;
    }
    const todoList = document.getElementById('todo-container');

    const thisTodoIndex = todoList.querySelectorAll("li").length;

    const todoItem = document.createElement('li');
    const todoText = document.createElement('p');
    
    todoText.innerHTML = todoInput.value;

    const completeButton = document.createElement('button');
    completeButton.innerHTML = "Mark as complete";
    completeButton.onclick = function () {
        onMarkAsComplete(thisTodoIndex);
    };

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = () => onDeleteTodo(thisTodoIndex);

    const editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    editButton.onclick = function () {
        onEditTodo(thisTodoIndex);
    };
    
    todoItem.appendChild(todoText);
    todoItem.appendChild(completeButton);
    todoItem.appendChild(deleteButton);
    todoItem.appendChild(editButton);

    todoList.appendChild(todoItem);

    todoInput.value = '';
}

function onMarkAsComplete(todoIndex) {
    const todoList = document.getElementById('todo-container');
    const todoItem = todoList.querySelector(`li[data-index='${todoIndex}']`);
    const todoTextToUpdate = todoItem.querySelector('p');
    todoTextToUpdate.classList.add('complete');
}

function onDeleteTodo(todoIndex) {
    const todoList = document.getElementById('todo-container');
    const allTodoItems = todoList.querySelectorAll("li");
    allTodoItems[todoIndex].remove();
}

function onEditTodo(todoIndex) {
    const todoList = document.getElementById('todo-container');
    const allTodoItems = todoList.querySelectorAll("li");
    const todoTextToEdit = allTodoItems[todoIndex].querySelector('p');
    const newTodoText = prompt("Edit your todo item:", todoTextToEdit.innerHTML);
    if (newTodoText !== null && newTodoText.trim() !== "") {
        todoTextToEdit.innerHTML = newTodoText;
    }
}
