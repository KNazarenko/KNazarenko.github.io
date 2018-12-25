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

  // Disable submit on enter
  document.addEventListener('keypress', function(e) {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      return false;
    }
  });
};

// Open form for new task
function openFormForNewTask() {
  // Check if new task form open
  if (!openNewTaskFormFlag) {
    // Show form
    ui.showFormForNewTask();
    // Clear inputs
    ui.clearInputs();
  } else {
    // Clear form inputs UI
    ui.clearInputs();
    // Show cards list UI
    ui.showTasksCards();
  }
  // Set toggle for flag
  openNewTaskFormFlag = !openNewTaskFormFlag;
}

// Add new task sumbit
function addNewTask(e) {
  e.preventDefault();
  // Get new input from UI
  const input = ui.getItemInput();
  // Check input for blind
  if (input.name !== '' && input.project !== '' && input.description !== '') {
    console.log(input);
    // Add new task to data
    const newItem = ctrl.addNewItem(input);
    // Add new card to UI
    ui.addNewCard(newItem);
    // Clear form inputs UI
    ui.clearInputs();
    // Show cards list UI
    ui.showTasksCards();
    // Set total tasks number
    setTasksNumber();
  } else {
    // Show error for empty inputs
    ui.showError();
  }
}

// Edit task click
function editTaskClick(e) {
  // Check for edit button
  if (e.target.classList.contains('editBtn')) {
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
  // Get item data from inputs
  const input = ui.getItemInput();
  // Update item data
  const newData = ctrl.updateItemData(input);
  // Update task card
  ui.updateTaskCardData(newData);
  // Clear form inputs UI
  ui.clearInputs();
  // Show cards list UI
  ui.showTasksCards();
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
const cancelClick = function(e) {
  e.preventDefault();
  // Clear form inputs UI
  ui.clearInputs();
  // Show cards list UI
  ui.showTasksCards();
};
// Load event listeners
loadEventListeners();
// Set total tasks number
setTasksNumber();
// Show cards
showCards();
