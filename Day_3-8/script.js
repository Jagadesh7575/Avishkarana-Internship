function addTask() {
    // Get value from taskInput
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    // If input is empty, show alert
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create li element
    const li = document.createElement("li");

    // Add task text
    const textSpan = document.createElement("span");
    textSpan.textContent = taskText;
    li.appendChild(textSpan);

    // Add Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        deleteTask(this);
    };
    li.appendChild(deleteBtn);

    // Append task to taskList
    const taskList = document.getElementById("taskList");
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// deleteTask(button) function to remove task
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
