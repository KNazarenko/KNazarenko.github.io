import { ctrl } from './ctrl';
import { ui } from './ui';
import { local } from './local';

const showCards = function() {
  // Check for presence task cards
  if (ctrl.data.totalTasks === 0) {
    // Show welcome card
    ui.showWelcomeCard();
  } else {
    // Show cards list UI
    ui.showTasksCards();
  }
};
// Set flag for open new task form
let openNewTaskFormFlag = false;

// Fetch items from data structure
const items = ctrl.getItems();
// Populate list with items
ui.populateItemList(items);
// Const for select all
const selectAll = 'Все...';
// Populate select
ui.populateSelect(items, selectAll);

// Set total tasks number
const setTasksNumber = function() {
  // Get total tasks number
  const totalTasks = ctrl.totalTasksNumber();
  // Update total tasks number UI
  ui.updateTotalTasks(totalTasks);
};

// Load event listeners
const loadEventListeners = function() {
  // Open form for new task
  ui.newTaskBtn.addEventListener('click', openFormForNewTask);
  // Add new task
  ui.addBtn.addEventListener('click', addNewTask);
  // Cancel new task
  ui.cancelBtn.addEventListener('click', cancelClick);
  // Open form for edit task
  ui.tasksList.addEventListener('click', editTaskClick);
  // Update task
  ui.updateBtn.addEventListener('click', updateTaskSubmit);
  // Delete task
  ui.tasksList.addEventListener('click', deleteTaskSubmit);
  // Maximize/minimize task body
  ui.tasksList.addEventListener('click', maxminTaskSubmit);
  // Select by project name
  ui.selectProjectName.addEventListener('change', filterByProjectName);
  // Select by priority
  ui.checkBoxInput.addEventListener('change', filterByPriority);

  // Disable submit on enter
  document.addEventListener('keypress', function(e) {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      return false;
    }
  });
};

// Open form for new task
function openFormForNewTask(e) {
  // Check if new task form open
  if (!openNewTaskFormFlag) {
    // Clear error inputs
    ui.clearErrorInputs();
    // Show form
    ui.showFormForNewTask();
    // Clear inputs
    ui.clearInputs();
    // Change button name
    e.target.innerHTML = 'Отменить';
    // Set toggle for flag
    openNewTaskFormFlag = !openNewTaskFormFlag;
  } else {
    // Clear form inputs UI
    ui.clearInputs();
    // Show cards list UI
    ui.showTasksCards();
    // Change button name
    e.target.innerHTML = 'Новая задача';
    // Set toggle for flag
    openNewTaskFormFlag = !openNewTaskFormFlag;
  }
}

// Add new task sumbit
function addNewTask(e) {
  e.preventDefault();
  // Clear error inputs
  ui.clearErrorInputs();
  // Get new input from UI
  const input = ui.getItemInput();
  // Check inputs for blind
  if (input.name !== '' && input.project !== '' && input.description !== '') {
    // Add new task to data
    const newItem = ctrl.addNewItem(input);
    // Add new card to UI
    ui.addNewCard(newItem);
    // Add new task to LS
    local.addNewTask(newItem);
    // Clear form inputs UI
    ui.clearInputs();
    // Show cards list UI
    ui.showTasksCards();
    // Add new project name to select
    ui.populateSelect(ctrl.data.taskItems, selectAll);
    // Update filter tasks by project name
    filterByProjectName();
    // Set toggle for flag
    openNewTaskFormFlag = !openNewTaskFormFlag;
    // Set total tasks number
    setTasksNumber();
  } else {
    // Show error for empty inputs
    ui.showError();
  }
}

// Edit task click
function editTaskClick(e) {
  // Check if new task form open
  if (openNewTaskFormFlag) {
    // Change new task button name
    ui.newTaskBtn.innerHTML = 'Новая задача';
    // Set toggle for flag
    openNewTaskFormFlag = !openNewTaskFormFlag;
  }
  // Check for edit button
  if (e.target.classList.contains('editBtn')) {
    // Clear error inputs
    ui.clearErrorInputs();
    // Open form for edit task
    ui.showFormForEditTask();
    // Set current item
    ctrl.setCurrentItem(e);
    // Get current item
    const itemToEdit = ctrl.getCurrentItem();
    // Add item to form
    ui.addItemToForm(itemToEdit);
  }
}

// Update task submit
function updateTaskSubmit(e) {
  e.preventDefault();
  // Clear error inputs
  ui.clearErrorInputs();
  // Get update input from UI
  const input = ui.getItemInput();
  // Check inputs for blind
  if (input.name !== '' && input.project !== '' && input.description !== '') {
    // Update item data
    const newData = ctrl.updateItemData(input);
    // Update task card
    ui.updateTaskCardData(newData);
    // Update data into LS
    local.updateData(newData);
    // Update project name to select
    ui.populateSelect(ctrl.data.taskItems, selectAll);
    // Update filter tasks by project name
    filterByProjectName();
    // Clear form inputs UI
    ui.clearInputs();
    // Show cards list UI
    ui.showTasksCards();
  } else {
    // Show error for empty inputs
    ui.showError();
  }
}

// Delete task click
function deleteTaskSubmit(e) {
  // Check for delete button
  if (e.target.classList.contains('deleteBtn')) {
    // Show cards list UI
    ui.showTasksCards();
    // Set current item
    ctrl.setCurrentItem(e);
    // Get current item
    const itemToDelete = ctrl.getCurrentItem();
    // Delete item from data
    ctrl.deleteCurrentItem(itemToDelete.id);
    // Delete item from UI
    ui.deleteCard(itemToDelete.id);
    // Update total tasks number
    setTasksNumber();
    // Update project name to select
    ui.populateSelect(ctrl.data.taskItems, selectAll);
    // Update filter tasks by project name
    filterByProjectName();
    // Delete task from LS data
    local.deleteTaskItem(itemToDelete.id);
    // Check for presence task cards
    showCards();
  }
}

// Maximize/minimize task click
function maxminTaskSubmit(e) {
  // Check for maximize button
  if (e.target.classList.contains('maximizeBtn')) {
    ui.maxminCard(e);
  }
}

// Cancel new task
function cancelClick(e) {
  e.preventDefault();
  // Clear form inputs UI
  ui.clearInputs();
  // Show cards list UI
  ui.showTasksCards();
  // Check if new task form open
  if (openNewTaskFormFlag) {
    // Change new task button name
    ui.newTaskBtn.innerHTML = 'Новая задача';
    // Set toggle for flag
    openNewTaskFormFlag = !openNewTaskFormFlag;
  }
  // Check for presence task cards
  showCards();
}

// Filter tasks by project name
function filterByProjectName() {
  //Disable filter by priority
  if (ui.checkBoxInput.checked == true) {
    ui.checkBoxInput.checked = false;
  }
  // Fetch items from data structure
  const items = ctrl.getItems();
  // Fetch select input
  const select = ui.selectProjectName.value;
  // Fetch filter items to populate
  const filterItems = ctrl.filterCardsBySelect(items, select);
  // Check if select all
  if (select == selectAll) {
    // Populate list with items
    ui.populateItemList(items);
  } else {
    // Populate list with filter items
    ui.populateItemList(filterItems);
  }
}

// Filter tasks by priority
function filterByPriority(e) {
  if (e.target.checked == true) {
    ui.filterCardsByPriority();
  } else {
    // Filter tasks by project name
    filterByProjectName();
  }
}

// Load event listeners
loadEventListeners();
// Set total tasks number
setTasksNumber();
// Show cards
showCards();
