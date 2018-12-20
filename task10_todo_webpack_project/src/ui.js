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
    this.inputTaskTitle = document.querySelector('#inputTaskTitle');
    this.inputProjectTitle = document.querySelector('#inputProjectTitle');
    this.inputPriority = document.querySelector('#inputPriority');
    this.inputTaskDescribe = document.querySelector('#inputTaskDescribe');
  }

  // Populate tasks item
  populateItemList(items) {
    let html = '';
    items.forEach(item => {
      html += `<div id="tasksItem-${item.id}" class="card mt-2">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <div class="row">
          <div class="col-8">
            <h6 class="card-subtitle mb-2 text-muted">
              Проект:
              <strong class="numberOfProject text-primary"
                >${item.project}</strong
              >
            </h6>
          </div>
          <div class="col-4">
            <h6 class="card-subtitle mb-2 text-muted float-right">
              Приоритет:
              <strong class="numberOfProject text-danger">${
                item.priority
              }</strong>
            </h6>
          </div>
        </div>
        <p class="card-text">
          ${item.description}
        </p>
        <div
          class="btn-group btn-group-sm"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" class="btn btn-secondary">
            Изменить
          </button>
          <button type="button" class="btn btn-success">Закрыть</button>
          <button type="button" class="btn btn-muted">
            Развернуть
          </button>
        </div>
      </div>
    </div>`;
    });

    // Add UI list items
    tasksList.innerHTML = html;
  }

  // Set total tasks number
  setTotalTasks(number) {
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
    const newCard = document.createElement('div');
    newCard.className = 'card mt-2';
    newCard.id = `tasksItem-${newItem.id}`;
    newCard.innerHTML = `<div class="card-body">
    <h5 class="card-title">${newItem.name}</h5>
    <div class="row">
      <div class="col-8">
        <h6 class="card-subtitle mb-2 text-muted">
          Проект:
          <strong class="numberOfProject text-primary"
            >${newItem.project}</strong
          >
        </h6>
      </div>
      <div class="col-4">
        <h6 class="card-subtitle mb-2 text-muted float-right">
          Приоритет:
          <strong class="numberOfProject text-danger">${
            newItem.priority
          }</strong>
        </h6>
      </div>
    </div>
    <p class="card-text">
      ${newItem.description}
    </p>
    <div
      class="btn-group btn-group-sm"
      role="group"
      aria-label="Basic example"
    >
      <button type="button" class="btn btn-secondary">
        Изменить
      </button>
      <button type="button" class="btn btn-success">Закрыть</button>
      <button type="button" class="btn btn-muted">
        Развернуть
      </button>
    </div>
  </div>`;

    // Add UI list items
    tasksList.insertAdjacentElement('beforeend', newCard);
  }

  // Show cards list
  showTasksCards() {
    // Hide Welcome card
    welcomeCard.style.display = 'none';
    // Show collection with tasks list
    tasksCollection.style.display = 'block';
    // Show control panel
    ctrlPanel.style.display = 'block';
  }
  // Clear form inputs
  clearInputs() {
    inputTaskTitle.value = '';
    inputProjectTitle.value = '';
    inputPriority.value = '1';
    inputTaskDescribe.value = '';
  }

  // Hide form card
  cancelForm() {
    newTaskForm.style.display = 'none';
  }
}

export const ui = new UI();
