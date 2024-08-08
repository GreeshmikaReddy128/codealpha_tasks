document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('task-list').addEventListener('click', removeTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        li.appendChild(removeBtn);

        document.getElementById('task-list').appendChild(li);

        saveTask(taskText);
        taskInput.value = '';
    }
}

function removeTask(e) {
   
    if (e.target.tagName === 'BUTTON') {
        const task = e.target.parentElement;
        task.classList.add('removing');
        setTimeout(() => {
            deleteTask(task.textContent.replace('Remove', '').trim());
            task.remove();
            toggleEmptyState();
        }, 300); // Wait for the fade-out animation to complete
    }
}

function saveTask(task) {
    let tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(task) {
    let tasks = getTasks();
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function loadTasks() {
    const tasks = getTasks();
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        li.appendChild(removeBtn);

        document.getElementById('task-list').appendChild(li);
    });
}

function toggleEmptyState() {
    const taskList = document.getElementById('task-list');
    const emptyState = document.getElementById('empty-state');
    emptyState.style.display = taskList.children.length === 0 ? 'block' : 'none';
}

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        li.appendChild(removeBtn);

        document.getElementById('task-list').appendChild(li);

        saveTask(taskText);
        taskInput.value = '';
        toggleEmptyState();
    }
}

function removeTask(e) {
    if (e.target.tagName === 'BUTTON') {
        const task = e.target.parentElement;
        deleteTask(task.textContent.replace('Remove', '').trim());
        task.remove();
        toggleEmptyState();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    toggleEmptyState();
});

