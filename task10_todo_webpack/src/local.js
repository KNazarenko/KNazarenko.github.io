class localStorageCtrl {
  // Add new task to LS
  addNewTask(newItem) {
    let tasks;
    // Check if LS has data
    if (localStorage.getItem('taskItems') === null) {
      tasks = [];
      // Add new item to array
      tasks.push(newItem);
    } else {
      tasks = JSON.parse(localStorage.getItem('taskItems'));
      // Add new item to array
      tasks.push(newItem);
    }
    // Update LS data array
    localStorage.setItem('taskItems', JSON.stringify(tasks));
  }

  // Get LS data
  getData() {
    let tasks;
    // Check if LS has data
    if (localStorage.getItem('taskItems') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('taskItems'));
    }
    return tasks;
  }

  // Update data into LS
  updateData(newData) {
    let tasks = JSON.parse(localStorage.getItem('taskItems'));
    // Find task item and update data
    tasks.forEach(function(task) {
      if (task.id === newData.id) {
        task.name = newData.name;
        task.project = newData.project;
        task.priority = newData.priority;
        task.description = newData.description;
      }
    });
    // Update LS data array
    localStorage.setItem('taskItems', JSON.stringify(tasks));
  }

  // Delete task item
  deleteTaskItem(id) {
    let tasks = JSON.parse(localStorage.getItem('taskItems'));
    // Find task item with id
    tasks.forEach(function(task, index) {
      if (id === task.id) {
        tasks.splice(index, 1);
        // Update LS data array
        localStorage.setItem('taskItems', JSON.stringify(tasks));
      }
    });
  }
}

export const local = new localStorageCtrl();
