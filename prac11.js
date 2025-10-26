// Task Manager App
document.body.style.margin = "0";
document.body.style.fontFamily = "Poppins, sans-serif";

const app = document.createElement("div");
app.id = "taskApp";
document.body.appendChild(app);

const header = document.createElement("header");
header.innerHTML = `
  <h1>Task Manager</h1>
  <button id="themeToggle"></button>
`;
const inputDiv = document.createElement("div");
inputDiv.className = "inputDiv";
inputDiv.innerHTML = `
  <input id="taskInput" type="text" placeholder="Enter new task..." />
  <button id="addTask">Add</button>
`;
const searchDiv = document.createElement("div");
searchDiv.className = "searchDiv";
searchDiv.innerHTML = `
  <input id="searchInput" type="text" placeholder="Search tasks..." />
`;
const taskList = document.createElement("ul");
taskList.id = "taskList";

app.append(header, inputDiv, searchDiv, taskList);

const style = document.createElement("style");
style.textContent = `
  body { background:#f9fafb; color:#222; transition:0.4s; }
  header { display:flex; justify-content:space-between; align-items:center;
           padding:20px; background:#007bff; color:white; }
  h1 { margin:0; font-size:1.6rem; }
  .inputDiv, .searchDiv { display:flex; justify-content:center; margin:20px; }
  input { padding:10px; width:60%; border:1px solid #ccc; border-radius:6px; }
  button { margin-left:10px; padding:10px 15px; border:none; background:#007bff;
           color:white; border-radius:6px; cursor:pointer; transition:0.3s; }
  button:hover { background:#0056b3; }
  ul { list-style:none; padding:0 20px; }
  li { background:#fff; margin:10px 0; padding:15px; border-radius:8px;
       display:flex; justify-content:space-between; align-items:center;
       box-shadow:0 2px 6px rgba(0,0,0,0.1); transition:0.3s; }
  li.completed { text-decoration:line-through; opacity:0.6; }
  .dark { background:#1e1e1e; color:#f4f4f4; }
  .dark li { background:#2c2c2c; }
  .dark header { background:#333; }
  .dark input { background:#444; color:#fff; border-color:#555; }
  .dark button { background:#444; color:#fff; }
  .dark button:hover { background:#666; }
`;
document.head.appendChild(style);

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
const themeToggle = document.getElementById("themeToggle");
const updateTheme = () => {
  if (darkMode) {
    document.body.classList.add("dark");
    themeToggle.textContent = "";
  } else {
    document.body.classList.remove("dark");
    themeToggle.textContent = "";
  }
  localStorage.setItem("darkMode", JSON.stringify(darkMode));
};
themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  updateTheme();
});
updateTheme();

//TASK MANAGEMENT
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask");
const searchInput = document.getElementById("searchInput");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", e => e.key === "Enter" && addTask());
searchInput.addEventListener("input", renderTasks);

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  const newTask = { id: Date.now(), text, completed: false };
  tasks.push(newTask);
  taskInput.value = "";
  saveTasks();
  renderTasks();
}

function toggleComplete(id) {
  tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
}

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  const newText = prompt("Edit task:", task.text);
  if (newText !== null && newText.trim() !== "") {
    task.text = newText.trim();
    saveTasks();
    renderTasks();
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//RENDER
function renderTasks() {
  const query = searchInput.value.toLowerCase();
  taskList.innerHTML = "";
  const filtered = tasks.filter(t => t.text.toLowerCase().includes(query));

  if (!filtered.length) {
    const msg = document.createElement("p");
    msg.textContent = "No tasks found.";
    msg.style.textAlign = "center";
    msg.style.opacity = "0.6";
    taskList.appendChild(msg);
    return;
  }

  filtered.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    const span = document.createElement("span");
    span.textContent = task.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleComplete(task.id);

    const actions = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.textContent = "";
    editBtn.title = "Edit";
    editBtn.onclick = () => editTask(task.id);

    const delBtn = document.createElement("button");
    delBtn.textContent = "";
    delBtn.title = "Delete";
    delBtn.onclick = () => deleteTask(task.id);

    actions.append(editBtn, delBtn);
    li.append(span, actions);
    taskList.appendChild(li);
  });
}
renderTasks();







