// Function to add a task
function addTask() {
  let taskInput = document.getElementById("new-task");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="remove-btn" onclick="removeTask(this)">X</button>`;

  // Add click event to toggle completion
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  document.getElementById("todo-list").appendChild(li);
  taskInput.value = ""; // Clear input field
}

// Function to remove a task
function removeTask(button) {
  let li = button.parentElement;
  li.remove();
}

//TEST FOR CHECKING GIT MERGE
