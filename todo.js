document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-task");
  const list = document.getElementById("todo-list");
  const counter = document.getElementById("task-count");

  // Load saved tasks
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => renderTask(task.text, task.completed));

  updateTaskCount();

  // Add task
  addBtn.addEventListener("click", function () {
    const text = input.value.trim();
    if (text !== "") {
      renderTask(text);
      saveTask(text);
      input.value = "";
      updateTaskCount();
    }
  });

  // Add task on Enter key
  input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") addBtn.click();
  });

  // Disable add button if input is empty
  input.addEventListener("input", function () {
    addBtn.disabled = input.value.trim() === "";
  });

  function renderTask(text, completed = false) {
    const li = document.createElement("li");
    li.textContent = text;

    if (completed) li.classList.add("completed");

    // Toggle complete
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      updateTasks();
      updateTaskCount();
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑";
    delBtn.style.border = "none";
    delBtn.style.background = "transparent";
    delBtn.style.color = "red";
    delBtn.style.cursor = "pointer";
    delBtn.style.marginLeft = "10px";
    delBtn.title = "Delete task";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent toggling
      li.remove();
      updateTasks();
      updateTaskCount();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  }

  function saveTask(text) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function updateTasks() {
    const tasks = [];
    document.querySelectorAll("#todo-list li").forEach(li => {
      const text = li.firstChild.textContent;
      const completed = li.classList.contains("completed");
      tasks.push({ text, completed });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function updateTaskCount() {
    const total = document.querySelectorAll("#todo-list li").length;
    const completed = document.querySelectorAll("#todo-list li.completed").length;
    if (counter) {
      counter.textContent = `✅ Completed: ${completed} / ${total}`;
    }
  }
});
