class UI {
  constructor() {
    this.newTaskBtn = document.querySelector('#newTaskBtn');
    this.welcomeCard = document.querySelector('#welcomeCard');
    this.newTaskForm = document.querySelector('#newTaskForm');
    this.ctrlPanel = document.querySelector('#ctrlPanel');
    this.cardsCollection = document.querySelector('#cardsCollection');
    this.cardsList = document.querySelector('#cardsList');
    this.cancelBtn = document.querySelector('#cancelBtn');
    this.addBtn = document.querySelector('#addBtn');
  }

  populateItemList(items) {
    let html = '';
    items.forEach(item => {
      html += `<div id="item-${item.id}" class="card mt-2">
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

      // Insert list items
      cardsList.innerHTML = html;
    });

    // Hide Welcome card
    welcomeCard.style.display = 'none';
    // Show collection with tasks list
    cardsCollection.style.display = 'block';
  }

  // hide form
  cancelForm() {
    this.newTaskForm.style.display = 'none';
  }
}

export const ui = new UI();
