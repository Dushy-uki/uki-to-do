function clickHere() {
    const input = document.getElementById("input").value.trim();
    const priority = document.getElementById("myDropdown").value;
    const taskList = document.getElementById("check");
  
    if (input === "") {
      alert("Please enter a task!");
      return;
    }
  
    const task = document.createElement("div");
    task.className = "task-item";
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
  
    const span = document.createElement("span");
    span.textContent = input;
    span.className = "task-text";
  
    // Priority border
    if (priority === "medium") {
      span.style.borderLeft = "5px solid orange";
    } else if (priority === "low") {
      span.style.borderLeft = "5px solid red";
    } else if (priority === "high") {
      span.style.borderLeft = "5px solid green";
    }
  
    // Checkbox behavior
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        task.remove();
        updateTaskCounts();
      }
    });
  
    task.appendChild(checkbox);
    task.appendChild(span);
    taskList.appendChild(task);
  
    document.getElementById("input").value = "";
    updateTaskCounts(); 
  }
  
  function updateTaskCounts() {
    const allTasks = document.querySelectorAll("#check .task-item").length;
    const completedTasks = document.querySelectorAll("#check .task-item input:checked").length;
  
    document.getElementById("total-count").textContent = allTasks;
    document.getElementById("completed-count").textContent = completedTasks;
  }
  