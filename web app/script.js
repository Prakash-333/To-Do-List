const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskValue = taskInput.value.trim();
  if (taskValue) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.textContent = taskValue;
    const removeTaskBtn = document.createElement("button");
    removeTaskBtn.className = "remove-task-btn";
    removeTaskBtn.textContent = "Remove";
    removeTaskBtn.addEventListener("click", removeTask);
    taskItem.appendChild(removeTaskBtn);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

function removeTask(e) {
  const taskItem = e.target.parentNode;
  taskList.removeChild(taskItem);
}
