const taskInput = document.createElement("input");
const addBtn = document.createElement("button");
const taskList = document.createElement("ul");

addBtn.textContent = "Add Task";
document.body.append(taskInput, addBtn, taskList);

const saveTasks = (tasks) => localStorage.setItem("tasks", JSON.stringify(tasks));
const loadTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];

let tasks = loadTasks();
tasks.forEach(addTaskToList);

addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    addTaskToList(task);
    saveTasks(tasks);
    taskInput.value = "";
  }
});

function addTaskToList(task) {
  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
}
