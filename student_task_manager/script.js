document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript is connected!");

  // Get elements
  const form = document.getElementById("taskForm");
  const input = document.getElementById("taskInput");
  const priority = document.getElementById("priority");
  const taskList = document.getElementById("taskList");
  const emptyMessage = document.getElementById("emptyMessage");

  const totalTasks = document.getElementById("totalTasks");
  const pendingTasks = document.getElementById("pendingTasks");
  const completedTasks = document.getElementById("completedTasks");

  const currentDate = document.getElementById("currentDate");

  // ==============================
  // DATE
  // ==============================

  const today = new Date();

  currentDate.innerText = today.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // ==============================
  // TASK ARRAY
  // ==============================

  let tasks = [];

  // ==============================
  // ADD TASK
  // ==============================

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Add Task button clicked");

    const taskText = input.value.trim();

    const taskPriority = priority.value;

    if (taskText === "") {
      alert("Please enter a task");

      return;
    }

    // Create task
    const task = {
      id: Date.now(),

      text: taskText,

      priority: taskPriority,

      completed: false,
    };

    // Add task to array
    tasks.push(task);

    console.log("Task:", task);

    console.log("Tasks:", tasks);

    // Clear input
    input.value = "";

    // Display tasks
    showTasks();
  });

  // ==============================
  // SHOW TASKS
  // ==============================

  function showTasks() {
    // Clear task list
    taskList.innerHTML = "";

    // No tasks
    if (tasks.length === 0) {
      emptyMessage.style.display = "block";

      updateStats();

      return;
    }

    emptyMessage.style.display = "none";

    // Loop through tasks
    tasks.forEach(function (task) {
      // Create task div
      const taskDiv = document.createElement("div");

      taskDiv.className = "task";

      if (task.completed) {
        taskDiv.classList.add("completed");
      }

      // Task HTML
      taskDiv.innerHTML = `

                <div class="task-left">

                    <input 
                        type="checkbox"
                        class="task-checkbox"
                    >

                    <div class="task-info">

                        <span class="task-title">
                            ${task.text}
                        </span>

                        <span class="priority ${task.priority}">
                            ${task.priority} Priority
                        </span>

                    </div>

                </div>


                <div class="task-actions">

                    <button class="edit-btn">
                        Edit
                    </button>

                    <button class="delete-btn">
                        Delete
                    </button>

                </div>

            `;

      // ==============================
      // CHECKBOX
      // ==============================

      const checkbox = taskDiv.querySelector(".task-checkbox");

      checkbox.checked = task.completed;

      checkbox.addEventListener("change", function () {
        task.completed = checkbox.checked;

        showTasks();
      });

      // ==============================
      // EDIT
      // ==============================

      
      const editButton = taskDiv.querySelector(".edit-btn");

      editButton.addEventListener("click", function () {
        const newText = prompt("Edit task:", task.text);

        if (newText !== null && newText.trim() !== "") {
          task.text = newText.trim();

          showTasks();
        }
      });

      // ==============================
      // DELETE
      // ==============================

      const deleteButton = taskDiv.querySelector(".delete-btn");

      
      deleteButton.addEventListener("click", function () {
        tasks = tasks.filter(function (item) {
          return item.id !== task.id;
        });

        showTasks();
      });

      // Add task to page
      taskList.appendChild(taskDiv);
    });

    // Update statistics
    updateStats();
  }

  // ==============================
  // STATISTICS
  // ==============================

  function updateStats() {
    const total = tasks.length;

    const completed = tasks.filter(function (task) {
      return task.completed === true;
    }).length;

    const pending = total - completed;

    totalTasks.innerText = total;

    pendingTasks.innerText = pending;

    completedTasks.innerText = completed;
  }

  // ==============================
  // INITIAL DISPLAY
  // ==============================

  showTasks();
});



// change the UI to make modern
// work on clear completed ..... done
//