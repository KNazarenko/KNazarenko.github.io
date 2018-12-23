class UI {
  constructor() {
    this.newTaskBtn = document.querySelector('#newTaskBtn');
    this.totalTasks = document.querySelector('#totalTasks');
    this.welcomeCard = document.querySelector('#welcomeCard');
    this.newTaskForm = document.querySelector('#newTaskForm');
    this.ctrlPanel = document.querySelector('#ctrlPanel');
    this.tasksCollection = document.querySelector('#tasksCollection');
    this.tasksList = document.querySelector('#tasksList');
    this.cancelBtn = document.querySelector('#cancelBtn');
    this.addBtn = document.querySelector('#addBtn');
    this.updateBtn = document.querySelector('#updateBtn');
    this.inputTaskTitle = document.querySelector('#inputTaskTitle');
    this.inputProjectTitle = document.querySelector('#inputProjectTitle');
    this.inputPriority = document.querySelector('#inputPriority');
    this.inputTaskDescribe = document.querySelector('#inputTaskDescribe');
  }

  // Populate tasks item
  populateItemList(items) {
    let html = '';
    items.forEach(function(item) {
      html += `<li id="tasksItem-${item.id}" class="card mt-2">
      <div class="card-body">
        <strong class="card-title"><mark>${item.name}</mark></strong>
        <div class="row mt-2">
          <div class="col-8">
            <strong>
              Проект:
              <span class="numberOfProject text-primary"
                >${item.project}</span
              >
            </strong>
          </div>
          <div class="col-4">
            <strong class="float-right">
              Приоритет:
              <span class="numberOfProject text-danger">${item.priority}</span>
            </strong>
          </div>
        </div>
        <p class="card-text mt-2 displayNone">
        ${item.description}
        </p>
        <div
          class="btn-group btn-group-sm float-right mt-3"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" class="editBtn btn btn-secondary">
            Изменить
          </button>
          <button type="button" class="deleteBtn btn btn-danger">
            Завершить
          </button>
          <button type="button" class="maximizeBtn btn btn-muted">
            Развернуть
          </button>
        </div>
      </div>
    </li>`;
    });

    // Add UI list items
    tasksList.innerHTML = html;
  }

  // Update total tasks number
  updateTotalTasks(number) {
    totalTasks.innerHTML = number;
  }

  // Get item input
  getItemInput() {
    return {
      name: inputTaskTitle.value,
      project: inputProjectTitle.value,
      priority: inputPriority.value,
      description: inputTaskDescribe.value
    };
  }

  // Add new task card
  addNewCard(newItem) {
    const newCard = document.createElement('li');
    newCard.className = 'card mt-2';
    newCard.id = `tasksItem-${newItem.id}`;
    newCard.innerHTML = `<div class="card-body">
      <strong class="card-title"><mark>${newItem.name}</mark></strong>
      <div class="row mt-2">
        <div class="col-8">
          <strong>
            Проект:
            <span class="numberOfProject text-primary"
              >${newItem.project}</span
            >
          </strong>
        </div>
        <div class="col-4">
          <strong class="float-right">
            Приоритет:
            <span class="numberOfProject text-danger">${newItem.priority}</span>
          </strong>
        </div>
      </div>
      <p class="card-text mt-2 displayNone">
      ${newItem.description}
      </p>
      <div
        class="btn-group btn-group-sm float-right mt-3"
        role="group"
        aria-label="Basic example"
      >
        <button type="button" class="editBtn btn btn-secondary">
          Изменить
        </button>
        <button type="button" class="deleteBtn btn btn-danger">
          Завершить
        </button>
        <button type="button" class="maximizeBtn btn btn-muted">
          Развернуть
        </button>
      </div>
    </div>`;

    // Add UI list items
    tasksList.insertAdjacentElement('beforeend', newCard);
  }

  // Show welcome card
  showWelcomeCard() {
    welcomeCard.style.display = 'block';
    tasksCollection.style.display = 'none';
    ctrlPanel.style.display = 'none';
    newTaskForm.style.display = 'none';
  }

  // Show tasks card list
  showTasksCards() {
    welcomeCard.style.display = 'none';
    tasksCollection.style.display = 'block';
    ctrlPanel.style.display = 'block';
    newTaskForm.style.display = 'none';
  }

  // Show form for new task
  showFormForNewTask() {
    newTaskForm.style.display = 'block';
    updateBtn.style.display = 'none';
    addBtn.style.display = 'block';
    ctrlPanel.style.display = 'none';
  }

  // Show form for edit task
  showFormForEditTask() {
    ui.newTaskForm.style.display = 'block';
    ui.updateBtn.style.display = 'block';
    ui.addBtn.style.display = 'none';
    ui.ctrlPanel.style.display = 'none';
  }

  // Clear form inputs
  clearInputs() {
    inputTaskTitle.value = '';
    inputProjectTitle.value = '';
    inputPriority.value = '1';
    inputTaskDescribe.value = '';
  }

  // Add item to form
  addItemToForm(item) {
    inputTaskTitle.value = item.name;
    inputProjectTitle.value = item.project;
    inputPriority.value = item.priority;
    inputTaskDescribe.value = item.description;
  }

  // Update task item
  updateTaskCardData(newData) {
    // Find all task items
    let tasks = tasksList.querySelectorAll('li');
    // Turn Node list into array
    tasks = Array.from(tasks);
    // Find current task item and set values
    tasks.forEach(function(task) {
      // Get id attribute
      let idAttribute = task.getAttribute('id');
      // Update task
      if (idAttribute === `tasksItem-${newData.id}`) {
        task.innerHTML = `<div class="card-body">
          <strong class="card-title"><mark>${newData.name}</mark></strong>
          <div class="row mt-2">
            <div class="col-8">
              <strong>
                Проект:
                <span class="numberOfProject text-primary"
                  >${newData.project}</span
                >
              </strong>
            </div>
            <div class="col-4">
              <strong class="float-right">
                Приоритет:
                <span class="numberOfProject text-danger">${
                  newData.priority
                }</span>
              </strong>
            </div>
          </div>
          <p class="card-text mt-2 displayNone">
          ${newData.description}
          </p>
          <div
            class="btn-group btn-group-sm float-right mt-3"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" class="editBtn btn btn-secondary">
              Изменить
            </button>
            <button type="button" class="deleteBtn btn btn-danger">
              Завершить
            </button>
            <button type="button" class="maximizeBtn btn btn-muted">
              Развернуть
            </button>
          </div>
        </div>`;
      }
    });
  }

  // Delete task item
  deleteCard(id) {
    const itemID = `#tasksItem-${id}`;
    const itemToDelete = document.querySelector(itemID);
    itemToDelete.remove();
  }
  // Maximize/minimize task item
  maxminCard(e) {
    // Find elem to display
    const item = e.target.parentNode.previousElementSibling;
    // Check elem display
    if (item.classList.contains('displayNone')) {
      item.classList.remove('displayNone');
      e.target.innerHTML = 'Свернуть';
      // Change button color
      e.target.classList.remove('btn-muted');
      e.target.classList.add('btn-info');
    } else {
      item.classList.add('displayNone');
      e.target.innerHTML = 'Развернуть';
      // Change button color
      e.target.classList.remove('btn-info');
      e.target.classList.add('btn-muted');
    }
  }
}

export const ui = new UI();
