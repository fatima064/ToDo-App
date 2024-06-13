function onAddTodo() {
    const todoInput = document.getElementById("todo-input");
    if (!todoInput) {
        return;
    }
    const todoList = document.getElementById('todo-container');

    const todoItem = document.createElement('li');
    const todoText = document.createElement('p');
    
    todoText.innerHTML = todoInput.value;

    const completeButton = document.createElement('button');
    completeButton.innerHTML = "Mark as complete";
    completeButton.onclick = function () {
        onMarkAsComplete(todoItem);
    };

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = () => onDeleteTodo(todoItem);

    const editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    editButton.onclick = function () {
        onEditTodo(todoItem);
    };
    
    todoItem.appendChild(todoText);
    todoItem.appendChild(completeButton);
    todoItem.appendChild(deleteButton);
    todoItem.appendChild(editButton);

    todoList.appendChild(todoItem);

    todoInput.value = '';
}

function onMarkAsComplete(todoItem) {
    const todoTextToUpdate = todoItem.querySelector('p');
    todoTextToUpdate.classList.add('complete');
}

function onDeleteTodo(todoItem) {
    todoItem.remove();
}

function onEditTodo(todoItem) {
    const todoTextToEdit = todoItem.querySelector('p');
    const newTodoText = prompt("Edit your todo item:", todoTextToEdit.innerHTML);
    if (newTodoText !== null && newTodoText.trim() !== "") {
        todoTextToEdit.innerHTML = newTodoText;
    }
}
