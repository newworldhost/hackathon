const inputBox = document.getElementById('inputbox');
const addButton = document.querySelector('button');
const toDoListContainer = document.createElement('ul');
toDoListContainer.className = 'task-list';

document.querySelector('.toDoList').appendChild(toDoListContainer);

const createTaskElement = (taskText) => {
    const listItem = document.createElement('li');
    listItem.className = 'task-item';

    const taskDescription = document.createElement('span');
    taskDescription.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-btn';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';

    completeButton.addEventListener('click', () => {
        taskDescription.style.textDecoration = 'line-through';
        taskDescription.style.color = 'gray';
    });

    deleteButton.addEventListener('click', () => {
        toDoListContainer.removeChild(listItem);
    });

    listItem.appendChild(taskDescription);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    return listItem;
};

const addTask = () => {
    const taskText = inputBox.value.trim();

    if (taskText) {
        const taskElement = createTaskElement(taskText);
        toDoListContainer.appendChild(taskElement);
        inputBox.value = '';
    } else {
        alert('Please enter a task!');
    }
};

// Add event listener for "Add" button click
addButton.addEventListener('click', addTask);

// Add event listener for "Enter" key press in the input box
inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
