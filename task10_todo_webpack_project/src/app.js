import { ctrl } from './ctrl';
import { ui } from './ui';
import { local } from './local';

// Fetch items from data structure
const items = ctrl.getItems();
// Populate list with items
ui.populateItemList(items);
// Show cards list UI
ui.showTasksCards();

// Set total tasks number
const tasksNumber = function() {
  // Get total tasks number
  const totalTasks = ctrl.getTotalTasks();
  // Set total tasks number UI
  ui.setTotalTasks(totalTasks);
  console.log(totalTasks);
};

// Load event listeners
const loadEventListeners = function() {
  // Open form for new task
  ui.newTaskBtn.addEventListener('click', openFormForNewTask);
  // Add new task
  ui.addBtn.addEventListener('click', addNewTask);
  // Cancel new task
  ui.cancelBtn.addEventListener('click', cancelNewTask);
};

// Add new task
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
    // Show cards list UI
    ui.showTasksCards();
    // Hide form card
    ui.cancelForm();
    // Clear form inputs UI
    ui.clearInputs();
    // Set total tasks number
    tasksNumber();
  } else {
    // Show error for empty inputs
    ui.showError();
  }
}

// Open form for new task
const openFormForNewTask = function() {
  ui.newTaskForm.style.display = 'block';
  // Hide controlle panel
  ui.ctrlPanel.style.display = 'none';
};

// Cancel new task
const cancelNewTask = function(e) {
  e.preventDefault();
  ui.cancelForm();
  // Show controlle panel
  ui.ctrlPanel.style.display = 'block';
};
// Load event listeners
loadEventListeners();
// Set total tasks number
tasksNumber();
