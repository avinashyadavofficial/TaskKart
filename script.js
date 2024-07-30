document.addEventListener('DOMContentLoaded', () => {
    const datePicker = document.getElementById('date-picker');
    datePicker.value = new Date().toISOString().substr(0, 10);
    loadTasksForSelectedDate();
    updateToggleButton(); // Set initial button text and icon based on current mode
});

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    updateToggleButton(); // Update button text and icon when toggling mode
}

function updateToggleButton() {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const icon = toggleButton.querySelector('.toggle-icon');
    const text = toggleButton.querySelector('.toggle-text');

    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('day-icon');
        icon.classList.add('night-icon');
        
    } else {
        icon.classList.remove('night-icon');
        icon.classList.add('day-icon');
        
    }
}

function addTask(category) {
    const input = document.getElementById(`${category}-input`);
    const taskText = input.value.trim();
    if (taskText === "") return;

    const ul = document.getElementById(`${category}-tasks`);
    const li = createTaskElement(taskText);
    ul.appendChild(li);
    input.value = "";
    saveTasksForSelectedDate();
}

function createTaskElement(taskText, status = 'incomplete') {
    const li = document.createElement("li");
    li.className = status;
    li.style.backgroundColor = "#fff";  // Initial white background for new tasks
    li.innerHTML = `
        ${taskText}
        <button onclick="toggleComplete(this)">Complete</button>
        <button onclick="markIncomplete(this)">Incomplete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    return li;
}

function toggleComplete(button) {
    const li = button.parentElement;
    li.className = "complete";
    li.style.backgroundColor = "#ccffcc";  // Green background for completed tasks
    li.style.textDecoration = "line-through";
    saveTasksForSelectedDate();
}

function markIncomplete(button) {
    const li = button.parentElement;
    li.className = "incomplete";
    li.style.backgroundColor = "#ffcccc";  // Red background to indicate incomplete
    li.style.textDecoration = "none";

    const taskText = li.childNodes[0].nodeValue.trim();
    const category = li.parentElement.id.split('-')[0]; // get category from the parent element's id
    moveTaskToNextDay(category, taskText);
}

function deleteTask(button) {
    const li = button.parentElement;
    li.parentElement.removeChild(li);
    saveTasksForSelectedDate();
}

function moveTaskToNextDay(category, taskText) {
    const currentDate = document.getElementById('date-picker').value;
    const nextDate = new Date(new Date(currentDate).getTime() + (24 * 60 * 60 * 1000)).toISOString().substr(0, 10);

    const storedTasks = JSON.parse(localStorage.getItem(nextDate)) || { dsa: [], webdev: [], others: [] };
    storedTasks[category].push({ text: taskText, status: "incomplete" });
    localStorage.setItem(nextDate, JSON.stringify(storedTasks));
}

function saveTasksForSelectedDate() {
    const categories = ['dsa', 'webdev', 'others'];
    const currentDate = document.getElementById('date-picker').value;
    const tasks = { dsa: [], webdev: [], others: [] };

    categories.forEach(category => {
        const ul = document.getElementById(`${category}-tasks`);
        ul.querySelectorAll('li').forEach(li => {
            const taskText = li.childNodes[0].nodeValue.trim();
            const status = li.className;
            tasks[category].push({ text: taskText, status: status });
        });
    });

    localStorage.setItem(currentDate, JSON.stringify(tasks));
}

function loadTasksForSelectedDate() {
    const currentDate = document.getElementById('date-picker').value;
    const storedTasks = JSON.parse(localStorage.getItem(currentDate)) || { dsa: [], webdev: [], others: [] };

    const categories = ['dsa', 'webdev', 'others'];
    categories.forEach(category => {
        const ul = document.getElementById(`${category}-tasks`);
        ul.innerHTML = '';
        storedTasks[category].forEach(task => {
            const li = createTaskElement(task.text, task.status);
            if (task.status === "complete") {
                li.style.backgroundColor = "#ccffcc";
                li.style.textDecoration = "line-through";
            } else if (task.status === "incomplete") {
                li.style.backgroundColor = "#ffcccc";
                li.style.textDecoration = "none";
            }
            ul.appendChild(li);
        });
    });
}
